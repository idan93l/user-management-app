import React from "react";
import styled from "styled-components";

const getBackground = (activated) => {
  return activated ? "#c73533" : "#32b569"
};

const Style = {
  ToggleActivity: styled.button`
    height: 25px;
    width: 80px;
    outline: none;
    color: whitesmoke;
    background: ${props => getBackground(props.activity)};
    border: none;
    border-radius: 5px;
    transition: all 0.5s;
    &:hover {
      border-radius: 100px;
      cursor: pointer;
    }
  `,
};

const ToggleActivity = ({ activity, handleActivity }) => (
  <Style.ToggleActivity
    onClick={() => {
      handleActivity(!activity);
    }}
    activity={activity}
  >
    {activity ? "Deactivate" : "Activate"}
  </Style.ToggleActivity>
);

export default ToggleActivity;