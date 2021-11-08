import React, { useState } from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import '@ui5/webcomponents-icons/dist/line-chart.js';
import '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';
import { Card, CardHeader, Text, Icon } from "@ui5/webcomponents-react";

const CustomChart = (props) => {

  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);

  const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'Bar Chart';
  const switchToChart = toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';

  const handleHeaderClick = () => {
    if (toggleCharts === "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("barChart");
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("lineChart");
      }, 2000);
    }
};

  return (
    <div>
      <Card
        header={
          <CardHeader
            avatar={
              <Icon name={toggleCharts === "lineChart" ? "line-chart" : "horizontal-bar-chart"} />
            }
            titleText="Card Header Text"
            subtitleText={`Click here to switch to ${switchToChart}`}
            interactive
            onClick={handleHeaderClick}
          />
        }
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
      >
        <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
        {
          toggleCharts === "lineChart" ?
            <LineChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dataset={props.dataset}
              loading={loading}
            /> :
            <BarChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dataset={props.dataset}
              loading={loading}
            />
        }
      </Card>
    </div>
  )
};

export default CustomChart;