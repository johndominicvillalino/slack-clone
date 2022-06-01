import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import styled from "styled-components";
import SideBarNav from "./components/layouts/SideBarNav/SideBarNav";
import NewMessage from "./components/NewMessage/NewMessage";
import {useEffect} from 'react'
import {connect} from 'react-redux'
import loginFunc from './components/request/login'

function App({loginFunc}) {

  useEffect(() => {

    const loginNow = async () => {

        try {
            await loginFunc({
                email: 'usaaa2@example.com',
                password: 12345678
            })
        } catch (err) {
            console.error(err.message)
        }

    }
    loginNow()
    return () => {
    }
}, [loginFunc])


  return (
    <>
      <Header ></Header>
      <AppBody>
        <SideBarNav />
        <Switch>
          <Route path="/" exact>
            {/* Main Chat Here */}
            asdasdas
          </Route>
          <Route path='/new-message' exact>
            <NewMessage></NewMessage>
          </Route>
        </Switch>
      </AppBody>
    </>
  );
}

export default connect(null,{loginFunc})(App);

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
