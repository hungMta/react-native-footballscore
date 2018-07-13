import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { NavigationActions, DrawerActions } from "react-navigation";
import styles from "../../style/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { passCompetition } from "../../redux/actionCreator";
const footballApi = require("../../api/API");
const constants = require("../../constants");

class SideMenuWC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
    console.log(this.state);
  }

  navigateToScreen = (route, idCompetition, competitionObj) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {
        id: idCompetition,
        competition: competitionObj
      }
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.closeDrawer();
    if (route === constants.NAV_WORLDCUP) {
      this.props.passCompetition(competitionObj);
    }
  };

  componentDidMount() {
    const url = constants.COMPETITION;
    return footballApi
      .callAPI(url)
      .then(response => {
        const temp = [
          {
            id: 0,
            area: {
              id: 0,
              name: "Home"
            },
            name: "Home",
            code: null,
            plan: "TIER_FOUR",
            currentSeason: {
              id: 7,
              startDate: "2015-10-07",
              endDate: "2017-11-14",
              currentMatchday: 6
            },
            numberOfAvailableSeasons: 1,
            lastUpdated: "2018-06-04T23:54:04Z"
          },
          {
            id: 2000,
            area: {
              id: 2267,
              name: "World"
            },
            name: "FIFA World Cup",
            code: null,
            plan: "TIER_ONE",
            currentSeason: {
              id: 1,
              startDate: "2018-06-14",
              endDate: "2018-07-15",
              currentMatchday: 3
            },
            numberOfAvailableSeasons: 1,
            lastUpdated: "2018-06-04T00:02:58Z"
          }
        ];
        // temp.push(...response.competitions);
        this.setState({
          data: temp,
          isLoading: false
        });
      })
      .catch(error => {
        throw error;
      });
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => {
    var nav_screen = constants.NAV_COMPETITION;

    if (item.id == "0") {
      nav_screen = constants.NAV_HOME;
    }
    if (item.id == "2000") {
      nav_screen = constants.NAV_WORLDCUP;
    }

    return (
      <View>
        <TouchableOpacity
          style={styles.navSectionStyle}
          onPress={this.navigateToScreen(nav_screen, item.id, item)}
        >
          <Icon
            name="soccer-ball-o"
            size={20}
            color="white"
            style={{ marginLeft: 10 }}
          />
          <Text style={styles.navItemStyle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ backgroundColor: "#334562", flex: 1 }}>
          <View style={[styles.centerVertical, styles.headerHeight]} />
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ backgroundColor: "#334562", flex: 1 }}>
        <View style={[styles.centerVertical, styles.headerHeight]} />
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { passCompetition }
)(SideMenuWC);
