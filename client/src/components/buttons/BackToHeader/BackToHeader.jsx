import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";

const StyledLink = styled(Link)`
  height: 2rem;
  width: 2rem;
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

const BackToHeader = () => {
  return (
    <StyledLink to={"/"}>
      <h2>
        <RiArrowGoBackLine />
      </h2>
    </StyledLink>
  );
};

export default BackToHeader;
