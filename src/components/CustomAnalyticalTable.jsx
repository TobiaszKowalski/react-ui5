import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import {
  Card,
  CardHeader,
  AnalyticalTable,
  Icon
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/table-view.js";

const CustomAnalyticalTable = (props) => {

  const tableData = new Array(500).fill(null).map((_, index) => {
    return {
      name: `name${index}`,
      age: Math.floor(Math.random() * 100),
      friend: {
        name: `friend.Name${index}`,
        age: Math.floor(Math.random() * 100)
      }
    };
  });
  
  const tableColumns = [
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "Age",
      accessor: "age"
    },
    {
      Header: "Friend Name",
      accessor: "friend.name"
    },
    {
      Header: "Friend Age",
      accessor: "friend.age"
    }
  ];

  return (
    <Card
      header={
        <CardHeader
          titleText="AnalyticalTable"
          avatar={<Icon name="table-view" />}
        />
      }
      style={{ width: "900px", ...spacing.sapUiContentPadding }}
    >
      <AnalyticalTable
        data={tableData}
        columns={tableColumns}
        visibleRows={5} 
      />
    </Card>
  )
};

export default CustomAnalyticalTable;