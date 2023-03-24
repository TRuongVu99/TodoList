import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import Color from '../../constants/Color';
import ImageApp from '../../constants/ImageApp';
import {RouterName} from '../../navigation/RouterName';
import {handleRegister} from '../../store/slice/user/userSlice';
import {styles} from './styles';
import {RootState} from '../../store';

interface IfromInput {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().email(),
  password: yup.string().min(6, 'Password minimum 6 characters'),
});

function Register(): JSX.Element {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const [showPassword, setPassword] = useState<boolean>(true);
  const [Pwd, setPwd] = useState<string>('');
  const {SignUpSuccess} = useSelector((state: RootState) => state.user);
  const background = {
    backgroundColor: Pwd === '' ? Color.Darkgray : Color.orange,
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IfromInput>({
    resolver: yupResolver(schema),
  });
  return (
    <SafeAreaView style={styles.container}>
      <FastImage
        source={ImageApp.backgroundRegister}
        style={StyleSheet.absoluteFillObject}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <IconEntypo name={'chevron-left'} size={38} color={Color.DimGray} />
      </TouchableOpacity>
      <View style={styles.body}>
        <Text style={styles.Signin}>Register</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.viewTextInput}>
              <TextInput
                clearButtonMode={'while-editing'}
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType={'email-address'}
                placeholder="Username"
                placeholderTextColor={Color.Darkgray}
              />
            </View>
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email?.message}</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <View style={styles.viewTextInput}>
                <TextInput
                  style={[styles.input, styles.paddingRight]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={showPassword}
                  placeholder="Password"
                  placeholderTextColor={Color.Darkgray}
                />
              </View>
              <View style={styles.viewTextInput}>
                <TextInput
                  style={[styles.input, styles.paddingRight]}
                  //   onBlur={onBlur}
                  onChangeText={(text: string) => setPwd(text)}
                  secureTextEntry={showPassword}
                  placeholder="Enter the password"
                  placeholderTextColor={Color.Darkgray}
                />
                <TouchableOpacity
                  onPress={() => setPassword(!showPassword)}
                  style={styles.showPassword}>
                  <IconIonicons
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={22}
                    color={Color.Darkgray}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
      </View>

      <View style={styles.view2}>
        <TouchableOpacity
          style={[styles.Register, background]}
          disabled={Pwd !== '' ? false : true}
          onPress={handleSubmit(async (data: IfromInput) => {
            await dispatch(handleRegister({user: data})).unwrap();
            if (SignUpSuccess) {
              navigation.navigate(RouterName.Login, {
                email: data.email,
                password: data.password,
              });
            }
          })}>
          <Text style={styles.textRegister}>Register</Text>
        </TouchableOpacity>

        {/* <Text style={styles.TODOLIST}>TODOLIST</Text> */}
      </View>
    </SafeAreaView>
  );
}

export default Register;
