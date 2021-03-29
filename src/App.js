import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import "./App.css";
import { Spinner } from "./components/Spinner";
import Nav from "./components/Nav";

import { auth, createUser } from "./firebase.util";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/userActions";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
// Dynamic Imorting with React Lazy
const Homepage = lazy(() => import("./pages/Homepage"));
const Shop = lazy(() => import("./pages/Shop"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Category = lazy(() => import("./pages/Category"));
const LoginRegister = lazy(() => import("./pages/LoginRegister.jsx"));

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
      <div>
        <Nav />
        <ErrorBoundary>
          <Suspense fallback={<Spinner size={28} />}>
            <Router>
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
                {this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <LoginRegister />
                )}
              </Route>
            </Router>
          </Suspense>
        </ErrorBoundary>
      </div>
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
