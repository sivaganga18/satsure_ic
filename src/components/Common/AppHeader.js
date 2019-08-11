import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { colors, typography } from "../../styles/StyleSheet";
import CustomStatusBar from "./CustomStatusBar";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { map } from "lodash";

export default class AppHeader extends Component {
  render() {
    const {
      leftIcon,
      leftIconCallback,
      title,
      menuCallback,
      menuListCallback,
      menuTitle,
      menuRef,
      menuList,
      rightIcon,
      showMenu
    } = this.props;
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
            justifyContent: "space-between",
            height: 60,
            backgroundColor: colors.drakGreen
          }}
        >
          <View
            style={{ flex: 0.6, flexDirection: "row", alignItems: "center" }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={leftIconCallback}
              style={{ padding: 16, alignItems: "center" }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 15, height: 15 }}
                source={leftIcon}
              />
            </TouchableOpacity>
            <View>
              <Text style={[typography.medium.large, { color: colors.white }]}>
                {title}
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.4, alignItems: "flex-end" }}>
            {showMenu ? (
              <Menu
                ref={menuRef ? menuRef : "ref"}
                button={
                  <View
                    style={{
                      paddingRight: 16,
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={[
                        typography.medium.medium,
                        { color: colors.white }
                      ]}
                      onPress={menuCallback}
                    >
                      {menuTitle}
                    </Text>
                    <View style={{ paddingLeft: 4 }}>
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../../assets/images/down.png")}
                      />
                    </View>
                  </View>
                }
              >
                {map(menuList, (menu, key) => {
                  return (
                    <MenuItem
                      onPress={() => {
                        menuListCallback(menu.value);
                      }}
                    >
                      {menu.value}
                    </MenuItem>
                  );
                })}
              </Menu>
            ) : rightIcon ? (
              <View />
            ) : (
              <View />
            )}
          </View>
        </View>
      </View>
    );
  }
}
