import React from "react";
import './custompopup.styles.scss'
 
const CustomPopUp = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <b>{props.title}</b>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
 
export default CustomPopUp;