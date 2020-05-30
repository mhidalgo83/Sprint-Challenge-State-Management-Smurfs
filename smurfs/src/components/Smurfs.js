import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
import Smurf from "./Smurf";

const Smurfs = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    height: "",
    age: "",
    id: Date.now(),
  });
  const { smurfs, error, isFetching } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurfs());
  }, [smurfs]);

  console.log(smurfs);
  const handleChange = (e) => {
    e.preventDefault();
    const newSmurf = { ...smurf, [e.target.name]: e.target.value };
    setSmurf(newSmurf);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSmurf(smurf));
  };

  return (
    <div>
      <h1>Here are the Smurfs</h1>
      {smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
      <h1>Or, add a Smurf to the Smurf Village</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={smurf.name}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          id="height"
          name="height"
          placeholder="Height"
          value={smurf.height}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          id="age"
          name="age"
          placeholder="Age"
          value={smurf.age}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Smurfs;
