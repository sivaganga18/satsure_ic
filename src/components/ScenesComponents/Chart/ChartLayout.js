import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import ChartTab from "./UI/ChartTab";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Custompadding, colors, typography } from "../../../styles/StyleSheet";

const screenWidth = Dimensions.get("window").width;

const data1 = {
  labels: ["Week1", "Week2", "Week3", "Week4"],
  datasets: [
    {
      data: [20, 45, 28, 80],
      color: (opacity = 1) => `rgba(250,17,79,1)`,
      strokeWidth: 2
    }
  ]
};
const data2 = {
  labels: ["Week1", "Week2", "Week3", "Week4"],
  datasets: [
    {
      data: [5, 15, 60, 75],
      color: (opacity = 1) => `rgba(250,17,79,1)`,
      strokeWidth: 2
    }
  ]
};
const data3 = {
  labels: ["Week1", "Week2", "Week3", "Week4"],
  datasets: [
    {
      data: [10, 30, 40, 70],
      color: (opacity = 1) => `rgba(250,17,79,1)`,
      strokeWidth: 2
    }
  ]
};

// create a component
export default class ChartLayout extends Component {
  render() {
    const { activeTab, callback, tabs } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingTop: 16 }}>
          <ChartTab
            tabs={tabs}
            callback={key => {
              callback(key);
            }}
            activeTab={activeTab}
          />
        </View>
        <View style={{ paddingTop: 16 }}>
          <View
            style={[
              Custompadding.paddingRegular,
              {
                backgroundColor: colors.white,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 4
              }
            ]}
          >
            <Text style={[typography.medium.regular]}>Monthly report</Text>

            <View
              style={{
                padding: 4,
                paddingLeft: 16,
                paddingRight: 16,
                borderWidth: 1,
                borderRadius: 4,
                borderColor: colors.blue
              }}
            >
              <Text style={[typography.medium.small, { color: colors.blue }]}>
                Export
              </Text>
            </View>
          </View>
          <LineChart
            data={activeTab == 0 ? data1 : activeTab == 1 ? data2 : data3}
            width={screenWidth}
            height={220}
            withInnerLines={false}
            withShadow={false}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              color: () => `rgba(155,155,155,1)`,
              style: {
                borderRadius: 16,
                backgroundColor: "rgba(155,155,155,1)"
              }
            }}
            bezier
          />
        </View>
      </View>
    );
  }
}
