import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { colors, typography, Custompadding } from "../../../styles/StyleSheet";
import CustomStatusBar from "../../Common/CustomStatusBar";
import CustomTextField from "../../Common/CustomTextField";
import Button from "../../Common/Button";

export default class LoginLayout extends Component {
  render() {
    const { callback } = this.props;
    return (
      <View
        style={[
          Custompadding.paddingRegular,
          {
            flex: 1,
            backgroundColor: colors.white,
            paddingLeft: 26,
            paddingRight: 26
          }
        ]}
      >
        {/* StatusBar */}
        <CustomStatusBar />
        {/* StatusBar */}

        {/* TopLogo */}
        <View style={{ alignItems: "center", paddingTop: 46 }}>
          <Image
            resizeMode="contain"
            style={{ width: 200, height: 100 }}
            source={require("../../../assets/images/icici_logo.png")}
          />
          <View
            style={[
              Custompadding.paddingRegular,
              { alignItems: "center", paddingTop: 26 }
            ]}
          >
            <Text style={typography.medium.medium}>
              Login to your SatFarm account
            </Text>
          </View>
        </View>
        {/* TopLogo */}

        {/* TextField */}
        <View>
          <CustomTextField placeholder="Username" />
          <CustomTextField placeholder="Password" />
        </View>
        {/* TextField */}

        {/* Button */}
        <View style={{ paddingTop: 26 }}>
          <Button buttonText="Login" noMargin={true} callback={callback} />
        </View>
        {/* Button */}
        {/* BottomLogo */}
        <View
          style={[
            {
              position: "absolute",
              bottom: 26,
              left: 0,
              right: 0,
              alignItems: "center"
            }
          ]}
        >
          <Image
            resizeMode="contain"
            style={{ width: 80, height: 30 }}
            source={require("../../../assets/images/satsure_logo.png")}
          />
        </View>
        {/* BottomLogo */}
      </View>
    );
  }
}
