import React, { useState } from "react";
import SelectPizzaItem from "../SelectPizzaItem/SelectPizzaItem";
import CustomBox from "../Box/Box";

import { useSelector } from "react-redux";

const SelectPizza = () => {
  const pizzas = useSelector((store) => store.pizzas);

  return pizzas.map((pizza) => (
    <div key={pizza.id}>
      <SelectPizzaItem pizza={pizza} />
    </div>
  ));
};

export default SelectPizza;
