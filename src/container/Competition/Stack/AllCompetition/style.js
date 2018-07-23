import { StyleSheet } from "react-native";
import constants from "../../../../constants/variable";

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
  }
};
