import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { typography, colors } from "../../styles/StyleSheet";

export default class ToastMessage extends Component {
  render() {
    const { message } = this.props;
    return (
      <View
        style={{
          position: "absolute",
          bottom: 26,
          left: 0,
          right: 0,
          alignItems: "center"
        }}
      >
        <View
          style={{
            padding: 16,
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: "rgba(0,10,0,0.8)",
            borderRadius: 20
          }}
        >
          <Text style={[typography.medium.small, { color: colors.white }]}>
            {message}
          </Text>
        </View>
      </View>
    );
  }
}
