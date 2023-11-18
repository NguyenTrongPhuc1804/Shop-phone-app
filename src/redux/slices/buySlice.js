import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';
import {showNoti} from '../../toolkit/helper';

const initialState = {
  bill: [],
};

export const buySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setActiveDrawer: (state, action) => {
      state.activeDrawer = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(saveCart.fulfilled, (state, action) => {
      console.log(action, '123');
      state.bill = action.payload;
    });
  },
});
export const saveCart = createAsyncThunk(
  'category/getCategory',
  async (payload, thunkApi) => {
    try {
      console.log(payload, 'payload');
      const {data} = await apiMobile.post('mobile/orders/save', payload);
      showNoti('Mua hàng thành công', 'success');
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const {setActiveDrawer} = buySlice.actions;

export default buySlice.reducer;
