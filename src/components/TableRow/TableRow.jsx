import React from "react";
import styled from "styled-components";

export default function TableRow({ filters, cols, browserWiseData, browserUsers, browserCountryUsers }) {
  const { browsers, country } = filters
 console.log(browsers, country, 'filters')

  let rows = []
  
  for(let key in browserWiseData){
    console.log( browserWiseData[key])
    for(let elem of browserWiseData[key]){
         rows.push({browser:key, country: elem})
    }
  }

console.log(rows, 'rows')

let filteredRows = []

if(!browsers.length && !country.length){

  filteredRows = [...rows];

}else if(!country.length){

      for(let elem of rows){
          if( browsers.includes(elem.browser)){
              filteredRows.push(elem);
          }
      }

}else if(!browsers.length){

  for(let elem of rows){
    if( country.includes(elem.country)){
        filteredRows.push(elem);
    }

}
}else if(browsers.length && country.length){

  for(let elem of rows){
    if( country.includes(elem.country) && browsers.includes(elem.browser)){
        filteredRows.push(elem);
    }
  }
}


console.log(browserCountryUsers, 'ewfrgthtrr3g');

  return (
    <>
      {filteredRows.map(row => {

        return (
          <tr>
               {cols.includes('Browser') ? (<td>
                    <Para>
                 <Img src={`./assets/images/${row.browser}.png`}/>
               {row.browser.slice(0,1).toUpperCase() + row.browser.slice(1)}
               <span style={{color:"rgb(20,113,165)"}}>({browserUsers[row.browser]})</span>
               </Para>
          </td> ) : <></>
               
               }
          
          {cols.includes('Country') ? (<td>
               {row.country.split(' ').map(elem=>elem.slice(0,1).toUpperCase() + elem.slice(1)).join(' ')}
               <span style={{color:"rgb(20,113,165)"}}>({browserCountryUsers[row.country][row.browser]})</span>
          </td> ) : <></>
               }

            <td className="last-elem">
              <div className="flex justify-between align-start flex-direction-column">
                <div className="flex justify-start align-center bottom-gap">
                  <span style={{ color: "#6B727D" }}>01/01</span>
                  <Graph src="./assets/images/Group 94.png" />
                </div>

                <div className="flex justify-start align-center bottom-gap">
                  <span style={{ color: "#6B727D" }}>02/01</span>
                  <Graph src="./assets/images/Group 95.png" />
                </div>

                <div className="flex justify-start align-center bottom-gap">
                  <span style={{ color: "#6B727D" }}>03/01</span>
                  <Graph src="./assets/images/Group 96.png" />
                </div>
                <div className="flex justify-start align-center bottom-gap">
                  <span style={{ color: "#6B727D" }}>04/01</span>
                  <Graph src="./assets/images/Group 97.png" />
                </div>
                <div className="flex justify-start align-center bottom-gap">
                  <span style={{ color: "#6B727D" }}>05/01</span>
                  <Graph src="./assets/images/Group 98.png" />
                </div>

                <div className="flex justify-start align-center bottom-gap">
                  <span style={{ color: "#6B727D" }}>06/01</span>
                  <Graph src="./assets/images/Group 99.png" />
                </div>

                <div className="flex justify-start align-center bottom-gap">
                  <span style={{ color: "#6B727D" }}>07/01</span>
                  <Graph src="./assets/images/Group 100.png" />
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  )
}

const Img = styled.img`
  margin-right: 0.75rem;
  height: 1.2rem;
`;

const Graph = styled(Img)`
  height: 2rem;
  margin-left: 0.5rem;
`;

const Para = styled.p`
  background-color: #ffffff;
  color: rgb(75, 80, 85);
  font-weight: 400;
  font-size: 1.1rem;
  display: inline-block;
  vertical-align: text-top;
  & span {
    color: rgb(44, 142, 191);
  }`;