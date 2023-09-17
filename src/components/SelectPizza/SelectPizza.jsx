import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

import "./SelectPizza.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "lightblue",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SelectPizza = () => {
  const pizzas = useSelector((store) => store.pizzas);
  const dispatch = useDispatch();

  const addPizzaToCart = (pizza) => {
    dispatch({ type: "ADD_PIZZA", payload: pizza });
  };

  return (
    <div className="pizza-stack-container">
      {pizzas.map((pizza) => (
        <Stack key={pizza.id} className="pizza-stack">
          <Item>
            <img src={pizza.image_path} alt={pizza.name} />
            <h2>{pizza.name}</h2> <div className="pizza-description">{pizza.description} </div>
            <h3>${pizza.price}</h3>
            <Button variant="outlined" color="error" onClick={() => addPizzaToCart(pizza)}>Add to Cart</Button>
          </Item>
        </Stack>
      ))}
    </div>
  );
};

export default SelectPizza;