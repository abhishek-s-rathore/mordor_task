import React, { useState} from "react";
import styled from "styled-components";

import HeadBar from "../HeadBar";
import Table from "../Table";
import Filters from "../Filters";
import BreakdownDropdown from "../BreakdownDropdown";


export default function Main({ browserWiseData , countriesData, browserUsers, browserCountryUsers}) {
  const [breakdown, setBreakdown] = useState(["Date"]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [filters, setFilters] = useState({
    browsers: [],
    country: [],
    date: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
  });

  console.log(browserUsers,browserCountryUsers, 'users');

  return (
    
    <>
      <MainBox className="container">
        <Heading>Leads unique by Email Address</Heading>

        <BreakdownDropdown
          setBreakdown={setBreakdown}
          breakdownOptions={breakdown}
        />

        <DataDisplay>
          <HeadBar />
          <div className="flex justify-between align-start">
            <Filters
            countriesData={countriesData}
            browserWiseData={browserWiseData}
              breakdownOptions={breakdown}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              filters={filters}
              setFilters={setFilters}
            />
            <Table
            browserUsers={browserUsers}
            browserCountryUsers={browserCountryUsers}
              isCollapsed={isCollapsed}
              cols={breakdown}
              filters={filters}
              setFilters={setFilters}
              browserWiseData={browserWiseData}
            />
          </div>
        </DataDisplay>
      </MainBox>
    </>
  );
}

const MainBox = styled.main`
  padding: 2.5rem 3.5rem;
  background-color: rgb(248, 249, 250);
  border: 2px solid rgb(50, 50, 50);
  border-radius: 1rem;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: rgb(56, 67, 84);
  padding: 1rem 0;
`;

const DataDisplay = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid #e3e4e8;
  box-shadow: 0px 3px 3px rgba(177, 177, 177, 0.25);
  border-radius: 0.5rem;
`;
