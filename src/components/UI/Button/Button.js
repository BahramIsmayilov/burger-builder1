import React from "react";
import classes from "./Button.module.css";
import PropTypes from "prop-types";

const button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

button.propTypes = {
  children: PropTypes.string.isRequired,
};
export default button;
