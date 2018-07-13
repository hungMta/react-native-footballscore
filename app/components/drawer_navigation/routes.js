import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import SideMenuWC from "./SideMenuWorldCup";
import HomeStack from "./HomeStack"
import CompetitionStack from "./WCCompetitionStack"

export default createDrawerNavigator(
  {
    Home: {
      screen: HomeStack
    },
    CompetitionScreen: {
      screen: CompetitionStack
    },
    WorldCup: {
      screen: CompetitionStack
    }
  },
  {
    contentComponent: SideMenuWC,
    drawerWidth: 300
  }
);



