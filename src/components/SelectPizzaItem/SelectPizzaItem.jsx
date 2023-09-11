import React from "react";
import { useDispatch } from "react-redux";

const SelectPizzaItem = ({ pizza }) => {
    const dispatch = useDispatch();

    const addPizzaToCart = () => {
dispatch({ type: 'ADD_TO_CART', payload: pizza})
    }
    
  return (
    <div>
      <img src={pizza.image_path} width="20%" height="20%"/>
      <h2>{pizza.name}</h2> {pizza.description} <br /> ${pizza.price}
      <button onClick={addPizzaToCart}>Add to Cart</button> 
    </div>
  );
};

export default SelectPizzaItem;
