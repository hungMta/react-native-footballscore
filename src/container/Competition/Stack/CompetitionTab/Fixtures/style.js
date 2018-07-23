import { StyleSheet } from "react-native";
import constants from "../../../../../constants/variable";

export default {
  container: {
    backgroundColor: constants.primaryColor,
    padding: 5,
    flex: 1
  },
  header: {
    height: 200,
    backgroundColor: constants.primaryDarkColor,
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    height: 100,
    width: 100,
    marginTop: 20,
    marginBottom: 20
  },
  listItemContainer: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: constants.primaryColor
  },
  itemContanier: {
    height: 45,
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: constants.primaryColor,
    flexDirection: "row"
  },
  primaryColor: {
    backgroundColor: constants.primaryColor
  },
  flex_1: {
    flex: 1
  },
  flex_2: {
    flex: 2
  },
  flex_3: {
    flex: 3
  },
  centerItem: {
    alignItems: "center",
    justifyContent: "center"
  },
  logoTeamSize: {
    width: 65,
    height: 65,
    marginTop: 15
  },
  drawerImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  flatItem: {
    height: 100,
    flex: 0.5,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  centerChild: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  centerChildColumn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  centerChildRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  primaryDarkColor: {
    backgroundColor: "#334562"
  },
  primaryLightColor: {
    color: "#3F5F8F"
  },
  navItemStyle: {
    padding: 10,
    color: "white",
    marginLeft: 20
  },
  navSectionStyle: {
    height: 50,
    alignItems: "center",
    flexDirection: "row"
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: "lightgrey"
  },
  centerVertical: {
    flexDirection: "row",
    alignItems: "center"
  },
  centerHorizontal: {
    flexDirection: "column",
    alignItems: "center"
  },
  headerHeight: {
    height: 150
  },
  scoreHomeView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  scoreAwayView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  scoreView: {
    width: "75%",
    height: 40,
    borderRadius: 5,
    flexDirection: "row"
  },
  scoreWinColor: {
    backgroundColor: "green"
  },
  scoreLoseColor: {
    backgroundColor: "tomato"
  },
  matchItem: {
    flex: 1,
    backgroundColor: "#3b5072",
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.5
  },
  matchStatus: {
    height: 10,
    width: 10,
    borderRadius: 50,
    marginLeft: 5
  },
  matchFinished: {
    backgroundColor: "#FF3D00"
  },
  matchStatusLive: {
    backgroundColor: "#76FF03"
  },
  matchStatusScheduled: { backgroundColor: "#FFA000" },
  myActiveDot: {
    backgroundColor: "white",
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  myDot: {
    backgroundColor: "#9E9E9E",
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  scrollHomeView: {
    height: "100%",
    backgroundColor: "#334562",
    paddingTop: 10,
    paddingBottom: 20
  },
  swiperTitle: {
    position: "absolute",
    color: "white",
    bottom: 20,
    right: 5,
    left: 5,
    flexWrap: "wrap",
    fontWeight: "bold",
    fontSize: 20
  },
  colorWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    opacity: 0.3
  },
  itemWrapper: {
    height: 150,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 15,
    padding: 5
  },
  labelTeamName: {
    color: "white",
    textAlign: "center"
  },
  viewStatus: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center"
  },
  statusStyle: { color: "white", fontSize: 10 }
};
