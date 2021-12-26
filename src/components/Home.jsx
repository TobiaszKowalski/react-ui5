import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import {FlexBox, FlexBoxJustifyContent, FlexBoxWrap } from "@ui5/webcomponents-react"; // ui5 controls
import CustomChart from "./CustomChart"; // custom components
import CustomList from "./CustomList"; // custom components
import CustomAnalyticalTable from "./CustomAnalyticalTable"; // custom components

export const Home = (props) => {
  return (
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}
      style={spacing.sapUiContentPadding}
    >
      <CustomChart dataset={props.dataset} />
      <CustomList />
      <CustomAnalyticalTable />
    </FlexBox>
  );
};