import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

export default function CollapsibleFilter({ handleToggleFilter, title, count , isClosed}) {
  console.log(isClosed, 'deytvybuhij2deuiwvuw');
  return (
    <FilterBox className="flex justify-between">
      <FilterName isClosed={isClosed} onClick={handleToggleFilter}>{title}<span>{count}</span></FilterName>
      <Icon
        path="./assets/images/downarrow.png"
        alt="down arrow"
        handleClick={handleToggleFilter}
      />
    </FilterBox>
  );
}

const FilterBox = styled.div`
  padding: 20px 5px 0 5px;
  border-top: 1px solid #e3e4e8;
  margin-bottom: 1rem;
`;

const FilterName = styled.p`
  color: ${({isClosed})=>isClosed ?"#6b727d": "lightgray"} ;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  & > span{
    color: ${({isClosed})=>isClosed ?"rgb(20,113,165)": "lightgray"} ;
  }
`;
