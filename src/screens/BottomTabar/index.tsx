import React from 'react';
import {RouterName} from '../../navigation/RouterName';
import Home from '../Home';
import Profile from '../Profile';
import FastImage from 'react-native-fast-image';
import Icon from '../../constants/Icon';
import Color from '../../constants/Color';
import {styles} from '../Login/styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator<any>();

export const screenOptions = ({route}: {route: any}) => ({
  headerShown: false,
  tabBarActiveTintColor: Color.primary,
  tabBarInactiveTintColor: Color.Darkgray,
  tabBarIcon: ({focused}: {focused: any}) => {
    return (
      <FastImage
        source={
          route.name === RouterName.Home
            ? Icon.home
            : route.name === RouterName.Profile
            ? Icon.profile
            : ''
        }
        tintColor={focused ? Color.primary : Color.Darkgray}
        style={styles.icons}
      />
    );
  },
});

const BottomTabar = () => {
  return (
    <Tab.Navigator
      // tabBar={props => <MyTabBar {...props} />}
      screenOptions={screenOptions}>
      <Tab.Screen name={RouterName.Home} component={Home} />
      <Tab.Screen name={RouterName.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabar;
