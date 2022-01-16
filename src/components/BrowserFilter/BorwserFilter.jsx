import React, { useState } from "react";
import CollapsibleFilter from "../Common/CollapsibleFilter";
import Select from "../Common/Select";


export default function BrowserFilter({ filters, setFilters, handleChange, breakdownOptions ,browserWiseData}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const browsers = [];
  for(let key in browserWiseData){
     browsers.push(key);
  }


  const { browsers: checkedOption } = filters;

  console.log(isFilterOpen, "isFilter");

  const handleOnChange = e => {
    const { id, checked } = e.target;

    const obj = {
      val: id,
      checked,
      key: "browsers",
    };

    handleChange(obj);
  };

  const handleToggleFilter = () => {
    if(breakdownOptions.includes('Browser')){
    setIsFilterOpen(!isFilterOpen);
    }else{
      setIsFilterOpen(false);
    }
  };
  console.log(browsers, 'browsers');

  return (
    <div>
      <CollapsibleFilter handleToggleFilter={handleToggleFilter} title={`Browser`} count={`(${filters.browsers.length}/${browsers.length})`} isClosed={breakdownOptions.includes('Browser')} />

      {isFilterOpen && (
        <Select
          options={browsers}
          checkedOption={checkedOption}
          handleOnChange={handleOnChange}
        />
      )}
    </div>
  );
}
