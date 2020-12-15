import "./App.css";
import Homepage from "./pages/Homepage.jsx";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./pages/Shop";
import LoginRegister from "./pages/LoginRegister.jsx";
function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/">
        <Homepage />.
      </Route>
      <Route exact path="/shop">
        <Shop />
      </Route>
      <Route exact path="/login">
        <LoginRegister />
      </Route>
    </Router>
  );
}

export default App;
