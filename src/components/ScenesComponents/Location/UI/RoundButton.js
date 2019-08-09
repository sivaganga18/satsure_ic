import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../../../../styles/StyleSheet";

export default class RoundButton extends Component {
  render() {
    const { callback } = this.props;
    return (
      <TouchableOpacity
        onPress={callback}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          backgroundColor: colors.white,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../../assets/images/edit.png")}
        />
      </TouchableOpacity>
    );
  }
}
