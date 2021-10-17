import TopNavbarComponent from "./Components/TopNavbarComponent/TopNavbarComponent";
import SecondNavbarComponent from "./Components/SecondNavbarComponent/SecondNavbarComponent";
import { Route, Switch } from "react-router";

import Category from "./Pages/CategoryPage/Category";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNavbarComponent />
      <SecondNavbarComponent />

      <Switch>
        <Route exact path="/Category:Name" component={Category} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
