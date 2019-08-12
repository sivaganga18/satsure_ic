import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { typography, colors } from "../../../../styles/StyleSheet";
import { map } from "lodash";

export default class ValidationButton extends Component {
  render() {
    const { callback, list, activeTab } = this.props;
    return (
      <View style={{ paddingTop: 16 }}>
        <Text style={[typography.medium.regular]}>Validation</Text>
        <View style={{ flexDirection: "row", paddingTop: 8 }}>
          {map(list, (data, key) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  callback(key);
                }}
              >
                <View
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 3,
                    borderWidth: 1,
                    borderColor: activeTab == key ? "#000" : "transparent",
                    marginRight: 8,
                    backgroundColor: data.background,
                    opacity: 0.5
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}
