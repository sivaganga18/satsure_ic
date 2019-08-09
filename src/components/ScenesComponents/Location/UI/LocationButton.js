import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../../../../styles/StyleSheet";
import RoundButton from "./RoundButton";

export default class LocationButton extends Component {
  render() {
    const { editCallback, deleteCallback } = this.props;
    return (
      <View style={{ position: "absolute", right: 16, top: 80 }}>
        <RoundButton callback={editCallback} />
        <View style={{ paddingTop: 16 }}>
          <RoundButton callback={deleteCallback} />
        </View>
      </View>
    );
  }
}
