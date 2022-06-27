import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  height: 5rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 30px;
  background: #F1F368;
  text-decoration: none;
  margin: 1rem;
  transition: all 0.2s;
  &:hover {
    border-radius: 100px;
    cursor: pointer;
  }
`;

const ToTable = () => {
  return (
    <StyledLink to={"/customers"}>
      <h1>
        Show Users
      </h1>
    </StyledLink>
  );
};

export default ToTable;
