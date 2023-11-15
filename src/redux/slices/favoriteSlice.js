import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';

const initialState = {
  favoriteItem: [],
};

export const favoriteSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      let index = state.favoriteItem.findIndex(item => item === action.payload);
      if (index !== -1) {
        state.favoriteItem = [...state.favoriteItem].filter(
          item => item != action.payload,
        );
      } else {
        state.favoriteItem = [...state.favoriteItem, action.payload];
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteItem = [];
    },
  },
});

export const {setFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
