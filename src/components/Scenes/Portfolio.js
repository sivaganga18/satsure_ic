import React, { Component } from "react";
import { View, Text } from "react-native";
import AppHeader from "../Common/AppHeader";
import PortfolioLayout from "../ScenesComponents/Portfolio/PortfolioLayout";
import Drawer from "react-native-drawer";
import { colors } from "../../styles/StyleSheet";
import SideMenuBar from "../Common/SideMenuBar";
import CustomStatusBar from "../Common/CustomStatusBar";
import { Actions } from "react-native-router-flux";

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

const data = [
  {
    name: "Low Potential",
    id: 1,
    elb: 134729,
    lan: 14,
    amount: 109384
  },
  {
    name: "Avg Potential",
    id: 2,
    elb: 16435,
    lan: 12,
    amount: 3689257
  },
  {
    name: "High Potential",
    id: 3,
    elb: 39587,
    lan: 24,
    amount: 197446
  },
  {
    name: "Total",
    id: -1,
    elb: 190751,
    lan: 50,
    amount: 3996087
  }
];

export default class Portfolio extends Component {
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

  closeDrawer = () => {
    this._drawer.close();
  };
  openDrawer = () => {
    this._drawer.open();
  };
  render() {
    const { menuTitle } = this.state;
    const menuList = [
      {
        title: "Performance Report",
        callback: () => {
          this._drawer.close(() => {
            Actions.chart();
          });
        },
        image: require("../../assets/images/chart.png")
      },
      {
        title: "Help",
        image: require("../../assets/images/help.png"),
        callback: () => {
          this._drawer.close(() => {
            Actions.help();
          });
        }
      },
      {
        title: "Logout",
        image: require("../../assets/images/logout.png"),
        callback: () => {
          Actions.popTo("login");
        }
      }
    ];
    return (
      <View style={{ flex: 1 }}>
        <Drawer
          tapToClose={true}
          openDrawerOffset={0.4}
          panCloseMask={0.2}
          styles={{
            drawer: {
              backgroundColor: colors.white
            },
            mainOverlay: {
              backgroundColor: "black",
              opacity: 0
            }
          }}
          tweenHandler={ratio => ({
            mainOverlay: {
              opacity: ratio / 2
            }
          })}
          content={<SideMenuBar title="Siva" menuList={menuList} />}
          ref={ref => (this._drawer = ref)}
          type="overlay"
        >
          {/* Header */}
          <AppHeader
            leftIcon={require("../../assets/images/menu.png")}
            leftIconCallback={() => {
              this.openDrawer();
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
          <PortfolioLayout
            portfolioData={data}
            callback={() => {
              Actions.harvest();
            }}
          />
          {/* Layout */}
        </Drawer>
      </View>
    );
  }
}
