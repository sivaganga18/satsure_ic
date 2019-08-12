import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { colors, typography } from "../../styles/StyleSheet";

export default class CustomTextField extends Component {
  render() {
    const {
      placeholder,
      title,
      showTouchField,
      callback,
      value,
      icon,
      secureTextEntry
    } = this.props;
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
              secureTextEntry={secureTextEntry}
            />
            {icon ? (
              <View
                style={{
                  position: "absolute",
                  right: 8,
                  height: 50,

                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent"
                  }}
                  source={icon}
                />
              </View>
            ) : (
              <View />
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
