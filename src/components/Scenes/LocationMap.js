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
const LATITUDE_DELTA = 0.00922 * 0.4;
const LONGITUDE_DELTA = 0.00421 * 0.4;

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
      dateValue: "",
      isFreez: true,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      onChange: false
    };
  }

  componentDidMount() {
    Permissions.check("photo").then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response });
    });
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log("wokeeey");
        console.log(position);
        this.setState({
          region: {
            ...this.state.region,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          },
          error: null,
          onChange: true
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }

  _requestPermission = () => {
    debugger;
    Permissions.request("photo").then(response => {
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response });
    });
  };

  zoomMap(zoom) {
    debugger;
    if (this.state.region.latitudeDelta >= 0) {
      const updateRegion = zoom
        ? this.state.region.latitudeDelta + 0.00922
        : this.state.region.latitudeDelta - 0.00922;
      this.setState({
        region: {
          ...this.state.region,
          latitudeDelta: updateRegion <= -0 ? LATITUDE_DELTA : updateRegion
        },
        error: null
      });
    }
  }

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
    this.setState(
      {
        polygons: [...polygons, editing],
        editing: null,
        creatingHole: false,
        isEdit: false,
        isFreez: false
      },
      () => {
        this.setState({ modalVisible: true });
      }
    );
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

  onRegionChange = e => {
    if (this.state.onChange) {
      this.setState({
        region: {
          ...this.state.region,
          latitude: e.latitude,
          longitude: e.longitude,
          latitudeDelta: this.state.region.latitudeDelta,
          longitudeDelta: this.state.region.longitudeDelta
        }
      });
    }
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
      dateValue,
      region,
      isFreez
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
          rightIcon={require("../../assets/images/home.png")}
          rightIconCallback={() => {
            Actions.popTo("portfolio");
          }}
        />
        {/* Header */}

        {/* Layout */}
        <LocationLayout
          polygons={polygons}
          isEdit={isEdit}
          region={region}
          isFreez={isFreez}
          callback={e => {
            this.onPress(e);
          }}
          onRegionChangeComplete={this.onRegionChange}
          selectedPolygonCallback={id => {
            // this.setState({ selectedPolygon: id });
            this.setState({ modalVisible: true });
          }}
          editing={editing}
          editCallback={() => {
            this.setState({ isEdit: true });
          }}
          deleteCallback={() => {
            this.setState({ editing: null });
          }}
          freezCallback={() => {
            this.setState({ isFreez: !this.state.isFreez });
          }}
          plusCallback={() => {
            this.zoomMap(1);
          }}
          minusCallback={() => {
            this.zoomMap(0);
          }}
          gpsCallback={() => {
            this.getCurrentLocation();
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
