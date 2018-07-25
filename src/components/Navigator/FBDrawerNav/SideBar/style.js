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
  backgroundPickerDialog: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    opacity: 0.3,
    position: "absolute"
  },
  pickerDialogContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute"
  },
  pickerButton: {
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  pickerButtonMargin: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 1
  }
};
