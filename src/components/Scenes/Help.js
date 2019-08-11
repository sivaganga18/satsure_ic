import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../Common/AppHeader";
import { Actions } from "react-native-router-flux";
import HelpLayout from "../ScenesComponents/Help/HelpLayout";
import { colors } from "../../styles/StyleSheet";

export default class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: null
    };
  }
  render() {
    const { activeTab } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        {/* Header */}
        <AppHeader
          leftIcon={require("../../assets/images/back.png")}
          leftIconCallback={() => {
            Actions.pop();
          }}
          title="Help"
        />
        {/* Header */}
        <View>
          <HelpLayout
            activeTab={activeTab}
            callback={key => {
              this.setState({ activeTab: key });
            }}
          />
        </View>
      </View>
    );
  }
}
