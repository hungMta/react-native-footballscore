import React from "react";
import { Button, Text, View } from "react-native";
import Header from "../../drawer_navigation/header";
export default class Standings extends React.Component {

    constructor(props) {
      super(props)
      console.log("Standings -> constructor");
      this.state = {
         
      };
    };
    


  componentDidMount() {
    console.log("Standings -> componentDidMount");
  }

  componentDidUpdate() {
    console.log("Standings -> componentDidMount");
  }

  componentWillMount() {
    console.log("Standings -> componentWillMount");
  }

  componentWillUnmount() {
    console.log("Standings -> componentWillUnmount");
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Standings!</Text>
        </View>
      </View>
    );
  }
}
