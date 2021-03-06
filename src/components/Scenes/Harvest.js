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

const data = [
  {
    assetCode: "ICICI0113297",
    crops: ["Paddy", "Maize"],
    areaFinanced: 1432553,
    harvestWindow: "21-12-2019",
    subPotential: "medium",
    validationDone: false,
    latitude: 20.59532258852144,
    longitude: 78.9627884969202,
    polygon: [
      {
        id: 0,
        holes: [],
        coordinates: [
          {
            latitude: 20.59532258852144,
            longitude: 78.9627884969202
          },
          {
            latitude: 20.595148626962683,
            longitude: 78.96365687065672
          },
          {
            latitude: 20.59617974166713,
            longitude: 78.96384946716638
          },
          {
            latitude: 20.596271466257093,
            longitude: 78.9630655655832
          }
        ]
      }
    ]
  },
  {
    assetCode: "ICICI013472982",
    crops: ["Paddy", "Green Gram"],
    areaFinanced: 1432553,
    harvestWindow: "21-12-2019",
    subPotential: "High",
    validationDone: true
  },
  {
    assetCode: "ICICI0113297",
    crops: ["Black Gram"],
    areaFinanced: 1432553,
    harvestWindow: "21-12-2019",
    subPotential: "Low",
    validationDone: false
  }
];

const dropDownList = [
  {
    name: "Akola",
    id: 1
  },
  {
    name: "Thane",
    id: 2
  },
  {
    name: "whitefield",
    id: 3
  }
];

export default class Harvest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTitle: dropDownList[0].name
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
          leftIcon={require("../../assets/images/back.png")}
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
          menuList={dropDownList}
          showMenu={true}
        />
        {/* Header */}

        {/* Layout */}
        <HarvestLayout
          harvestData={data}
          callback={data => {
            Actions.location({ mapData: data });
          }}
        />
        {/* Layout */}
      </View>
    );
  }
}
