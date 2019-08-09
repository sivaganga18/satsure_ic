import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Scene, Router } from "react-native-router-flux";
import Login from "./src/components/Scenes/Login";
import Portfolio from "./src/components/Scenes/Portfolio";
import Harvest from "./src/components/Scenes/Harvest";

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            hideNavBar={true}
            component={Login}
            title="Login"
            panHandlers={null}
          />
          <Scene
            key="portfolio"
            hideNavBar={true}
            component={Portfolio}
            title="Portfolio"
            panHandlers={null}
          />
          <Scene
            key="harvest"
            hideNavBar={true}
            component={Harvest}
            title="Harvest"
            panHandlers={null}
          />
        </Scene>
      </Router>
    );
  }
}
