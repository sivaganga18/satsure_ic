import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { colors, typography } from "../../styles/StyleSheet";

export default class CustomTextField extends Component {
  render() {
    const { placeholder, title, showTouchField, callback, value } = this.props;
    return (
      <View>
        {title ? (
          <View style={{ paddingBottom: 8, marginTop: 26 }}>
            <Text style={[typography.medium.regular]}>{title}</Text>
          </View>
        ) : (
          <View />
        )}
        <TouchableOpacity
          style={{ height: 50, marginTop: title ? 0 : 26 }}
          // activeOpacity={1}
          onPress={showTouchField ? callback : null}
        >
          <View
            style={{
              height: 50,
              borderWidth: 1,

              backgroundColor: colors.textFieldBackground,
              borderColor: colors.textFieldBorder,
              paddingLeft: 16,
              paddingRight: 16
            }}
          >
            <TextInput
              style={[typography.regular.regular, { height: 50 }]}
              value={value}
              editable={showTouchField ? false : true}
              placeholder={placeholder}
              underlineColorAndroid="transparent"
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
