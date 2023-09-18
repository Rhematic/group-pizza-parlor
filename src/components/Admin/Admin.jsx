import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Admin() {
  const dispatch = useDispatch();
  const orderList = useSelector((store) => store.order);

  const fetchOrders = () => {
    axios
      .get("/api/order")
      .then((response) => {
        dispatch({ type: "SET_ORDER", payload: response.data });
      })
      .catch((error) => {
        console.log("Error fetching orders", error);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <table id="orders">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr key={order.id}>
              <td>{order.customer_name}</td>
              <td>{order.time}</td>
              <td>{order.type}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
