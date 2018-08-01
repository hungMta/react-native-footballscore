import constants from "../../../../constants/variable";
export default {
  centerChild: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  primaryDarkColor: {
    backgroundColor: constants.primaryDarkColor
  },
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
    backgroundColor: constants.primaryColor,
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
  newsItem: {
    height: 120,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20
  },
  headerTitle: {
    flexWrap: "wrap",
    color: "white",
    fontWeight: "bold"
  },
  title: {
    flexWrap: "wrap",
    color: "white"
  },
  readMore: {
    color: "white",
    fontSize: 10
  },
  newsTextStyle: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 10
  },
  newsImage: {
    width: "100%",
    height: 120
  },
  swiperItem: {
    height: 200,
    backgroundColor: "#F5FCFF",
    position: "relative"
  },
  swiperContainer: {
    width: "100%",
    height: 200
  },

};
