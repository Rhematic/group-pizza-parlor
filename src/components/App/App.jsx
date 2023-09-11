import React, {useEffect} from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import CustomerInformation from "../CustomerInformation/CustomerInformation";
import Checkout from "../Checkout/Checkout";
import Admin from "../Admin/Admin";
import SelectPizza from "../SelectPizza/SelectPizza";
import { useDispatch } from "react-redux";
import Axios from "axios";

function App() {
  const dispatch = useDispatch();
  const axios = Axios;

  const fetchPizzaList = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        dispatch({ type: "SET_PIZZA_LIST", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        alert("Could not get pizzas");
      });
  };

  useEffect(() => {
    fetchPizzaList();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <Router>
        <nav>
          <div>
            <Link to="/">Select Pizza</Link>
          </div>
          <div>
            <Link to="/customer">Customer Information</Link>
          </div>
          <div>
            <Link to="/checkout">Checkout</Link>
          </div>
        </nav>

        <Route path="/" exact>
          <SelectPizza />
        </Route>
        <Route path="/customer">
          <CustomerInformation />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>

    </div>
  );
}

export default App;
