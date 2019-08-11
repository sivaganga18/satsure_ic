import React, { Component } from "react";
import { View, Text } from "react-native";
import AppHeader from "../Common/AppHeader";
import PortfolioLayout from "../ScenesComponents/Portfolio/PortfolioLayout";
import Drawer from "react-native-drawer";
import { colors } from "../../styles/StyleSheet";
import SideMenuBar from "../Common/SideMenuBar";
import CustomStatusBar from "../Common/CustomStatusBar";
import { Actions } from "react-native-router-flux";

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
        }
      },
      {
        title: "Help"
      },
      {
        title: "Logout"
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
            leftIcon={require("../../assets/images/hamburger.png")}
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
          <PortfolioLayout
            portfolioData={[{}, {}, {}, {}, {}, {}, {}, {}]}
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
