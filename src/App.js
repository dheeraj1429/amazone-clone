import { useEffect, useState } from "react";
import TopNavbarComponent from "./Components/TopNavbarComponent/TopNavbarComponent";
import SecondNavbarComponent from "./Components/SecondNavbarComponent/SecondNavbarComponent";
import { Route, Switch } from "react-router";

import Category from "./Pages/CategoryPage/Category";
import HomePage from "./Pages/HomePage/HomePage";
import ProductsShow from "./Pages/ProductsShowPage/ProductsShow";
import SignInSignOutComponent from "./Pages/SignInSingOutPage/SignInSignOutComponent/SignInSignOutComponent";

import { firestore } from "./Components/Firebase/Firebase.utili";

import { auth } from "./Components/Firebase/Firebase.utili";

import "./App.css";

function App() {
  const [User, setUser] = useState({
    currentUser: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      setUser({ currentUser: userAuth });
    });
  }, []);

  return (
    <div className="App">
      <TopNavbarComponent userData={User.currentUser} />
      <SecondNavbarComponent />

      <Switch>
        <Route exact path="/Category:Name" component={Category} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Products:Name" component={ProductsShow} />
        <Route exact path="/User:Name" component={SignInSignOutComponent} />
      </Switch>
    </div>
  );
}

export default App;
