import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Login from '../screens/Login';
import {RootState} from '../store';
import {addTokken, keySaveTokken} from '../store/slice/user/userSlice';
import {RouterName} from './RouterName';
import RNBootSplash from 'react-native-bootsplash';
import Register from '../screens/Register';
import BottomTabar from '../screens/BottomTabar';
import CreateTask from '../screens/CreateTask';

const Stack = createNativeStackNavigator<any>();

const Application = () => {
  const dispatch = useDispatch<any>();
  const {Tokken} = useSelector((state: RootState) => state?.user);
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(keySaveTokken);
        jsonValue != null ? dispatch(addTokken(JSON.parse(jsonValue))) : null;
      } catch (e) {
        // error reading value
      }
    };

    getData();
  }, [dispatch]);
  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide();
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* {Object.keys(Tokken).length !== 0 ? (
          <>
            <Stack.Screen
              name={RouterName.BottomTabar}
              component={BottomTabar}
            />
            <Stack.Group screenOptions={{presentation: 'modal'}}>
              <Stack.Screen
                name={RouterName.CreateTask}
                component={CreateTask}
              />
            </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Screen name={RouterName.Login} component={Login} />
            <Stack.Screen name={RouterName.Register} component={Register} />
          </>
        )} */}
        <Stack.Screen name={RouterName.BottomTabar} component={BottomTabar} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name={RouterName.CreateTask} component={CreateTask} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Application;
