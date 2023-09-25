import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Alert} from 'react-native';
export interface IUser {
  profileUser: {
    userName?: string | undefined;
    numberPhone?: string | undefined;
    UserId?: string | undefined;
    avatar?: string | undefined;
  };
  Tokken: {
    accessToken?: string;
  };
  SignUpSuccess: boolean;
}
const initialState: IUser = {
  profileUser: {},
  Tokken: {},
  SignUpSuccess: false,
};
export const keySaveTokken = 'keySaveTokken';

export const handleLogin = createAsyncThunk(
  'user/handleLogin',
  async (params: any, thunkAPI) => {
    const apiLogin = 'https://nodejsjwtauth-production.up.railway.app/auth';
    const {email, password} = params.user;

    const storeData = async (value: any) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(keySaveTokken, jsonValue);
      } catch (e) {
        // saving error
      }
    };

    const data = await axios
      .post(apiLogin, {user: email, pwd: password})
      .then((response: any) => {
        storeData(response.data);
        thunkAPI.dispatch(addTokken(response.data));

        return response.data;
      })
      .catch(() => {
        console.log('err');
        Alert.alert('Notification', 'Username or Password is incorrect');
      });

    return data;
  },
);
export const handleRegister = createAsyncThunk(
  'user/handleRegister',
  async (params: any, thunkAPI) => {
    const apiRegister =
      'https://nodejsjwtauth-production.up.railway.app/register';
    const {email, password} = params.user;
    axios
      .post(apiRegister, {user: email, pwd: password})
      .then(() => {
        thunkAPI.dispatch(setStatus(true));
        console.log('Sign Up Success');
      })
      .catch(() => {
        thunkAPI.dispatch(setStatus(false));
        console.log('The Email was registered');
      });
  },
);

export const counterSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    addTokken: (state, action) => {
      state.Tokken = action.payload;
    },
    setStatus: (state, action) => {
      state.SignUpSuccess = action.payload;
    },
    resetTokken: state => {
      state.Tokken = {};
    },
  },
  // extraReducers(builder) {
  // fulfilled
  // builder.addCase(handleLogin.fulfilled, (state: IUser, action) => {
  //   state.Tokken = action.payload;
  // });
  // rejected
  // builder.addCase(handleRegister.fulfilled, (state: IUser) => {
  //   state.SignUpSuccess = true;
  // });
  // },
});
export const {addTokken, resetTokken, setStatus} = counterSlice.actions;

export default counterSlice.reducer;
