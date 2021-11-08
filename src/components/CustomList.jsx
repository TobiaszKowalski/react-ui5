import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import "@ui5/webcomponents-icons/dist/list.js";
import {
  Card,
  CardHeader,
  List,
  StandardListItem,
  ValueState,
  ProgressIndicator,
  Title,
  TitleLevel,
  FlexBox,
  FlexBoxDirection,
  Icon
} from "@ui5/webcomponents-react";

const CustomList = (props) => {

  return (
    <div>
      <Card
        header={
          <CardHeader
            titleText="Progress"
            subtitleText="List"
            avatar={<Icon name="list" />}
          />
        }
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
      >
        <List>
          <StandardListItem additionalText="finished" additionalTextState={ValueState.Success}>
            Activity 1
          </StandardListItem>
          <StandardListItem additionalText="failed" additionalTextState={ValueState.Error}>
            Activity 2
          </StandardListItem>
          <StandardListItem additionalText="in progress" additionalTextState={ValueState.Warning} style={{height: "80px"}}>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Activity 3</Title>
              <ProgressIndicator value={89} valueState={ValueState.Success} />
            </FlexBox>
          </StandardListItem>
          <StandardListItem additionalText="in progress" additionalTextState={ValueState.Warning} style={{height: "80px"}}>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Activity 4</Title>
              <ProgressIndicator value={5} valueState={ValueState.Error} />
            </FlexBox>
          </StandardListItem>
        </List>
      </Card>
    </div>
  )
};

export default CustomList;