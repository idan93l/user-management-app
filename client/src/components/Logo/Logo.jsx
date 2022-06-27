import React from "react";
import styled from "styled-components";
import img from "../../assets/images/Logo.png"

const Style = {
  Logo: styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
  `,
};

const Logo = () => {
    <Style.Logo/>
};

export default Logo;