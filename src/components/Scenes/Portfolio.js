import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../Common/AppHeader";
import PortfolioLayout from "../ScenesComponents/Portfolio/PortfolioLayout";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTitle: "WhiteField"
    };
  }
  hideMenu = value => {
    this.setState({ menuTitle: value });
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  render() {
    const { menuTitle } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <AppHeader
          leftIcon={require("../../assets/images/hamburger.png")}
          leftIconCallback={() => {}}
          title="Priority Portfolio"
          menuCallback={() => {
            this.showMenu();
          }}
          menuListCallback={value => {
            this.hideMenu(value);
          }}
          menuTitle={menuTitle}
          menuRef={ref => {
            this._menu = ref;
          }}
          menuList={[
            { value: "Whitefield" },
            { value: "Kasthuri Nagar" },
            { value: "Hebbal" },
            { value: "Hosur" }
          ]}
          showMenu={true}
        />
        {/* Header */}

        {/* Layout */}
        <PortfolioLayout portfolioData={[{}, {}, {}, {}, {}, {}, {}, {}]} />
        {/* Layout */}
      </View>
    );
  }
}
