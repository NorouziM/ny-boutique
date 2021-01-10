import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React from "react";

import "./App.css";
import Homepage from "./pages/Homepage.jsx";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import LoginRegister from "./pages/LoginRegister.jsx";
import Category from "./pages/Category";

import Nav from "./components/Nav";

import { auth, createUser } from "./firebase.util";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/userActions";
class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/">
          <Homepage />.
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route path="/shop/:category">
          <Category />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/login">
          {this.props.currentUser ? <Redirect to="/" /> : <LoginRegister />}
        </Route>
      </Router>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
