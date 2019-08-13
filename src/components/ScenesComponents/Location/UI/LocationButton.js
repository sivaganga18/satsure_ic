import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../../../../styles/StyleSheet";
import RoundButton from "./RoundButton";

export default class LocationButton extends Component {
  render() {
    const {
      editCallback,
      deleteCallback,
      freezCallback,
      showDelete,
      showFreez,
      isFreez
    } = this.props;
    return (
      <View style={{ position: "absolute", right: 16, top: 80 }}>
        <RoundButton
          image={require("../../../../assets/images/edit.png")}
          callback={editCallback}
          backgroundColor={showDelete ? colors.orange : colors.white}
        />
        {showDelete ? (
          <View style={{ paddingTop: 16 }}>
            <RoundButton
              image={require("../../../../assets/images/delete_black.png")}
              callback={deleteCallback}
            />
          </View>
        ) : (
          <View />
        )}
        <View style={{ paddingTop: 16 }}>
          {showFreez ? (
            <RoundButton
              image={require("../../../../assets/images/stop.png")}
              callback={freezCallback}
              backgroundColor={isFreez ? colors.white : colors.orange}
            />
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
}
