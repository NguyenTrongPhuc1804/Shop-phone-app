import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import authSlice from './slices/authSlice';
import categorySlice from './slices/categorySlice';
import favoriteSlice from './slices/favoriteSlice';
import filterSlice from './slices/filterSlice';
import productSlice from './slices/productSlice';
import sliderSlice from './slices/sliderSlice';
import userSlice from './slices/userSlice';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authSlice', 'favoriteSlice'],
};
const rootReducer = combineReducers({
  sliderSlice,
  categorySlice,
  productSlice,
  filterSlice,
  favoriteSlice,
  authSlice,
  userSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
