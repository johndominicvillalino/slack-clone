import "./App.css";
import MessageDirect from "./components/MessageDirect/MessageDirect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/message" component={MessageDirect} />
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
