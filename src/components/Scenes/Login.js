import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import LoginLayout from "../ScenesComponents/Login/LoginLayout";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginLayout
          callback={() => {
            Actions.portfolio();
          }}
        />
      </View>
    );
  }
}
