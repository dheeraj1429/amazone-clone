import { useEffect, useState } from "react";
import TopNavbarComponent from "./Components/TopNavbarComponent/TopNavbarComponent";
import SecondNavbarComponent from "./Components/SecondNavbarComponent/SecondNavbarComponent";
import { Route, Switch } from "react-router";

import Category from "./Pages/CategoryPage/Category";
import HomePage from "./Pages/HomePage/HomePage";
import ProductsShow from "./Pages/ProductsShowPage/ProductsShow";
import SignInSignOutComponent from "./Pages/SignInSingOutPage/SignInSignOutComponent/SignInSignOutComponent";
import ShopPage from "./Pages/ShopPage/ShopPage";
import YourOrderPage from "./Pages/YourOrderPage/YourOrderPage";

import { auth, createUserProfileDoc } from "./Components/Firebase/Firebase.utili";

import { AllProducts } from "./Components/Products/Products.uitil";

import { setData } from "./Redux/Action/action";
import { useDispatch } from "react-redux";

import "./App.css";

function App() {
  const [ProductsData, setProductsData] = useState({
    productsCollection: AllProducts,
  });

  const dispatch = useDispatch();
  const [User, setUser] = useState({
    currentUser: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      createUserProfileDoc(userAuth);
      setUser({ currentUser: userAuth });
    });
    dispatch(setData(ProductsData.productsCollection));
  }, []);

  return (
    <div className="App">
      <TopNavbarComponent userData={User.currentUser} />
      <SecondNavbarComponent />

      <Switch>
        <Route exact path="/Category:Name" component={Category} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Products:Name" component={ProductsShow} />
        <Route exact path="/User:Hello,_Sign_In" component={SignInSignOutComponent} />
        <Route exact path="/Shop" component={ShopPage} />
        <Route exact path="/Orders" component={YourOrderPage} />
      </Switch>
    </div>
  );
}

export default App;
