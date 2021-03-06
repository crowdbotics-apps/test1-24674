import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings208688Navigator from '../features/Settings208688/navigator';
import Settings208668Navigator from '../features/Settings208668/navigator';
import Settings208649Navigator from '../features/Settings208649/navigator';
import Settings208611Navigator from '../features/Settings208611/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings208688: { screen: Settings208688Navigator },
Settings208668: { screen: Settings208668Navigator },
Settings208649: { screen: Settings208649Navigator },
Settings208611: { screen: Settings208611Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
