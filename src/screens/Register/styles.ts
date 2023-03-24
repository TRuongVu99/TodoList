import {StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import FontFamily from '../../constants/FontFamily';
import FontSize from '../../constants/FontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 55,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    fontFamily: FontFamily.MontserratAlternatesMedium,
    fontSize: FontSize.h5 * 1.1,
    color: Color.DimGray,
  },
  paddingRight: {paddingRight: 150},
  error: {
    paddingLeft: 30,
    fontStyle: 'italic',
    color: Color.error,
  },
  view: {
    alignItems: 'center',
  },
  view2: {
    flex: 0.5,
    alignItems: 'center',
    marginTop: 40,
  },

  login: {
    fontFamily: FontFamily.RobotoMedium,
    color: 'white',
  },
  label: {
    fontFamily: FontFamily.RobotoMedium,
    color: Color.DimGray,
    margin: 10,
  },
  Signin: {
    textAlign: 'center',
    fontFamily: FontFamily.MontserratAlternatesSemiBold,
    fontSize: FontSize.h1,
    margin: 20,
  },
  body: {
    justifyContent: 'flex-end',
    flex: 0.6,
  },
  viewTextInput: {
    marginHorizontal: 25,
    marginVertical: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 6,
    elevation: 3,
  },
  text: {
    fontFamily: FontFamily.MontserratAlternatesMedium,
    color: Color.DimGray,
  },
  text2: {
    fontSize: FontSize.h6 * 1.1,
  },
  Register: {
    shadowColor: Color.darkmagenta,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.orange,
    width: 180,
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 80,
  },
  textRegister: {
    fontFamily: FontFamily.PoppinsMedium,
    color: 'white',
    marginLeft: 5,
    fontSize: FontSize.h5,
  },
  showPassword: {position: 'absolute', right: 15, marginVertical: 15},
});
