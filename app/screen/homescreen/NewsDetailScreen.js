import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  WebView,
  ActivityIndicator
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Entypo";
import styles from "../../style/styles"

export default class NewsDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  hideSpinner = () => {
    console.log("load success");
    this.setState({ loading: false });
  };

  displaySpinner = () => {
    return (
      <View style={styles.centerChild}>
        <ActivityIndicator />
      </View>
    );
  };

  render() {
    console.log(this.props.navigation.getParam("url", ""));
    return (
      <WebView
        source={{ uri: this.props.navigation.getParam("url", "") }}
        startInLoadingState={true}
        renderLoading={() => {
          return this.displaySpinner();
        }}
      />
    );
  }
}
