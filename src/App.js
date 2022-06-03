import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import styled from "styled-components";
import SideBarNav from "./components/layouts/SideBarNav/SideBarNav";
import NewMessage from "./components/NewMessage/NewMessage";
import { useEffect } from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {connect} from 'react-redux'
import autoLogin from './components/actions/autoLogin'
import { useHistory } from 'react-router-dom';
import ChannelMessages from "./components/ChannelMessages/ChannelMessages";
import CreateChannel from "./components/Channels/CreateChannel";
import DirectMessages from "./components/DirectMessages/DirectMessages";


function App({autoLogin}) {

  let history = useHistory()

  useEffect(() => {

    let checkUser = window.localStorage.getItem('currentUser')
    checkUser = JSON.parse(checkUser)

    if (!checkUser) {
      history.push('/')
      return
    }

    const loginNow = async () => {
      await autoLogin(checkUser)
    }


    loginNow()
  },[])

  return (
    <>

      <Switch>

        <Route path='/' exact>
          <Login></Login>
        </Route>

        <Route path='/register' exact>
          <Register />
        </Route>

        <Route path='/:id/client' exact>
          <Header ></Header>
          <AppBody>
            <SideBarNav />
          </AppBody>
        </Route>


        <Route path='/:id/new-message/' exact>
          <Header ></Header>
          <AppBody>
            <SideBarNav />
            <NewMessage></NewMessage>
          </AppBody>
        </Route>


        <Route path='/:id/channel/:id' exact>
          <Header ></Header>
          <AppBody>
            <SideBarNav />
            <ChannelMessages></ChannelMessages>
          </AppBody>
        </Route>

        <Route path='/:id/create-channel' exact>
          <Header ></Header>
          <AppBody>
            <SideBarNav />
            <CreateChannel></CreateChannel>
          </AppBody>
        </Route>

        <Route path='/:id/direct/:id' exact>
          <Header ></Header>
          <AppBody>
            <SideBarNav />
            <DirectMessages></DirectMessages>
          </AppBody>
        </Route>


        <Route path='*'>
            <Login></Login>
        </Route>


      </Switch>
    </>
  );
}

export default connect(null,{autoLogin})(App);

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
