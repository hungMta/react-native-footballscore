import React from "react";
import {
  Button,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image
} from "react-native";
import styles from "../../../style/styles";
import {connect} from "react-redux"

const footballApi = require("../../../api/API");
const constant = require("../../../constants");

class Match extends React.Component {
  constructor(props) {
    super(props);
    this.viewStatus = this.viewStatus.bind(this);
    this.viewScore = this.viewScore.bind(this);
    console.log("Match => ", this.props.competition);
    this.state = {
      matches: [],
      isLoading: true,
      currentMatch: this.props.competition.currentSeason
        .currentMatchday,
      isRefreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRefresh();
  }

  makeRemoteRefresh = () => {
    console.log("currentMatch: ", this.state.currentMatch);
    const competition = this.props.competition;
    const currentMatch = this.state.currentMatch;
    const params =
      constant.COMPETITION +
      "/" +
      competition.id +
      "/" +
      constant.MATCH_DAY +
      currentMatch;
    return footballApi
      .callAPI(params)
      .then(response => {
        console.log(response.matches.reverse());
        this.setState({
          matches:
            currentMatch ===
            this.props.competition.currentSeason.currentMatchday
              ? response.matches
              : [...this.state.matches, ...response.matches.reverse()],
          isLoading: false,
          isRefreshing: false
        });
        console.log("Lenght = ",this.state.matches.length)
      })
      .catch(error => {
        throw error;
      });
  };

  viewStatus(status) {
    switch (status) {
      case "FINISHED": {
        return (
          <View style={styles.centerChildRow}>
            <Text style={{ color: "white", fontSize: 10 }}>FINISHED</Text>
            <View style={[styles.matchStatus, styles.matchFinished]} />
          </View>
        );
      }
      case "SCHEDULED": {
        return (
          <View style={styles.centerChildRow}>
            <Text style={{ color: "white", fontSize: 10 }}>SCHEDULED</Text>
            <View style={[styles.matchStatus, styles.matchStatusScheduled]} />
          </View>
        );
      }
      case "IN_PLAY": {
        return (
          <View style={styles.centerChildRow}>
            <Text style={{ color: "white", fontSize: 10 }}>LIVE</Text>
            <View style={[styles.matchStatus, styles.matchStatusLive]} />
          </View>
        );
      }
    }
  }

  viewScore(item) {
    if (item.score.fullTime.homeTeam > item.score.fullTime.awayTeam) {
      return (
        <View style={styles.scoreView}>
          <View style={[styles.scoreHomeView, styles.scoreWinColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {item.score.fullTime.homeTeam}
            </Text>
          </View>
          <View style={[styles.scoreAwayView, styles.scoreLoseColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {item.score.fullTime.awayTeam}
            </Text>
          </View>
        </View>
      );
    } else if (item.score.fullTime.homeTeam < item.score.fullTime.awayTeam) {
      return (
        <View style={styles.scoreView}>
          <View style={[styles.scoreHomeView, styles.scoreLoseColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {item.score.fullTime.homeTeam}
            </Text>
          </View>
          <View style={[styles.scoreAwayView, styles.scoreWinColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {item.score.fullTime.awayTeam}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.scoreView}>
          <View style={[styles.scoreHomeView, styles.scoreWinColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {item.score.fullTime.homeTeam}
            </Text>
          </View>
          <View style={[styles.scoreAwayView, styles.scoreWinColor]}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {item.score.fullTime.awayTeam}
            </Text>
          </View>
        </View>
      );
    }
  }

  componentDidUpdate() {}

  componentWillMount() {}

  componentWillUnmount() {}

  keyExtractor = (item, index) => item.id.toString();

  renderItem = ({ item }) => {
    const homeWin =
      item.score.fullTime.homeTeam > item.score.fullTime.awayTeam
        ? true
        : false;

    return (
      <View
        style={{
          height: 120,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 5,
          borderRadius: 15,
          padding: 5
        }}
      >
        <View style={styles.matchItem}>
          <View style={styles.centerChildColumn}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{
                uri:
                  "https://clipart.info/images/ccovers/1503438022arsenal-fc-logo-png.png"
              }}
            />
            <Text style={{ color: "white", marginTop: 10 }}>
              {item.homeTeam.name}
            </Text>
          </View>
          <View style={styles.centerChildColumn}>
            {this.viewScore(item)}
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center"
              }}
            >
              {this.viewStatus(item.status)}
            </View>
            <View />
          </View>
          <View style={styles.centerChild}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{
                uri:
                  "https://clipart.info/images/ccovers/1503438022arsenal-fc-logo-png.png"
              }}
            />
            <Text style={{ color: "white", marginTop: 7 }}>
              {item.awayTeam.name}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  handleRefresh = () => {
    console.log("handleRefresh");
    console.log(
      this.props.competition.currentSeason.currentMatchday
    );
    this.setState(
      {
        currentMatch: this.props.competition.currentSeason
          .currentMatchday,
        isRefreshing: true
      },
      () => this.makeRemoteRefresh()
    );
  };

  handleLoadMore = () => {
    console.log("handleLoadMore");
    if (this.state.currentMatch > 1) {
      this.setState(
        {
          currentMatch: this.state.currentMatch - 1
        },
        () => {
          this.makeRemoteRefresh();
        }
      );
    }
  };

  renderFooter = () => {
  if (!this.state.isLoading) return (<View style={{ height: 50 }} />);
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[styles.centerChild, styles.primaryDarkColor]}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.primaryDarkColor}>
        <FlatList
          data={this.state.matches}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.isRefreshing}
          onEndReachedThreshold={0.5}
          onEndReached={this.handleLoadMore}
        />
      </View>
    );
  }
}

function mapStateToProps(state){
  console.log('state/mapstate : ', state);
  return {
    competition: state.wcResult
  }
}

export default connect(mapStateToProps)(Match)