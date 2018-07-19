import React, { Component } from "react";
import { View , Text} from "react-native";
import { connect } from "react-redux";

class News extends Component {
  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Text>News</Text>
      </View>
    );
  }
}

export default News;
