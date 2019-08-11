import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { map } from "lodash";
import ListCard from "./UI/ListCard";

const data = [
  {
    title: "SatFarm Help",
    body:
      "SatFarm enables region-wise risk categorization of customer potentials based on the integrated bank data. This further helps a user to monitor and drill-down to the risky assets which might a require on-field validation."
  },
  {
    title: "Choice of Region",
    body:
      "The top-right dropdown in the priority portfolio screen lists the different region assigned to the user. User can choose the region of interest to view the customer potential portfolios. "
  },
  {
    title: "Priority Portfolio",
    body:
      "Assets are grouped under 3 categories based on their potential internally calculated risks. Pending Loan Amount, End-Ledger Balance and count of loan accounts under each category can be obtained. A tile with total aggregate of the entire asset is also present."
  },
  {
    title: "Asset Details",
    body:
      "Choosing a particular tile in the priority portfolio screen navigates into the list of assets under each category.  Details associated to individual asset can be found in this screen (Financed Area, Harvest Window and Crop List) along with an indication if the asset has been previously validated (Green Dot)."
  },
  {
    title: "Harvest Notification",
    body:
      "As the farms associated to a given asset near the harvest date, the remaining number of days is highlighted."
  }
];

export default class HelpLayout extends Component {
  render() {
    const { activeTab, callback } = this.props;
    return (
      <ScrollView>
        <View style={{ paddingBottom: 16 }}>
          {map(data, (d, key) => {
            return (
              <ListCard
                title={d.title}
                body={d.body}
                isOpen={key == activeTab}
                callback={() => {
                  callback(key);
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
