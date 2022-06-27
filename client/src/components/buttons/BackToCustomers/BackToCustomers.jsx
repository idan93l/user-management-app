import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";

const StyledLink = styled(Link)`
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 20%;
  background: #f1c064;
  text-decoration: none;
  margin: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  transition: all 0.5s;
  &:hover {
    border-radius: 100%;
    cursor: pointer;
  }
`;

const BackToCustomers = () => {
  return (
    <StyledLink to={"/customers"}>
      <h1>
        <RiArrowGoBackLine />
      </h1>
    </StyledLink>
  );
};

export default BackToCustomers;
