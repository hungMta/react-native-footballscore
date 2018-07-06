import Page1 from '../screen/Page1';
import Page2 from '../screen/Page2';
import Page3 from '../screen/Page3';
import HomeScreen from '../screen/homescreen/HomeScreen';
import CompetitionScreen from '../screen/competition/CompetitionScreen';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import SideMenu from './SideMenu'
import SideMenuWC from './SideMenuWorldCup'
import WCC from '../screen/competition/WoldCupCompetition'
import WCNavigator from '../screen/myTabNavigator/MyTabNavigator'

export default createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  CompetitionScreen: {
    screen: CompetitionScreen
  },
  WorldCup: {
    screen: WCC
  }
},{
  contentComponent: SideMenuWC,
  drawerWidth: 300
});
