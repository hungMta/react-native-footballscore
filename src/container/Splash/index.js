import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { checkLogined } from "../../store/action/login";
import { NavigationActions } from "react-navigation";
import styles from "../Login/style";

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props.checkIsLoged", this.props.checkIsLoged);
    switch (this.props.checkIsLoged) {
      case -1:
        this.props.navigation.navigate("Login");
        break;
      case 0:
        this.props.checkLogined();
        break;
      case 1:
        this.props.navigation.navigate("News");
        break;
    }
    return <View style={styles.primaryDarkColor} flex={1} />;
  }
}

function mapStateToProps(state) {
  return {
    checkIsLoged: state.auth.checkIsLoged
  };
}

export default connect(
  mapStateToProps,
  { checkLogined }
)(Splash);
