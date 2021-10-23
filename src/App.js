import { useEffect, useState } from "react";
import TopNavbarComponent from "./Components/TopNavbarComponent/TopNavbarComponent";
import SecondNavbarComponent from "./Components/SecondNavbarComponent/SecondNavbarComponent";
import { Route, Switch } from "react-router";

import Category from "./Pages/CategoryPage/Category";
import HomePage from "./Pages/HomePage/HomePage";
import ProductsShow from "./Pages/ProductsShowPage/ProductsShow";
import SignInSignOutComponent from "./Pages/SignInSingOutPage/SignInSignOutComponent/SignInSignOutComponent";
import ShopPage from "./Pages/ShopPage/ShopPage";

import { auth, createUserProfileDoc } from "./Components/Firebase/Firebase.utili";

import "./App.css";

function App() {
  const [User, setUser] = useState({
    currentUser: null,
  });

  const [FixNavbar, setFixNavbar] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      createUserProfileDoc(userAuth);
      setUser({ currentUser: userAuth });
    });
  }, []);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setFixNavbar(true);
    }
    if (window.scrollY < 10) {
      setFixNavbar(false);
    }
  });

  return (
    <div className="App">
      <div className={FixNavbar == true ? "TopNavbarDiv fixNavbarDiv" : "TopNavbarDiv"}>
        <TopNavbarComponent userData={User.currentUser} />
        <SecondNavbarComponent />
      </div>

      <Switch>
        <Route exact path="/Category:Name" component={Category} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Products:Name" component={ProductsShow} />
        <Route exact path="/User:Name" component={SignInSignOutComponent} />
        <Route exact path="/Shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
