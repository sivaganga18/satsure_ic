import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Polygon, ProviderPropType } from "react-native-maps";
import LocationButton from "./UI/LocationButton";

let id = 0;

export default class LocationLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      polygons,
      isEdit,
      callback,
      editing,
      editCallback,
      deleteCallback,
      selectedPolygonCallback
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onPress={e => {
            if (isEdit) {
              callback(e);
            }
          }}
        >
          {polygons.map(polygon => (
            <Polygon
              key={polygon.id}
              onPress={() => {
                selectedPolygonCallback(polygon.id);
              }}
              coordinates={polygon.coordinates}
              holes={polygon.holes}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          ))}
          {editing && (
            <Polygon
              key={editing.id}
              coordinates={editing.coordinates}
              holes={editing.holes}
              strokeColor="#000"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          )}
        </MapView>
        <LocationButton
          editCallback={editCallback}
          deleteCallback={deleteCallback}
        />
      </View>
    );
  }
}
