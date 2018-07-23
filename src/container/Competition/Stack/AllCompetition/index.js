import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  FlatList
} from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { connect } from "react-redux";
import {
  getAllCompetition,
  getCompetition,
  resetCompetitionState
} from "../../../../store/action/competition";
import { SCREEN_COMPETITION_TAB } from "../index";
import styles from "./style";
import { cloneableGenerator } from "redux-saga/utils";

class AllCompetition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: []
    };
  }

  componentDidMount() {
    this.props.getAllCompetition();
  }

  componentWillUnmount() {
    this.props.resetCompetitionState();
  }

  componentWillReceiveProps(nextProps) {
    // console.log(
    //   "componentWillReceiveProps ",
    //   nextProps.competition.data.competitions.slice(0, 20)
    // );
    // this.setState({
    //   data: nextProps.competition.data.competitions.slice(0, 20)
    // });
  }

  navigateToScreen(route, item) {
    const stackActions = StackActions.push({
      routeName: route,
      params: {
        competition: item
      }
    });
    this.props.navigation.dispatch(stackActions);
  }

  flatItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.flatItem}
        onPress={() => this.navigateToScreen(SCREEN_COMPETITION_TAB, item)}
      >
        <Text
          style={{
            color: "white",
            paddingRight: 10,
            paddingLeft: 10,
            textAlign: "center"
          }}
        >
          {item.caption}
        </Text>
      </TouchableOpacity>
    );
  };

  flatKeyExtractor(item, index) {
    return item.id.toString();
  }

  flexLoadmore() {
    console.log("flexLoadmore ######");
    console.log(this.state.page);
    this.setState(
      {
        page: this.state.page + 1
        // data: this.state.data.concat(
        //   this.props.competition.data.competitions.slice(
        //     this.state.data.length,
        //     this.state.page * 20
        //   )
        // )
      },
      () => this.makeRemoteRequest()
    );
  }

  makeRemoteRequest() {
    console.log("makeRemoteRequest ########");
    this.setState({
      data: [
        ...this.state.data,
        ...this.props.competition.data.competitions.slice(
          this.state.data.length,
          this.state.page * 20
        )
      ]
    });
  }

  render() {
    if (this.props.competition.allLoading) {
      console.log("this.props.competition : ", this.props.competition);
      if (this.props.competition.errMsg !== null) {
        console.log(this.props.competition.errMsg);
        Alert.alert("Error", this.props.competition.errMsg, {
          cancelable: false
        });
        return <View />;
      }
      return (
        <View style={styles.container}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.competition.data}
          numColumns={2}
          keyExtractor={this.flatKeyExtractor}
          renderItem={this.flatItem}
        />
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
  { getAllCompetition, resetCompetitionState }
)(AllCompetition);
