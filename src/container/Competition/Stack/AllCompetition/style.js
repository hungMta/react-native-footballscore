import { StyleSheet } from "react-native";
import constants from "../../../../constants/variable";

export default {
  container: {
    backgroundColor: constants.primaryColor,
    padding: 5,
    flex: 1
  },
  centerChild: {
    alignItems: "center", justifyContent: "center" 
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
  drawerImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  flatItem: {
    height: 100,
    flex: 0.5,
    backgroundColor: "#717182",
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  itemStyle: {
    backgroundColor: "#717182",
    opacity: 0.5
  },
  hexagon: {
    width: 100,
    height: 55
  },
  hexagonInner: {
    width: 100,
    height: 55,
    backgroundColor: "#717182"
  },

  hexagonAfter: {
    position: "absolute",
    bottom: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderLeftColor: "transparent",
    borderRightWidth: 50,
    borderRightColor: "transparent",
    borderTopWidth: 25,
    borderTopColor: "#717182"
  },
  hexagonBefore: {
    position: "absolute",
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderLeftColor: "transparent",
    borderRightWidth: 50,
    borderRightColor: "transparent",
    borderBottomWidth: 25,
    borderBottomColor: "#717182"
  },
  caption: {
    color: "white",
    paddingRight: 10,
    paddingLeft: 10,
    textAlign: "center"
  }
};
