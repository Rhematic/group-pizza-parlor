import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function CustomerInformation() {
  const dispatch = useDispatch();
  const history = useHistory();

  const pizzas = useSelector((store) => store.pizzas);
  const orders = useSelector((store) => store.order);

  const [info, setInfo] = useState({
    customer_name: "",
    street_address: "",
    city: "",
    zip: "",
    type: "",
  });

  const addCustomerInfo = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_CUSTOMER",
      payload: {
        customer_name: info.customer_name,
        street_address: info.street_address,
        city: info.city,
        zip: info.zip,
        total: sumOrders(),
        type: info.type,
        pizzas: pizzaQuantity(),
      },
    });

    history.push("/checkout");
  };

  function sumOrders() {
    let total = 0;
    for (let pizza of orders) {
      total += Number(pizza.price);
    }
    return total.toFixed(2);
  }

  function pizzaQuantity() {
    let pizzaQuantity = [];
    for (let pizza of pizzas) {
      let count = 0;
      for (let order of orders) {
        if (pizza.id === order.id) {
          count++;
        }
      }
      if (count > 0) {
        pizzaQuantity.push({ id: pizza.id, quantity: count });
      }
    }
    console.log(pizzaQuantity);
    return pizzaQuantity;
  }

  return (
    <div>
      <h1>Step 2: Select Your Information</h1>

      <br />
      <button onClick={() => history.push("/")}>
        Return to Pizza Selection
      </button>
      <br />
      <br />
      <form onSubmit={addCustomerInfo}>
        <input
          placeholder="Name"
          onChange={(event) =>
            setInfo({ ...info, customer_name: event.target.value })
          }
        />
        <br />
        <input
          placeholder="Street Address"
          onChange={(event) =>
            setInfo({ ...info, street_address: event.target.value })
          }
        />
        <br />
        <input
          placeholder="City"
          onChange={(event) => setInfo({ ...info, city: event.target.value })}
        />
        <br />
        <input
          placeholder="Zip"
          onChange={(event) => setInfo({ ...info, zip: event.target.value })}
        />
        <br />
        {/* the type should two radio buttons that are "pickup" or "delivery" */}
        <input
          type="radio"
          name="type"
          value="pickup"
          onChange={(event) => setInfo({ ...info, type: event.target.value })}
        />
        <label htmlFor="pickup">Pickup</label>

        <input
          type="radio"
          name="type"
          value="delivery"
          onChange={(event) => setInfo({ ...info, type: event.target.value })}
        />
        <label htmlFor="delivery">Delivery</label>

        <br />
        <br />
        <button type="submit">
          Submit Information and Continue to Checkout
        </button>
      </form>
    </div>
  );
}

export default CustomerInformation;
