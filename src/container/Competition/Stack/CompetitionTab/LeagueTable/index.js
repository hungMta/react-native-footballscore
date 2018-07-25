import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";
import styles from "./style";
import {
  getLeagueTable,
  resetLeagueTableState
} from "../../../../../store/action/leagueTable";

class LeagueTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widthArr: [40, 160, 40, 40, 40, 40, 40, 40, 40, 40],
      tableHead: ["#", "Team", "P", "Pts", "W", "D", "L", "F", "A", "GD"]
    };
  }

  componentDidMount() {
    const competition = this.props.navigation.getParam("competition", null);
    console.log("competition = ", competition);
    this.props.getLeagueTable(competition.id);
  }

  componentWillUnmount() {
    this.props.resetLeagueTableState();
  }
  navigateToScreen(route) {
    const navigationAction = NavigationActions.navigate({
      routeName: route,
      params: {
        title: "team1"
      }
    });
    this.props.navigation.dispatch(navigationAction);
  }

  formatTableData(standings) {
    const tableData = [];
    standings.map((standing, index) => {
      var element = [
        standing.position,
        [standing.crestURI, standing.teamName],
        standing.playedGames,
        standing.points,
        standing.wins,
        standing.draws,
        standing.losses,
        standing.goals,
        standing.goalsAgainst,
        standing.goalDifference
      ];
      tableData.push(element);
    });
    console.log("tabledata ", tableData);
    return tableData;
  }

  render() {
    const { leagueTable } = this.props;
    console.log("leagueTable ##################### ", leagueTable);
    if (leagueTable.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator marginTop={20} />
        </View>
      );
    }

    const state = this.state;
    var tableData = leagueTable.data.standing;
    tableData = this.formatTableData(tableData);
    const element = (data, index) => (
      <View
        style={{ flexDirection: "row", height: 50, alignItems: "center" }}
        width={100}
      >
        <Image
          style={{
            height: 30,
            width: 30,
            marginLeft: 5
          }}
          source={{
            uri: data[0] ? data[0] : ""
          }}
        />
        <Text style={{ marginLeft: 5, color: "white", flexWrap: "wrap" }}>
          {data[1]}
        </Text>
      </View>
    );
    const widthArr = state.widthArr;

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderColor: "#C1C0B9" }}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                {tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={{ flexDirection: "row" }}>
                    {Object.values(rowData).map((cellData, cellIndex) => {
                      const bg = index % 2 ? "#717182" : "#9e9eaf";
                      return (
                        <Cell
                          key={cellIndex}
                          data={
                            cellIndex === 1
                              ? element(cellData, index)
                              : cellData
                          }
                          style={{
                            width: widthArr[cellIndex],
                            backgroundColor: bg
                          }}
                          textStyle={styles.text}
                        />
                      );
                    })}
                  </TableWrapper>
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    leagueTable: state.leagueTable
  };
}

export default connect(
  mapStateToProps,
  { getLeagueTable, resetLeagueTableState }
)(LeagueTable);
