import React from "react";
import styled from "styled-components";

export default function Checkbox({
  type = "checkbox",
  handleOnChange = () => {},
  id = "",
  isChecked = false,
}) {
  return (
    <Input type={type} onChange={handleOnChange} id={id} checked={isChecked} />
  );
}

const Input = styled.input`
  margin-right: 11px;
  width: 18px;
  height: 18px;
  border: 1px solid #e3e4e8;
  border-radius: 3px;
  cursor: pointer;
`;
