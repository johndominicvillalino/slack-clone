import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import styled from "styled-components";
import SideBarNav from "./components/layouts/SideBarNav/SideBarNav";
import NewMessage from "./components/NewMessage/NewMessage";
import { useEffect } from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'


function App() {


  return (
    <>

      <Switch>

        <Route path='/' exact>
          <Login></Login>
        </Route>

        <Route path='/register' exact>
          <Register />
        </Route>

        <Route path='/:id/client'>
          <Header ></Header>
          <AppBody>
            <SideBarNav />
          </AppBody>
        </Route>


        <Route path='/:id/new-message/'>
          <Header ></Header>
          <AppBody>
            <SideBarNav />
            <NewMessage></NewMessage>
          </AppBody>
        </Route>





      </Switch>
    </>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
