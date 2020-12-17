import "./App.css";
import Homepage from "./pages/Homepage.jsx";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./pages/Shop";
import LoginRegister from "./pages/LoginRegister.jsx";
import React from "react";
import { auth, createUser } from "./firebase.util";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const userRef = await createUser(userAuth);
      if (userRef) {
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
        console.log(userRef.get(), "GET");
        console.log(userRef.onSnapshot(), "onSnapshot");
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <Router>
        <Nav currentUser={this.state.currentUser} />
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
}

export default App;
