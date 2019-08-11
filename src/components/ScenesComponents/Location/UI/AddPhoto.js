import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { typography, colors } from "../../../../styles/StyleSheet";
import { map } from "lodash";

// create a component
export default class AddPhoto extends Component {
  render() {
    const { photosArray, callback } = this.props;
    return (
      <View>
        <View style={{ paddingBottom: 8, marginTop: 26 }}>
          <Text style={[typography.medium.regular]}>Image*</Text>
        </View>
        <TouchableOpacity
          onPress={callback}
          style={{
            borderWidth: 1,
            borderRadius: 4,
            borderColor: colors.textFieldBorder,
            alignItems: "center",
            justifyContent: "center",
            height: 50
          }}
        >
          <Text style={[typography.regular.small]}>Add Image</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {map(photosArray, (photos, key) => {
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 3,
                  backgroundColor: "red",
                  marginRight: 8,
                  marginTop: 16
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
