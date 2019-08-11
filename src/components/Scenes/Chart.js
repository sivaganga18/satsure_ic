import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../Common/AppHeader";
import { Actions } from "react-native-router-flux";
import ChartLayout from "../ScenesComponents/Chart/ChartLayout";
import { colors } from "../../styles/StyleSheet";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  render() {
    const { activeTab } = this.state;
    const tabs = [
      {
        title: "523/634",
        subTitle: "Customers",
        backgroundColor: colors.pinkLight,
        image: require("../../assets/images/customer.png")
      },
      {
        title: "74%",
        subTitle: "Collection",
        backgroundColor: colors.blueMedium,
        image: require("../../assets/images/collection.png")
      },
      {
        title: "627",
        subTitle: "Trips made",
        backgroundColor: colors.blueLight,
        image: require("../../assets/images/trip.png")
      }
    ];
    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <AppHeader
          leftIcon={require("../../assets/images/hamburger.png")}
          leftIconCallback={() => {
            Actions.pop();
          }}
          title="Performance Report "
        />
        {/* Header */}

        {/* Layout */}
        <ChartLayout
          activeTab={activeTab}
          tabs={tabs}
          callback={key => {
            debugger;
            this.setState({ activeTab: key });
          }}
        />
        {/* Layout */}
      </View>
    );
  }
}
