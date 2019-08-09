import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors, typography } from "../../styles/StyleSheet";

export default class Button extends Component {
  render() {
    const { buttonText, noMargin, callback } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={callback}
        style={{
          backgroundColor: colors.orange,
          height: 52,
          marginLeft: noMargin ? 0 : 16,
          marginRight: noMargin ? 0 : 16,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3
        }}
      >
        <Text style={[typography.bold.medium, { color: colors.white }]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
}
