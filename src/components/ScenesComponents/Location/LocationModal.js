import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { colors, Custompadding, typography } from "../../../styles/StyleSheet";
import Modal from "react-native-modal";
import CustomTextField from "../../Common/CustomTextField";
import Button from "../../Common/Button";
import AddPhoto from "./UI/AddPhoto";
import ValidationButton from "./UI/ValidationButton";

const height = Dimensions.get("window").height;

export default class LocationModal extends Component {
  render() {
    const {
      visible,
      imageCallback,
      imageArray,
      closeCallback,
      proccedCallback,
      dateCallback,
      dateValue,
      validationCallback,
      validationList,
      validationActiveTab
    } = this.props;
    return (
      <Modal isVisible={visible}>
        <View
          style={[
            Custompadding.paddingRegular,
            {
              backgroundColor: colors.white,
              maxHeight: height - 50,
              borderRadius: 4
            }
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 16
            }}
          >
            <View>
              <Text style={[typography.medium.medium]}>
                Fill in the details
              </Text>
            </View>
            <TouchableOpacity onPress={closeCallback}>
              <Image
                style={{ width: 15, height: 15 }}
                source={require("../../../assets/images/close.png")}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View>
              <CustomTextField title="Tehsil Name" />
              <CustomTextField title="Survey Number" />
              <CustomTextField title="Crop Name" />
              <CustomTextField
                title="Harvest Date"
                showTouchField={true}
                callback={dateCallback}
                value={dateValue}
                icon={require("../../../assets/images/calender.png")}
              />
              <AddPhoto callback={imageCallback} photosArray={imageArray} />
              <ValidationButton
                list={validationList}
                activeTab={validationActiveTab}
                callback={key => {
                  validationCallback(key);
                }}
              />
              <CustomTextField title="Created Date" />
              <CustomTextField
                title="GPS Coordinates"
                icon={require("../../../assets/images/gps-light.png")}
              />
            </View>
          </ScrollView>
          <View style={{ paddingTop: 16 }}>
            <Button
              buttonText="SUBMIT"
              noMargin={true}
              callback={proccedCallback}
            />
          </View>
        </View>
      </Modal>
    );
  }
}
