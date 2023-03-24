import {StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import FontFamily from '../../constants/FontFamily';
import FontSize from '../../constants/FontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    margin: 50,
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
  TODOLIST: {
    fontSize: FontSize.h3,
    marginTop: 140,
    fontFamily: FontFamily.PoppinsSemiBold,
  },
  touch: {
    backgroundColor: Color.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 30,
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
    flex: 0.55,
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
  GO: {
    position: 'absolute',
    backgroundColor: Color.primary,
    paddingHorizontal: 30,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 8,
  },
  textGO: {
    color: 'white',
    fontFamily: FontFamily.PoppinsSemiBold,
    fontSize: FontSize.h4 * 0.9,
  },
  text: {
    fontFamily: FontFamily.MontserratAlternatesMedium,
    color: Color.DimGray,
  },
  text2: {
    fontSize: FontSize.h6 * 1.1,
    marginBottom: 10,
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
    backgroundColor: Color.darkmagenta,
    width: 200,
    marginTop: 15,
    paddingVertical: 17,
    borderRadius: 80,
  },
  backgroundAppleID: {backgroundColor: Color.brown},
  textRegister: {
    fontFamily: FontFamily.PoppinsMedium,
    color: 'white',
    marginLeft: 5,
  },
  showPassword: {position: 'absolute', left: 210, marginVertical: 15},
});
