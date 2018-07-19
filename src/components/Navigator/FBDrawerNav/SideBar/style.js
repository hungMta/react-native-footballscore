import { StyleSheet } from "react-native";
import constants from "../../../../constants/variable";

export default {
  header: {
    height: 200,
    backgroundColor: constants.primaryDarkColor,
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    height: 100,
    width: 100,
    backgroundColor: "white"
  },
  listItemContainer: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: constants.primaryColor
  },
  itemContanier: {
    height: 45,
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: constants.primaryColor,
    flexDirection: 'row',
  },
  primaryColor:{
    backgroundColor: constants.primaryColor
  },
  flex_1:{
    flex: 1,
  }
};
