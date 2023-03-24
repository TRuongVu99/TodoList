import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Icon from '../../../constants/Icon';

const Header = () => {
  return (
    <SafeAreaView>
      <FastImage source={Icon.menu} style={{width: 28, height: 28}} />
      <Text>Hi, Trường Vũ</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
