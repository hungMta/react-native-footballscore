import React from "react";
import { Button, Text, View } from "react-native";
import Header from "../../drawer_navigation/header";
import footballApi from "../../api/API";
import constants from "../../constants";

export default class Match extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  componentDidMount() {
    // console.log(this.props.currentSeason.currentMatchday);
  }

  componentDidUpdate() {
    console.log("Match -> componentDidMount");
  }

  componentWillMount() {
    console.log("Match -> componentWillMount");
  }

  componentWillUnmount() {
    console.log("Match -> componentWillUnmount");
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Match!</Text>
        </View>
      </View>
    );
  }
}
