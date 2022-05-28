import "./App.css";
import MessageDirect from "./components/MessageDirect/MessageDirect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/message" component={MessageDirect} />
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
