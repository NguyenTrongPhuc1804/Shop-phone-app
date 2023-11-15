import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';
import {showNoti, showToast} from '../../toolkit/helper';

const initialState = {
  userToken: '',
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      AsyncStorage.removeItem('access_token');
      state.isLogin = false;
      state.userToken = '';
      showNoti('Đăng xuất thành công', 'success');
    },
  },
  extraReducers: builder => {
    builder.addCase(loginSetUser.fulfilled, (state, action) => {
      const {access_token} = action.payload;
      AsyncStorage.setItem('access_token', access_token);
      state.userToken = access_token;
      state.isLogin = true;
    });
  },
});
export const loginSetUser = createAsyncThunk(
  'auth/loginSetUser',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.post('auth/login', payload);
    console.log(data, 'login');
    return data;
  },
);

export const {logout} = authSlice.actions;

export default authSlice.reducer;
