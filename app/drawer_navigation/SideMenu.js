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
import styles from "../style/styles";
import Icon from "react-native-vector-icons/FontAwesome";
const footballApi = require("../api/API");
const constants = require("../constants");

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
    console.log(this.state);
  }

  navigateToScreen = (route, idCompetition, competition) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {
        id: idCompetition
      }
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.closeDrawer();
  };

  componentDidMount() {
    const url = constants.COMPETITION;
    const oldData = this.state.data;
    return footballApi
      .callAPI(url)
      .then(response => {
        const temp = [
          {
            _links: {
              self: {
                href: ""
              },
              teams: {
                href: ""
              },
              fixtures: {
                href: ""
              },
              leagueTable: {
                href: ""
              }
            },
            id: 0,
            caption: "Home",
            league: "",
            year: "",
            currentMatchday: 0,
            numberOfMatchdays: 0,
            numberOfTeams: 0,
            numberOfGames: 0,
            lastUpdated: ""
          }
        ];
        temp.push(...response);
        this.setState({
          data: temp,
          isLoading: false
        });
        console.log(data);
      })
      .catch(error => {
        throw error;
      });
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => {
    var nav_screen = constants.NAV_COMPETITION
    
    if(item.id == '0'){
        nav_screen = constants.NAV_HOME
    }

    return (
      <View>
        <TouchableOpacity
          style={styles.navSectionStyle}
          onPress={this.navigateToScreen(nav_screen, item.id, item)}
        >
          <Icon name="soccer-ball-o" size={20} color="white" style={{ marginLeft: 10 }} />
          <Text style={styles.navItemStyle}>{item.caption}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ backgroundColor: "#334562", flex: 1 }}>
          <View style={[styles.centerVertical, styles.headerHeight]} />
          <ActivityIndicator/>
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
