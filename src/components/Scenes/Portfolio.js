import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../Common/AppHeader";
import PortfolioLayout from "../ScenesComponents/Portfolio/PortfolioLayout";

export default class Portfolio extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <AppHeader
          leftIcon={require("../../assets/images/hamburger.png")}
          leftIconCallback={() => {}}
          title="Priority Portfolio"
        />
        {/* Header */}

        {/* Layout */}
        <PortfolioLayout portfolioData={[{}, {}, {}, {}, {}, {}, {}, {}]} />
        {/* Layout */}
      </View>
    );
  }
}
