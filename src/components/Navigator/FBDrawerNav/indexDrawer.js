import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import DrawerNav from "./drawerNav";

class FBStackNav extends Component {

  constructor(props) {
    super(props);
    console.log("FBSTACK NAV", this.props.navigation);
  }



  render() {
    console.log("FBSTACK NAV", this.props.navigation);
    return <DrawerNav screenProps={{ rootNavigation: this.props.navigation }} />;
  }
}

function mapStateToProps(state) {
  return {
    competition: state.competition
  };
}

export default connect(mapStateToProps)(FBStackNav);
