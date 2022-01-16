import React, { useState } from "react";
import CollapsibleFilter from "../Common/CollapsibleFilter";
import Select from "../Common/Select";

export default function DateFilter({ filters, setFilters, handleChange,breakdownOptions }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dates = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
  const { date: checkedOption } = filters;

  console.log(isFilterOpen, "isFilter");

  const handleOnChange = e => {
    const { id, checked } = e.target;

    const obj = {
      val: id,
      checked,
      key: "date",
    };

    handleChange(obj);
  };

  const handleToggleFilter = () => {
  
    if(breakdownOptions.includes('Date')){
        setIsFilterOpen(!isFilterOpen);
        }else{
          setIsFilterOpen(false);
        }
  };

  return (
    <div>
      <CollapsibleFilter handleToggleFilter={handleToggleFilter} title={`Date`} count={`(${filters.date.length}/${dates.length})`} isClosed={true}/>

      {isFilterOpen && (
        <Select
          options={dates}
          checkedOption={checkedOption}
          handleOnChange={handleOnChange}
        />
      )}
    </div>
  );
}
