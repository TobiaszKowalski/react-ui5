import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import "@ui5/webcomponents-icons/dist/add.js";
import { Avatar, ShellBar, ShellBarItem, FlexBox, FlexBoxJustifyContent, FlexBoxWrap } from "@ui5/webcomponents-react";
import CustomChart from "./CustomChart";
import CustomList from "./CustomList";
import CustomAnalyticalTable from "./CustomAnalyticalTable";

const Component = (props) => {

  return (
    <div>
      <ShellBar 
        logo={<img src="reactLogo.png" alt="" />}
        profile={<Avatar><img src="profilePictureExample.png" alt="" /></Avatar>}
        primaryTitle="Analytics App"
      >
        <ShellBarItem icon="add" text="Add" />
      </ShellBar>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <CustomChart dataset={props.dataset} />
        <CustomList />
        <CustomAnalyticalTable />
      </FlexBox>
    </div>
  )
};

export default Component;