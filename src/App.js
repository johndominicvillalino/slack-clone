import "./App.css";
import MessageDirect from "./components/MessageDirect/MessageDirect";
import { Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import styled from "styled-components";
import SideBarNav from "./components/layouts/SideBarNav/SideBarNav";
import NewMessage from "./components/NewMessage/NewMessage";

function App() {
  return (
    <>
      <Header />
      <AppBody>
      <SideBarNav />
        <Switch>
          <Route path="/" exact>
            {/* Main Chat Here */}
            asdasdas
          </Route>
          <Route path='/test' exact>
            <NewMessage></NewMessage>
          </Route>
        </Switch>
      </AppBody>
    </>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
