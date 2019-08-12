import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Polygon, ProviderPropType } from "react-native-maps";
import LocationButton from "./UI/LocationButton";
import { colors, typography } from "../../../styles/StyleSheet";
import ZoomButton from "./UI/ZoomButton";

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
      isFreez,
      plusCallback,
      minusCallback,
      onRegionChangeComplete,
      gpsCallback
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ width: "100%", height: "100%" }}
          mapType="satellite"
          region={region}
          initialRegion={region}
          zoomEnabled={isFreez}
          scrollEnabled={isFreez}
          rotateEnabled={isFreez}
          onRegionChangeComplete={onRegionChangeComplete}
          followUserLocation={true}
          zoomControlEnabled={true}
          enableZoomControl={true}
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
              strokeColor="rgba(255,159,94,1)"
              fillColor="rgba(255,159,94,0.52)"
              strokeWidth={1}
            />
          ))}
          {editing && (
            <Polygon
              key={editing.id}
              coordinates={editing.coordinates}
              holes={editing.holes}
              strokeColor="rgba(68,215,182,1)"
              fillColor="rgba(68,215,182,0.52)"
              strokeWidth={1}
            />
          )}
        </MapView>
        <LocationButton
          editCallback={editCallback}
          deleteCallback={deleteCallback}
          isFreez={isFreez}
          freezCallback={freezCallback}
          showDelete={isEdit}
          showFreez={isEdit}
        />
        <View style={{ position: "absolute", bottom: 66, right: 20 }}>
          <ZoomButton
            plusCallback={plusCallback}
            minusCallback={minusCallback}
            gpsCallback={gpsCallback}
          />
        </View>
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
