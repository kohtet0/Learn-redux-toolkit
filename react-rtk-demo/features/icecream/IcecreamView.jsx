import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderedIcecream, restock } from "./icecreamSlice";

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>number of icecream - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(orderedIcecream())}>order</button>
      <button onClick={() => dispatch(restock(1))}>restock</button>
    </div>
  );
};

export default IcecreamView;
