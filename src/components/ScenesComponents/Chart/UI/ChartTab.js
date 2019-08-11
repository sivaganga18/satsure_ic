import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  colors,
  Custompadding,
  typography
} from "../../../../styles/StyleSheet";
import { map } from "lodash";

export default class ChartTab extends Component {
  render() {
    const { tabs, activeTab, callback } = this.props;
    return (
      <View style={{ backgroundColor: colors.white, flexDirection: "row" }}>
        {map(tabs, (tab, key) => {
          return (
            <TouchableOpacity
              onPress={() => {
                callback(key);
              }}
              style={[
                Custompadding.paddingRegular,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 0.33,
                  borderBottomWidth: 2,
                  borderBottomColor:
                    activeTab == key ? colors.drakGreen : "transparent"
                }
              ]}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: tab.backgroundColor,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 15, height: 15 }}
                  source={tab.image}
                />
              </View>
              <Text style={[typography.medium.medium, { paddingTop: 4 }]}>
                {tab.title}
              </Text>
              <Text
                style={[
                  typography.regular.small,
                  { color: colors.textSecondaryLight, paddingTop: 2 }
                ]}
              >
                {tab.subTitle}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
