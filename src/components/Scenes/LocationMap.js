import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import AppHeader from "../Common/AppHeader";
import { Actions } from "react-native-router-flux";
import LocationLayout from "../ScenesComponents/Location/LocationLayout";
import Button from "../Common/Button";
import { remove, cloneDeep } from "lodash";
import LocationModal from "../ScenesComponents/Location/LocationModal";
import ImagePicker from "react-native-image-picker";
import Permissions from "react-native-permissions";
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";

const width = Dimensions.get("window").width;

let id = 0;

export default class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polygons: [],
      editing: null,
      creatingHole: false,
      isEdit: false,
      selectedPolygon: null,
      modalVisible: false,
      photoPermission: "",
      imageArray: [],
      isDateTimePickerVisible: false,
      dateValue: ""
    };
  }

  componentDidMount() {
    Permissions.check("photo").then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response });
    });
  }

  _requestPermission = () => {
    debugger;
    Permissions.request("photo").then(response => {
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response });
    });
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };
        let updateArray = cloneDeep(this.state.imageArray);
        updateArray.push(source);
        this.setState({
          imageArray: updateArray
        });
      }
    });
  }

  finish() {
    const { polygons, editing } = this.state;
    this.setState({
      polygons: [...polygons, editing],
      editing: null,
      creatingHole: false,
      isEdit: false
    });
  }

  deletePolygon() {
    const { polygons, selectedPolygon } = this.state;
    let updatedata = polygons;
    remove(updatedata, function(polygon) {
      return polygon.id == selectedPolygon;
    });
    this.setState({ polygons: updatedata });
  }

  onPress(e) {
    const { editing, creatingHole } = this.state;
    if (!editing) {
      this.setState({
        editing: {
          id: id++,
          coordinates: [e.nativeEvent.coordinate],
          holes: []
        }
      });
    } else if (!creatingHole) {
      this.setState({
        editing: {
          ...editing,
          coordinates: [...editing.coordinates, e.nativeEvent.coordinate]
        }
      });
    } else {
      const holes = [...editing.holes];
      holes[holes.length - 1] = [
        ...holes[holes.length - 1],
        e.nativeEvent.coordinate
      ];
      this.setState({
        editing: {
          ...editing,
          id: id++,
          coordinates: [...editing.coordinates],
          holes
        }
      });
    }
  }

  handleDatePicked = date => {
    let formateDate = moment(date).format("DD-MM-YYYY");
    this.setState(
      { dateValue: formateDate, isDateTimePickerVisible: false },
      () => {
        setTimeout(() => {
          this.setState({ modalVisible: true });
        }, 300);
      }
    );
  };

  render() {
    const {
      polygons,
      isEdit,
      editing,
      modalVisible,
      photoPermission,
      imageArray,
      isDateTimePickerVisible,
      dateValue
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <AppHeader
          leftIcon={require("../../assets/images/back.png")}
          leftIconCallback={() => {
            Actions.pop();
          }}
          title="ICICI00XXX"
        />
        {/* Header */}

        {/* Layout */}
        <LocationLayout
          polygons={polygons}
          isEdit={isEdit}
          callback={e => {
            this.onPress(e);
          }}
          selectedPolygonCallback={id => {
            // this.setState({ selectedPolygon: id });
            this.setState({ modalVisible: true });
          }}
          editing={editing}
          editCallback={() => {
            this.setState({ isEdit: true });
          }}
          deleteCallback={() => {
            this.deletePolygon();
          }}
        />
        {/* Layout */}

        {/* Bottom */}
        {isEdit && editing !== null ? (
          <View style={{ position: "absolute", width: width, bottom: 0 }}>
            <Button
              buttonText="SAVE"
              callback={() => {
                this.finish();
              }}
              noMargin={true}
            />
          </View>
        ) : (
          <View />
        )}
        {/* Bottom */}

        {/* LocationModal */}
        <LocationModal
          visible={modalVisible}
          imageArray={imageArray}
          imageCallback={() => {
            if (photoPermission == "authorized") {
              this.selectPhotoTapped();
            } else {
              this._requestPermission();
            }
          }}
          closeCallback={() => {
            this.setState({ modalVisible: false });
          }}
          proccedCallback={() => {
            this.setState({ dateValue: "", modalVisible: false });
          }}
          dateCallback={() => {
            debugger;
            this.setState({ modalVisible: false }, () => {
              setTimeout(() => {
                this.setState({ isDateTimePickerVisible: true });
              }, 300);
            });
          }}
          dateValue={dateValue}
        />
        {/* LocationModal */}
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={() => {
            this.setState({ isDateTimePickerVisible: false });
          }}
        />
      </View>
    );
  }
}
