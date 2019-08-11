import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../../../../styles/StyleSheet";

export default class ZoomButton extends Component {
  render() {
    const { plusCallback, minusCallback, gpsCallback } = this.props;
    return (
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={gpsCallback}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            backgroundColor: colors.white,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../../../assets/images/gps.png")}
          />
        </TouchableOpacity>
        <View style={{ backgroundColor: colors.white, borderRadius: 2 }}>
          <TouchableOpacity
            onPress={minusCallback}
            style={{
              width: 25,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 0.5
            }}
          >
            <Image
              style={{ width: 10, height: 10 }}
              source={require("../../../../assets/images/plus.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={plusCallback}
            style={{
              width: 25,
              height: 30,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              style={{ width: 10, height: 10 }}
              source={require("../../../../assets/images/minus.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
