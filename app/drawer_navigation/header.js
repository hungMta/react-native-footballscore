/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { DrawerActions } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import styles from "../style/header.styles";

export default class Header extends Component {
  render() {
    console.log("header", this.props);
    return (
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#334562", "#3F5F8F", "#334562"]}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", height: 50 }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "flex-start" }}
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}
          >
            <Icon
              name="menu"
              size={30}
              color="white"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 5,
              color: "white",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>
              {this.props.title}
            </Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
      </LinearGradient>
    );
  }
}
