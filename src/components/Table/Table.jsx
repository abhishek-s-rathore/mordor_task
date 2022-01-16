import styled from "styled-components";

import TableRow from "../TableRow";

export default function Table(props) {
   console.log(props.filters, 'In table')

  return (
    <table className={!props.isCollapsed ? "flex-95" : "flex-80"}>
      <thead>
        <HeadRow>
          {props.cols.sort().map(col => (
            <Th key={col.toLowerCase()} bool={col === "Date"}>
              {col}
            </Th>
          ))}
        </HeadRow>
      </thead>
      <tbody>
        <TableRow
          filters={props.filters}
          cols={props.cols}
          browserWiseData={props.browserWiseData}
          browserUsers={props.browserUsers}
          browserCountryUsers={props.browserCountryUsers}
        />
      </tbody>
    </table>
  );
}

const HeadRow = styled.tr``;

const Th = styled.th`
  color: ${({ bool }) => (bool ? "white" : "auto")};
  border-right: "none";
`;
