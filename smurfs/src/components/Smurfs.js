import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";

const Smurfs = () => {
  const { smurfs, error, isFetching } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurfs());
  }, []);
  console.log(smurfs);
  return (
    <div>
      <h1>Here are the Smurfs</h1>
      {smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

export default Smurfs;
