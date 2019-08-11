import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { map } from "lodash";
import PortfolioCard from "./UI/PortfolioCard";
import { Custompadding } from "../../../styles/StyleSheet";

export default class PortfolioLayout extends Component {
  render() {
    const { portfolioData, callback } = this.props;
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
                  callback={() => {
                    callback();
                  }}
                  image={
                    portfolio.name == "Low Potential"
                      ? require("../../../assets/images/low_money.png")
                      : portfolio.name == "Avg Potential"
                      ? require("../../../assets/images/avg_money.png")
                      : portfolio.name == "High Potential"
                      ? require("../../../assets/images/high_money.png")
                      : require("../../../assets/images/total_money.png")
                  }
                  subTitle={portfolio.name}
                  title={portfolio.amount}
                  lan={portfolio.lan}
                  elb={portfolio.elb}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
