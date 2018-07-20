import React, { Component } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { connect } from "react-redux";
import {
  getAllCompetition,
  getCompetition,
  resetCompetitionState
} from "../../../../store/action/competition";

class AllCompetition extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCompetition();
  }

  componentWillUnmount() {
    this.props.resetCompetitionState();
  }

  navigateToScreen(route) {
    const stackActions = StackActions.push({
      routeName: route,
      params: {
        title: "Com1"
      }
    });
    this.props.navigation.dispatch(stackActions);
  }

  render() {
    if (this.props.competition.allLoading) {
      if(this.props.competition.error !== ""){
        console.log(this.props.competition.error)
        Alert.alert(
          'Alert Title',
          this.props.competition.error,
          // [
          //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          //   {text: 'OK', onPress: () => console.log('OK Pressed')},
          // ],
          { cancelable: false }
        )
        return <View/>
      }
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ justifyContent: "center" }}>
      {console.log("data ",this.props.competition.data)}
        <Text>AllCompetition</Text>
        <TouchableOpacity
          onPress={() => this.navigateToScreen("ComeptitionTab")}
        >
          <Text>Com1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    competition: state.competition
  };
}

function mapPropsToDispatch() {
  return {
    getAllCompetition
  };
}

export default connect(
  mapStateToProps,
  {getAllCompetition, resetCompetitionState}
)(AllCompetition);
