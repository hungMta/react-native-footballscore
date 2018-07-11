export default {
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
    backgroundColor: "#FFA000"
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
  scrollHomeView:{
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
  colorWrapper:{
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    opacity: 0.3
  }
};
