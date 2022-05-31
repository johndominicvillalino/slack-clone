<<<<<<< HEAD
import './App.css'
import CreateChannel from './components/Create-new-channel/CreateChannel'
import MessageDirect from './components/MessageDirect/MessageDirect'

function App() {
  return (
    <>
      App
    </>
  )
}

export default App
=======
import "./App.css";
import MessageDirect from "./components/MessageDirect/MessageDirect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import styled from "styled-components";
import SideBarNav from "./components/layouts/SideBarNav/SideBarNav";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <SideBarNav />
            <Switch>
              <Route path="/" exact>
                {/* Main Chat Here */}
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
>>>>>>> fa2ec61b50798d7a04b5e55e97d6217aa299bc4f
