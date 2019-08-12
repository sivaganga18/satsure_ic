import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../../../../styles/StyleSheet";

export default class RoundButton extends Component {
  render() {
    const { callback, image, backgroundColor } = this.props;
    return (
      <TouchableOpacity
        onPress={callback}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          backgroundColor: backgroundColor ? backgroundColor : colors.white,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image style={{ width: 16, height: 16 }} source={image} />
      </TouchableOpacity>
    );
  }
}
