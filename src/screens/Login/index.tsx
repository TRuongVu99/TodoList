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
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import Color from '../../constants/Color';
import ImageApp from '../../constants/ImageApp';
import {RouterName} from '../../navigation/RouterName';
import {handleLogin} from '../../store/slice/user/userSlice';
import {styles} from './styles';

interface IfromInput {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().email(),
  password: yup.string().min(6, 'Password minimum 6 characters'),
});

function Login(): JSX.Element {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const [showPassword, setPassword] = useState<boolean>(true);

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
        source={ImageApp.backgroundLogin}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.body}>
        <Text style={styles.Signin}>Sign in</Text>
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
              <TouchableOpacity
                onPress={() => setPassword(!showPassword)}
                style={styles.showPassword}>
                <IconIonicons
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={22}
                  color={Color.Darkgray}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.GO}
                onPress={handleSubmit((data: IfromInput) => {
                  dispatch(handleLogin({user: data}));
                })}>
                <Text style={styles.textGO}>GO</Text>
              </TouchableOpacity>
            </View>
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
      </View>

      <View style={styles.view2}>
        <Text style={styles.text}>OR</Text>
        <Text style={[styles.text, styles.text2]}>Register with</Text>
        <TouchableOpacity style={[styles.Register, styles.backgroundAppleID]}>
          <IconIonicons name={'logo-apple'} size={20} color={'white'} />
          <Text style={styles.textRegister}>Apple ID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Register}
          onPress={() => {
            navigation.navigate(RouterName.Register);
          }}>
          <IconIonicons name={'ios-logo-google'} size={18} color={'white'} />
          <Text style={styles.textRegister}>Google ID</Text>
        </TouchableOpacity>

        <Text style={styles.TODOLIST}>TODOLIST</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;
