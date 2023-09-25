import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import Color from '../../constants/Color';
import FontFamily from '../../constants/FontFamily';
import FontSize from '../../constants/FontSize';
import Header from './components/Header';

const Home = () => {
  // const dispatch = useDispatch<any>();
  // const navigation = useNavigation<any>();
  // const removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem(keySaveTokken).then(() => {
  //       dispatch(addTokken({}));
  //     });
  //   } catch (e) {}
  // };
  const [state, setState] = useState<any>();
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.5, y: 0.5}}
        end={{x: 1, y: 0}}
        colors={[Color.primary, Color.orange]}
        style={styles.container}>
        <Header />
        {/* <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          removeValue();
        }}>
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity> */}
        {/* <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          navigation.navigate(RouterName.CreateTask);
        }}>
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity> */}
        <View style={styles.body}>
          <Text style={styles.text}>Hi Trường Vũ!</Text>
          <Text style={styles.text2}>Good Morning</Text>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.touch}>
              <Text>Tast List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch2}>
              <Text>Completed</Text>
            </TouchableOpacity>
          </View>
          <Progress.Pie
            progress={0.4}
            size={100}
            unfilledColor={Color.primaryBlue}
            color={Color.primaryPink}
            indeterminate={true}
            fill={Color.backgroundBlue}
          />
        </View>
      </LinearGradient>
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
    fontFamily: FontFamily.MontserratAlternatesExtraBold,
    fontWeight: 'bold',
    fontSize: FontSize.h2,
  },
  text2: {
    color: 'white',
  },
  body: {
    marginHorizontal: 15,
  },
  view1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: 'space-around',
  },
  touch: {
    backgroundColor: 'red',
    paddingHorizontal: 50,
  },
});
