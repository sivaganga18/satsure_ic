import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { map } from "lodash";
import PortfolioCard from "./UI/PortfolioCard";
import { Custompadding } from "../../../styles/StyleSheet";

export default class PortfolioLayout extends Component {
  render() {
    const { portfolioData } = this.props;
    return (
      <View
        style={[
          Custompadding.paddingRegular,
          { flex: 1, paddingTop: 0, paddingBottom: 0 }
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                paddingTop: 16,
                paddingBottom: 16
              }
            ]}
          >
            {map(portfolioData, (portfolio, key) => {
              return (
                <PortfolioCard
                  callback={() => {}}
                  image={require("../../../assets/images/avg_money.png")}
                  subTitle="Low Potential"
                  title="7,00,000"
                  lan="6500"
                  elb="6500"
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
