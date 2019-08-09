import React, { Component } from "react";
import { View, Text } from "react-native";
import AppHeader from "../Common/AppHeader";
import PortfolioLayout from "../ScenesComponents/Portfolio/PortfolioLayout";
import Drawer from "react-native-drawer";
import { colors } from "../../styles/StyleSheet";
import SideMenuBar from "../Common/SideMenuBar";
import CustomStatusBar from "../Common/CustomStatusBar";
import { Actions } from "react-native-router-flux";
import HarvestLayout from "../ScenesComponents/Harvest/HarvestLayout";

export default class Harvest extends Component {
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
          leftIconCallback={() => {
            Actions.pop();
          }}
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
        <HarvestLayout harvestData={[{}, {}, {}, {}, {}]} callback={() => {}} />
        {/* Layout */}
      </View>
    );
  }
}
