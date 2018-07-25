import React, { Component } from "react";
import { View, Text, WebView, ActivityIndicator } from "react-native";

class NewsDetail extends Component {
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
      <View marginTop={20}>
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

export default NewsDetail;
