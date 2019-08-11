import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  typography,
  Custompadding,
  colors
} from "../../../../styles/StyleSheet";

export default class ListCard extends Component {
  render() {
    const { title, body, isOpen, callback } = this.props;
    return (
      <View
        style={[
          Custompadding.paddingRegular,
          { borderBottomWidth: 1, borderBottomColor: colors.borderColorGray }
        ]}
      >
        <TouchableOpacity
          onPress={callback}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={[typography.medium.regular, { color: "#000000" }]}>
            {title}
          </Text>
          <Image
            style={{ width: 8, height: 8 }}
            source={require("../../../../assets/images/right.png")}
          />
        </TouchableOpacity>
        {isOpen ? (
          <View style={{ paddingTop: 8 }}>
            <Text
              style={[
                typography.regular.small,
                { color: colors.textSecondaryLight }
              ]}
            >
              {body}
            </Text>
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  }
}
