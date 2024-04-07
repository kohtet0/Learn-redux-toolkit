import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restockCake } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>number of cake - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>order</button>
      <button onClick={() => dispatch(restockCake(1))}>restock</button>
    </div>
  );
};

export default CakeView;
