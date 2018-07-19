import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Text>About</Text>
      </View>
    );
  }
}

export default About;
