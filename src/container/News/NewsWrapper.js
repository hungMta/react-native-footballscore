import React, { Component } from "react";
import NewsStack from "./Stack/index";
import { connect } from "react-redux";

class NewsWrapper extends Component {
  render() {
    return (
      <NewsStack screenProps={{ rootNavigation: this.props.navigation }} />
    );
  }
}

export default connect()(NewsWrapper);
