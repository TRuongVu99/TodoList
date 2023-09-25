import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Icon from '../../../constants/Icon';
import FontSize from '../../../constants/FontSize';
import FontFamily from '../../../constants/FontFamily';

const Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity style={styles.menu}>
        <FastImage
          source={Icon.menu}
          style={styles.iconMenu}
          tintColor={'white'}
        />
      </TouchableOpacity>
      <Text style={styles.label}>Schedule</Text>
      <TouchableOpacity>
        <FastImage source={Icon.user} style={styles.iconUser} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  iconMenu: {width: 15, height: 15, margin: 10},
  iconUser: {width: 40, height: 40, marginBottom: 10},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  label: {
    fontSize: FontSize.h3,
    fontFamily: FontFamily.MontserratAlternatesMedium,
    color: 'white',
  },
  menu: {
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: 'white',
  },
});
