import React from "react";
import styled from "styled-components";

export default  function Footer(){
    return(
        <FooterBox className="container flex justify-center align-center">
           <LogoBox className="flex justify-center align-center">
        <Img src="./assets/images/logo.png" />
        <Title>
          <span>Unified</span> Analytics
        </Title>
        </LogoBox>
        </FooterBox>
    );
}

const FooterBox = styled.footer`
     display:block;
     padding:1.25rem;
     text-align:center;
`;


const LogoBox = styled.a`
`;

const Img = styled.img`
margin-right:1rem`;

const Title = styled.span`
  color: #46cdcf;
  font-size: 22px;
  & > span {
    font-weight: bold;
  }
`;