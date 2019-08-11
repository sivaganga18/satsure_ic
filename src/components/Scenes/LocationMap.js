import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import AppHeader from "../Common/AppHeader";
import { Actions } from "react-native-router-flux";
import LocationLayout from "../ScenesComponents/Location/LocationLayout";
import Button from "../Common/Button";
import { remove } from "lodash";
import LocationModal from "../ScenesComponents/Location/LocationModal";

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
      modalVisible: false
    };
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

  render() {
    const { polygons, isEdit, editing, modalVisible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <AppHeader
          leftIcon={require("../../assets/images/hamburger.png")}
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
        <LocationModal visible={modalVisible} />
        {/* LocationModal */}
      </View>
    );
  }
}
