import React, { useState } from "react";
import styled from "styled-components";
import BrowserFilter from "../BrowserFilter/BorwserFilter";
import CountryFilter from "../CountryFilter";
import DateFilter from "../DateFilter";

export default function Filters({ isCollapsed, setIsCollapsed, filters, setFilters, breakdownOptions, countriesData , browserWiseData}) {
 

  const handleChange = obj => {
    console.log(obj);
    if (obj.checked) {
      let newArr = [...filters[obj.key]];
      newArr.push(obj.val);

      setFilters({ ...filters, [obj.key]: newArr });
    } else {
      let newArr = filters[obj.key].filter(v => obj.val !== v);
      setFilters({ ...filters, [obj.key]: newArr });
    }
  };

  return (
    <>
      {isCollapsed ? (<>
        <FilterContainer className="flex-20 filters">
          <Box className="flex justify-start align-center">
            <i class="fas fa-search"></i>
            <span>Search...</span>
          </Box>
          <BrowserFilter
          browserWiseData={browserWiseData}
           breakdownOptions={breakdownOptions}
            filters={filters}
            setFilters={setFilters}
            handleChange={handleChange}
          />
          <CountryFilter
          countriesData={countriesData}
          breakdownOptions={breakdownOptions}
            filters={filters}
            setFilters={setFilters}
            handleChange={handleChange}
          />
          <DateFilter
          breakdownOptions={breakdownOptions}
            filters={filters}
            setFilters={setFilters}
            handleChange={handleChange}
          />

<div className="collapse-filter" onClick={() => setIsCollapsed(false)}>
        <Collapse src="./assets/images/collapseicon.png"/>
    </div>
        </FilterContainer>
        
    </>
      ) : (<>
        <FilterContainer className="flex-10 flex justify-center align-start">
          <div className="filters" onClick={() => setIsCollapsed(true)}>
            
            <Img src="./assets/images/Filter.png" />
            <p
              style={{
                textAlign: "center",
                color: "#2C8EBF",
                padding: ".5rem 1rem",
              }}
            >
              Filter
            </p>
          </div>
        </FilterContainer>
        </>
      )}
    </>
  );
}

const FilterContainer = styled.div`
`;

const Box = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid #e3e4e8;
  border-radius: 5px;
  height: 45px;
  padding: 0 1rem;
  color: rgb(125, 125, 125);
  margin-bottom: 20px;

  & span {
    display: inline-block;
    margin-left: 0.5rem;
  }
`;

const Img = styled.img`
  width: 2rem;
  display: inline-block;
  margin-left: 1.2rem;
  margin-top: 0.75rem;
`;

const Collapse = styled(Img)`
 width:.55rem;
 margin-left: .4rem;
`;

