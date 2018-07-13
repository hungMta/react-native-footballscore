import React from "react";
import { Button, Text, View } from "react-native";
import Header from "../../drawer_navigation/header";
export default class Standings extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
         
      };
    };
    


  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillMount() {

  }

  componentWillUnmount() {

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
