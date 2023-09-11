import React from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import CustomerInformation from "../CustomerInformation/CustomerInformation";
import Checkout from "../Checkout/Checkout";
import Admin from "../Admin/Admin";
import SelectPizza from "../SelectPizza/SelectPizza";

function App() {
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

        <Route path="/" exact></Route>
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

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
