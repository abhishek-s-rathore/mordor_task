import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

export default function Select({ options, handleOnChange, checkedOption }) {
  return (
    <SelectContainer>
      <Options>
        {options.map(option => (
          <OptionBox key={option.toLowerCase()} className="flex align-center">
            <Checkbox
              id={option}
              isChecked={checkedOption.includes(option)}
              handleOnChange={handleOnChange}
            />
            <Title>{option.split(' ').map(elem=>elem.slice(0,1).toUpperCase() + elem.slice(1)).join(' ')}</Title>
          </OptionBox>
        ))}
      </Options>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  padding-top: 30px;
`;
const Options = styled.div``;

const OptionBox = styled.div`
  margin-bottom: 14px;
`;

const Title = styled.p`
  color: #6b727d;
  font-weight: 500;
`;
