import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();

  const order = useSelector((store) => store.order);
  const customer = useSelector((store) => store.customer);

  const submitOrder = () => {
    Axios.post("/api/order", customer)
      .then((response) => {
        console.log(response);
        dispatch({ type: "CLEAR_ORDER" });
        dispatch({ type: "CLEAR_CUSTOMER" });
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Checkout">
      <h1>Step 3: Checkout</h1>
      <h3>{customer.customer_name}</h3>
      <h3>{customer.street_address}</h3>
      <h3>{customer.city}</h3>
      <h3>{customer.zip}</h3>
      <h3>{customer.type}</h3>
      <h3>{customer.total}</h3>

      {/* map the order as a table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {order.map((pizza) => {
            return (
              <tr key={pizza.id}>
                <td>{pizza.name}</td>
                <td>{pizza.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={submitOrder}>Submit Order</button>
    </div>
  );
}

export default Checkout;
