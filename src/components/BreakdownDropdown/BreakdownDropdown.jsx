import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../Common/Checkbox";
import { Icon } from "../Common/Icon";

export default function BreakdownDropdown({ setBreakdown, breakdownOptions }) {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOnChange = e => {
    const { id, checked } = e.target;

    setBreakdown(prev => {
      if (checked) {
        let arr = [...prev];
        arr.push(id);
        return arr;
      } else {
        let arr = prev.filter(val => val !== id);
        return arr;
      }
    });
  };

  const options = ["Browser", "Country"];

  return (
    <BreakdownWrapper isDropdownOpen={isDropdownOpen}>
      <div className="flex align-center justify-between">
        <FilteredTagsBox>
          Breakdown: <span>{breakdownOptions.join(", ")}</span>
        </FilteredTagsBox>

        <Icon
          path="./assets/images/downarrow.png"
          alt="down arrow"
          handleClick={handleClick}
        />
      </div>

      {isDropdownOpen && (
        <SelectBox isDropdownOpen={isDropdownOpen}>
          {options.map(option => (
            <FilterBox className="flex align-center" key={option}>
              <Checkbox
                type="checkbox"
                id={option}
                handleOnChange={handleOnChange}
                isChecked={breakdownOptions.includes(option)}
              />
              <p>{option}</p>
            </FilterBox>
          ))}
        </SelectBox>
      )}
    </BreakdownWrapper>
  );
}

const BreakdownWrapper = styled.div`
  border: 1px solid #e3e4e8;
  border-bottom: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "none" : "1px solid #e3e4e8"};
  border-radius: 10px;
  border-bottom-left-radius: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "0" : "10px"};
  border-bottom-right-radius: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "0" : "10px"};
  width: 635px;
  height: 60px;
  background-color: #fff;
  margin-bottom: 20px;
  position: relative;

  & > div {
    padding: 18px 25px 20px 20px;
    flex-basis: 1;
  }
`;

const FilterBox = styled.div`
  margin: 5px 0;

  & > input {
    margin-right: 11px;
    width: 18px;
    height: 18px;
    border: 1px solid #e3e4e8;
    border-radius: 3px;
  }
`;

const FilteredTagsBox = styled.div`
  font-size: 18px;
  color: #6b727d;
  font-weight: 500;

  & > span {
    font-size: 16px;
    font-weight: 400;
  }
`;

const SelectBox = styled.div`
  position: absolute;
  width: 100.25%;
  padding: 30px;
  z-index: 100;
  left: -1px;
  top: 55px;
  background-color: #fff;
  border: 1px solid #e3e4e8;
  border-radius: 10px;
  border-top-left-radius: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "0" : "10px"};
  border-top-right-radius: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "0" : "10px"};
  border-top: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "none" : "1px solid #e3e4e8"};
`;
