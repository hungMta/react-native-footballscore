import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import {
  getAllFixtures,
  resetFixturesState
} from "../../../../../store/action/fixture";
import styles from "./style";
import { FIXTURE_ALL_FIXTURE_RESET } from "../../../../../constants/types";
import { delay } from "redux-saga";

class Fixtures extends Component {
  constructor(props) {
    super(props);
    var competition = this.props.navigation.getParam("competition", null);
    console.log("props = ", competition);
    this.state = {
      allFixtures: [],
      isLoadmore: false,
      fixtures: [],
      page: 1,
      isRefreshing: false
    };
  }

  componentDidMount() {
    this.props.getAllFixtures(
      this.props.navigation.getParam("competition", null).id
    );
  }

  componentWillUnmount() {
    this.props.resetFixturesState();
  }

  navigateToScreen(route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {
        title: "Fixture one"
      }
    });
    this.props.navigation.dispatch(navigateAction);
  }

  viewStatus(status) {
    switch (status) {
      case "FINISHED": {
        return (
          <View style={styles.centerChildRow}>
            <Text style={styles.statusStyle}>FINISHED</Text>
            <View style={[styles.matchStatus, styles.matchFinished]} />
          </View>
        );
      }
      case "SCHEDULED": {
        return (
          <View style={styles.centerChildRow}>
            <Text style={styles.statusStyle}>SCHEDULED</Text>
            <View style={[styles.matchStatus, styles.matchStatusScheduled]} />
          </View>
        );
      }
      case "IN_PLAY": {
        return (
          <View style={styles.centerChildRow}>
            <Text style={styles.statusStyle}>LIVE</Text>
            <View style={[styles.matchStatus, styles.matchStatusLive]} />
          </View>
        );
      }
    }
  }

  viewScore(item) {
    const goalsHomeTeam = item.result.goalsHomeTeam;
    const goalsAwayTeam = item.result.goalsAwayTeam;
    if (goalsHomeTeam > goalsAwayTeam) {
      return (
        <View style={styles.scoreView}>
          <View style={[styles.scoreHomeView, styles.scoreWinColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {goalsHomeTeam}
            </Text>
          </View>
          <View style={[styles.scoreAwayView, styles.scoreLoseColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {goalsAwayTeam}
            </Text>
          </View>
        </View>
      );
    } else if (goalsHomeTeam < goalsAwayTeam) {
      return (
        <View style={styles.scoreView}>
          <View style={[styles.scoreHomeView, styles.scoreLoseColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {goalsHomeTeam}
            </Text>
          </View>
          <View style={[styles.scoreAwayView, styles.scoreWinColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {goalsAwayTeam}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.scoreView}>
          <View style={[styles.scoreHomeView, styles.scoreWinColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {goalsHomeTeam}
            </Text>
          </View>
          <View style={[styles.scoreAwayView, styles.scoreWinColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {goalsAwayTeam}
            </Text>
          </View>
        </View>
      );
    }
  }

  flatItem = ({ item }) => {
    const homeWin =
      item.result.goalsHomeTeam > item.result.goalsAwayTeam ? true : false;

    return (
      <TouchableOpacity style={styles.itemWrapper}>
        <View style={styles.matchItem}>
          <View style={styles.centerChildColumn}>
            <View style={[styles.flex_1, styles.centerHorizontal]}>
              <View style={[styles.flex_3, styles.centerItem]}>
                <Image
                  style={styles.logoTeamSize}
                  source={{
                    uri:
                      "https://clipart.info/images/ccovers/1503438022arsenal-fc-logo-png.png"
                  }}
                />
              </View>
              <View
                style={[styles.flex_2, styles.centerItem]}
                paddingLeft={5}
                paddingRight={5}
              >
                <Text style={styles.labelTeamName}>{item.homeTeamName}</Text>
              </View>
            </View>
          </View>
          <View style={styles.centerChildColumn}>
            {this.viewScore(item)}
            <View style={styles.viewStatus}>
              {this.viewStatus(item.status)}
            </View>
            <View />
          </View>
          <View style={styles.centerChildColumn}>
            <View style={[styles.flex_1, styles.centerHorizontal]}>
              <View style={[styles.flex_3, styles.centerItem]}>
                <Image
                  style={styles.logoTeamSize}
                  source={{
                    uri:
                      "https://clipart.info/images/ccovers/1503438022arsenal-fc-logo-png.png"
                  }}
                />
              </View>
              <View
                style={[styles.flex_2, styles.centerItem]}
                paddingLeft={5}
                paddingRight={5}
              >
                <Text style={styles.labelTeamName}>{item.awayTeamName}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  flatKeyExtractor = (item, index) => index.toString();

  flatFooter = () => {
    if (
      this.props.data.fixtures.slice(0, this.state.page * 20).length <
      this.props.data.fixtures.length
    ) {
      return (
        <View height={50} style={styles.centerItem}>
          <ActivityIndicator />
        </View>
      );
    }
    return <View height={50} />;
  };

  handleLoadmore = async () => {
    if (
      this.props.data.fixtures.slice(0, this.state.page * 20).length >=
      this.props.data.fixtures.length
    ) {
      return;
    }
    await delay(2000);
    this.setState({
      page: this.state.page + 1,
      isLoadmore: false
    });
  };

  handleRefresh = async () => {
    this.setState({
      isRefreshing: true
    });
    await delay(2000);
    this.setState({
      isRefreshing: false,
      page: 1
    });
  };

  render() {
    console.log(this.props.data.fixtures.slice(0, this.state.page * 20).length);
    if (this.props.data.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator marginTop={20} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data.fixtures.slice(0, this.state.page * 20)}
          renderItem={this.flatItem}
          keyExtractor={this.flatKeyExtractor}
          ListFooterComponent={this.flatFooter}
          onEndReachedThreshold={0.5}
          onEndReached={this.handleLoadmore}
          onRefresh={this.handleRefresh}
          refreshing={this.state.isRefreshing}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.fixtures
  };
}

function mapPropsToDispatch() {
  return {
    getAllFixtures: getAllFixtures
  };
}

export default connect(
  mapStateToProps,
  { getAllFixtures, resetFixturesState }
)(Fixtures);
