import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteSmurf } from "../actions";

const Smurf = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deleteSmurf(props.smurf.id));
  };

  return (
    <div>
      <h1>{props.smurf.name}</h1>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <i className="fas fa-trash"></i>
      <FontAwesomeIcon icon={faTrash} onClick={handleClick} />
    </div>
  );
};

export default Smurf;
