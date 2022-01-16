import React, { useState } from "react";
import CollapsibleFilter from "../Common/CollapsibleFilter";
import Select from "../Common/Select";

export default function CountryFilter({ filters, setFilters, handleChange, breakdownOptions, countriesData }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const countries = [];
  const { country: checkedOption } = filters;

  console.log(isFilterOpen, "isFilter");

  const handleOnChange = e => {
    const { id, checked } = e.target;

    const obj = {
      val: id,
      checked,
      key: "country",
    };

    handleChange(obj);
  };

  const handleToggleFilter = () => {

    if(breakdownOptions.includes('Country')){
        setIsFilterOpen(!isFilterOpen);
        }else{
          setIsFilterOpen(false);
        }
  };

  return (
    <div>
      <CollapsibleFilter handleToggleFilter={handleToggleFilter} title={`Country`} count={`(${filters.country.length}/${countriesData.length})`}  isClosed={breakdownOptions.includes('Country')}/>

      {isFilterOpen && (
        <Select
          options={countriesData}
          checkedOption={checkedOption}
          handleOnChange={handleOnChange}
        />
      )}
    </div>
  );
}
