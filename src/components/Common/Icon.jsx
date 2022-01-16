import React from "react";
import styled from "styled-components";

function Icon({ path, alt, handleClick = () => {} }) {
  return (
    <IconBox>
      <IconImg src={path} alt={alt} onClick={handleClick} />
    </IconBox>
  );
}

const IconBox = styled.div`
  width: fit-content;
`;

const IconImg = styled.img`
  cursor: pointer;
`;

export { Icon };
