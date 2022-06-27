import React from "react";
import "./PhoneRotate.css";
import { FiRotateCw } from "react-icons/fi";

const PhoneRotate = () => {
  return (
    <div className="overlay">
      <div className="iconContainer">
        <div className="phone">
          <p>
            <FiRotateCw />
          </p>
        </div>
      </div>
    </div>
  );
};


export default PhoneRotate;