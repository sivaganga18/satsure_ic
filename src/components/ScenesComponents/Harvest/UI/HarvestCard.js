import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  Custompadding,
  colors,
  typography,
  fontSizes
} from "../../../../styles/StyleSheet";
import { map } from "lodash";

export default class HarvestCard extends Component {
  render() {
    const { callback, code, crops, area, date } = this.props;
    return (
      <View
        style={[
          {
            backgroundColor: colors.white,
            marginTop: 12
          }
        ]}
      >
        <View
          style={[
            Custompadding.paddingRegular,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 0.5,
              borderBottomColor: colors.borderColorGray
            }
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 45 / 2,
                backgroundColor: colors.yellow,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={[
                  typography.medium.medium,
                  { ...fontSizes.xlarge, color: colors.white }
                ]}
              >
                S
              </Text>
            </View>
            <View style={{ paddingLeft: 8 }}>
              <Text style={[typography.medium.large]}>{code}</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {map(crops, (c, key) => {
                  return (
                    <Text
                      style={[
                        typography.regular.small,
                        { color: colors.textSecondaryLight, paddingTop: 4 }
                      ]}
                    >
                      {c + ", "}
                    </Text>
                  );
                })}
              </View>

              <Text
                style={[
                  typography.regular.xSmall,
                  { color: colors.red, paddingTop: 4 }
                ]}
              >
                6 days for harvest
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={callback}
              style={{
                width: 108,
                alignItems: "center",
                justifyContent: "center",
                height: 27,
                borderWidth: 1,
                borderRadius: 4,
                borderColor: colors.blue
              }}
            >
              <Text style={[typography.medium.regular, { color: colors.blue }]}>
                VALIDATE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[
              Custompadding.paddingRegular,
              {
                flex: 0.5,
                borderRightWidth: 0.5,
                flexDirection: "row",
                borderRightColor: colors.borderColorGray,
                alignItems: "center",
                justifyContent: "center"
              }
            ]}
          >
            <View style={{ paddingRight: 8 }}>
              <Image
                resizeMode="contain"
                style={{ width: 18, height: 18 }}
                source={require("../../../../assets/images/calender.png")}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={[typography.medium.small, { color: colors.drakGreen }]}
              >
                Harvest Date
              </Text>
              <Text
                style={[
                  typography.regular.small,
                  { color: colors.textSecondaryLight, paddingTop: 4 }
                ]}
              >
                {date}
              </Text>
            </View>
          </View>
          <View
            style={[
              Custompadding.paddingRegular,
              {
                flex: 0.5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }
            ]}
          >
            <View style={{ paddingRight: 8 }}>
              <Image
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
                source={require("../../../../assets/images/mount.png")}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={[typography.medium.small, { color: colors.drakGreen }]}
              >
                Harvest Area
              </Text>
              <Text
                style={[
                  typography.regular.small,
                  { color: colors.textSecondaryLight, paddingTop: 4 }
                ]}
              >
                {area + " Ha"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
