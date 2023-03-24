import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Color from '../../constants/Color';
import {addTokken, keySaveTokken} from '../../store/slice/user/userSlice';
import Header from './components/Header';

const Home = () => {
  const dispatch = useDispatch<any>();
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem(keySaveTokken).then(() => {
        dispatch(addTokken({}));
      });
    } catch (e) {}
  };
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          removeValue();
        }}>
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
  touchableOpacity: {
    backgroundColor: Color.darkmagenta,
    alignSelf: 'center',
    padding: 10,
  },
  text: {
    color: 'white',
  },
});
