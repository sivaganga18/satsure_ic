import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CustomStatusBar from "./CustomStatusBar";
import { typography, Custompadding, colors } from "../../styles/StyleSheet";
import { map } from "lodash";

export default class SideMenuBar extends Component {
  render() {
    const { title, menuList } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar />
        <View
          style={[
            Custompadding.paddingRegular,
            {
              borderBottomWidth: 0.5,
              borderBottomColor: colors.borderColorGray,
              paddingBottom: 26
            }
          ]}
        >
          <Text style={[typography.medium.large]}>{title}</Text>
        </View>
        <View>
          {map(menuList, (menu, key) => {
            return (
              <TouchableOpacity
                onPress={menu.callback}
                style={[
                  Custompadding.paddingRegular,
                  { flexDirection: "row", alignItems: "center" }
                ]}
              >
                <View style={{ paddingRight: 16 }}>
                  <Image
                    resizeMode="contain"
                    style={{ width: 18, height: 18 }}
                    source={menu.image}
                  />
                </View>
                <Text style={[typography.regular.regular]}>{menu.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}
