import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { colors, typography } from "../../styles/StyleSheet";
import CustomStatusBar from "./CustomStatusBar";

export default class AppHeader extends Component {
  render() {
    const { leftIcon, leftIconCallback, title } = this.props;
    return (
      <View>
        <CustomStatusBar
          backgroundColor={colors.statusGreen}
          lightFonts={true}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 60,
            backgroundColor: colors.drakGreen
          }}
        >
          <View
            style={{ flex: 0.5, flexDirection: "row", alignItems: "center" }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={leftIconCallback}
              style={{ padding: 16, alignItems: "center" }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
                source={leftIcon}
              />
            </TouchableOpacity>
            <View>
              <Text style={[typography.medium.large, { color: colors.white }]}>
                {title}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
