import React, { Component } from "react";
import { Platform, StatusBar, View } from "react-native";
import { colors } from "../../styles/StyleSheet";

class CustomStatusBar extends Component {
  static defaultProps = {
    lightFonts: false,
    backgroundColor: colors.white
  };
  render() {
    const { backgroundColor, lightFonts, noZIndex } = this.props;
    const statusBar = (
      <StatusBar barStyle={lightFonts ? "light-content" : "dark-content"} />
    );
    return Platform.OS === "ios" ? (
      <View
        style={{
          backgroundColor: backgroundColor,
          height: 24,
          zIndex: noZIndex ? 0 : 999999
        }}
      >
        <StatusBar barStyle={lightFonts ? "light-content" : "dark-content"} />
      </View>
    ) : (
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={lightFonts ? "light-content" : "dark-content"}
      />
    );
  }
}

export default CustomStatusBar;
