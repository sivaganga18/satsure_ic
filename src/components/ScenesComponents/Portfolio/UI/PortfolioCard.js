import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  colors,
  typography,
  fontSizes,
  Custompadding
} from "../../../../styles/StyleSheet";

export default class PortfolioCard extends Component {
  render() {
    const { subTitle, title, lan, elb, image, callback } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={callback}
        style={{
          width: "48%",
          height: 200,
          backgroundColor: colors.white,
          marginBottom: 16,
          borderRadius: 5
        }}
      >
        <View
          style={{
            padding: 16,
            borderBottomWidth: 0.5,
            borderColor: colors.borderColor
          }}
        >
          <View>
            <Image style={{ width: 40, height: 40 }} source={image} />
          </View>
          <View style={{ paddingTop: 16 }}>
            <Text
              style={[
                typography.regular.small,
                { color: colors.textSecondaryLight }
              ]}
            >
              {subTitle}
            </Text>
            <Text
              style={[
                typography.medium.medium,
                { ...fontSizes.xlarge, paddingTop: 6 }
              ]}
            >
              {`₹ ${title ? title : ""}`}
            </Text>
          </View>
        </View>
        <View style={{ padding: 16, paddingTop: 10, paddingBottom: 10 }}>
          {/* {padding:16, paddingTop: 10, paddingBottom: 10} */}
          <Text
            style={[
              typography.regular.small,
              { color: colors.textSecondaryLight }
            ]}
          >{`Total #LAN - ${lan ? lan : 0}`}</Text>
          <Text
            style={[
              typography.regular.small,
              { color: colors.textSecondaryLight, paddingTop: 6 }
            ]}
          >{`Total ELB - ₹${elb ? elb : 0}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
