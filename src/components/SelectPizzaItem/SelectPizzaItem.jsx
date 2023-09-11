import React from "react";
import { useDispatch } from "react-redux";

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SelectPizzaItem = ({ pizza }) => {
    const dispatch = useDispatch();

    const addPizzaToCart = () => {
dispatch({ type: 'ADD_TO_CART', payload: pizza})
    }
    
  return (
    <Stack>
      <Item>
      <img src={pizza.image_path} width="40%" height="40%"/>
      <h2>{pizza.name}</h2> {pizza.description} <br /> 
      <b>${pizza.price}</b>
      <br/>
      <button onClick={addPizzaToCart}>Add to Cart</button> 
      </Item>
    </Stack>
  );
};

export default SelectPizzaItem;
