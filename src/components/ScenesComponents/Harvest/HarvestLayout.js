//import liraries
import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { map } from "lodash";
import { colors, Custompadding } from "../../../styles/StyleSheet";
import HarvestCard from "./UI/HarvestCard";

export default class HarvestLayout extends Component {
  render() {
    const { harvestData, callback } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ paddingBottom: 16 }}>
            {map(harvestData, (harvest, key) => {
              return (
                <HarvestCard
                  code={harvest.assetCode}
                  crops={harvest.crops}
                  area={harvest.areaFinanced}
                  date={harvest.harvestWindow}
                  callback={callback}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
