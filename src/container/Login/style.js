import constants from "../../constants/variable";
export default {
  centerChild: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  primaryDarkColor: {
    backgroundColor: constants.primaryDarkColor
  },
  textInput: {
    width: 300,
    backgroundColor: "white",
    paddingLeft: 15,
    borderRadius: 2
  },
  btnLogin: {
    width: 150,
    height: 50,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },

  btnLoginSocial: {
    width: 200,
    height: 30,
    backgroundColor: "#2196F3",
    // justifyContent: "center",
    // flexDirection: 'row',
    // alignItems: "center",
    marginTop: 30,
    borderRadius: 15,
    position: "relative"
  },

  backgroundOpactity: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    opacity: 0.3,
    position: "absolute"
  },
  logginPopup: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "gray",
    marginTop: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    borderRadius: 10
  },
  wrapRelative: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  txtSocialPostition: {
    color: "white",
    marginTop: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    marginLeft: "auto"
  },
  iconSocicalContainer:{
    flex: 2, justifyContent: "center", marginLeft: 10 
  }
};
