import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Polygon, ProviderPropType } from "react-native-maps";
import LocationButton from "./UI/LocationButton";
import { colors, typography } from "../../../styles/StyleSheet";

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
      selectedPolygonCallback,
      region,
      freezCallback,
      isFreez
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ width: "100%", height: "100%" }}
          mapType="satellite"
          region={region}
          zoomEnabled={isFreez}
          scrollEnabled={isFreez}
          rotateEnabled={isFreez}
          followUserLocation={true}
          zoomControlEnabled={true}
          enableZoomControl={true}
          zoom={1}
          showcompass={true}
          onPress={e => {
            if (isEdit) {
              callback(e);
            }
          }}
          showsMyLocationButton={true}
          showsUserLocation={true}
        >
          {polygons.map(polygon => (
            <Polygon
              key={polygon.id}
              onPress={() => {
                selectedPolygonCallback(polygon.id);
              }}
              tappable={true}
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
          freezCallback={freezCallback}
          showDelete={isEdit}
          showFreez={isEdit}
        />
        {isEdit ? (
          <View style={{ position: "absolute", width: "100%" }}>
            <View
              style={{
                height: 40,
                backgroundColor: "rgba(0,0,0,0.8)",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={[typography.regular.small, { color: colors.white }]}>
                Draw a polygon on the area
              </Text>
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  }
}
