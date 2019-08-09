import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { colors, typography } from "../../styles/StyleSheet";

export default class CustomTextField extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <View
        style={{
          height: 50,
          borderWidth: 1,
          marginTop: 26,
          backgroundColor: colors.textFieldBackground,
          borderColor: colors.textFieldBorder,
          paddingLeft: 16,
          paddingRight: 16
        }}
      >
        <TextInput
          style={[typography.regular.regular, { height: 50 }]}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}
