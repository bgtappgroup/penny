import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
//AppScreens Names
import DashBoard from './AppScreens/DashBoard';
import AnalyticsScreen from './AppScreens/AnalyticsScreen';
import SettingsScreen from './AppScreens/SettingsScreen';
import CloudComponent from './AppScreens/CloudComponent';
import TransactionScreen from './AppScreens/TransactionScreen';
//Navigation Drawer Names
import { Home, Info ,Cloud, Settings, Transactions } from './screenNames';
var {width} = Dimensions.get('window');
let routeConfigs = {
    Home: {
        path: '/',
        screen: DashBoard,
    },
    Info: {
        screen: AnalyticsScreen,
    },
    Cloud: {
        screen: CloudComponent,
    },
    Settings: {
        screen: SettingsScreen,
    },
    Transactions: {
        screen: TransactionScreen,
    }
};
let drawerNavigatorConfig = {    
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',  
    drawerBackgroundColor: '#323232',
    contentOptions: {
        activeTintColor: '#4567e2',
        inactiveTintColor: 'white',
    },
    order: [Home, Info , Cloud, Settings, Transactions]
};
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);  