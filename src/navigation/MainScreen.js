import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyTab from './MyTab';
import InfoShip from '../screen/Info/InfoShip';
import {COLOR} from '../constant/color';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import BoxSearch from '../components/BoxSearch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductDetail from '../screen/ProductDetail';
import InfoCart from '../screen/Info/InfoCart';
import FilterScreen from '../screen/FilterScreen';
import CartScreen from '../screen/CartScreen';
import BuyScreen from '../screen/BuyScreen';
import Login from '../screen/Login';
import SearchScreen from '../screen/SearchScreen';
const {height, width} = Dimensions.get('window');
const Stack = createStackNavigator();
const MainScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyTab" component={MyTab} options={{}} />
      <Stack.Screen
        name="InfoShip"
        component={InfoShip}
        options={{
          headerShown: true,
          title: 'Thông tin giao hàng',
          headerTintColor: COLOR.primary,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <BoxSearch />
              <TouchableOpacity>
                <Ionicons
                  name={'cart-outline'}
                  size={32}
                  color={COLOR.primary}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <View style={{}}></View>,
        }}
      />
      <Stack.Screen
        name="InfoCart"
        component={InfoCart}
        options={{
          headerShown: true,
          title: 'Thông tin giao hàng',
          headerTintColor: COLOR.primary,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <BoxSearch />
              <TouchableOpacity>
                <Ionicons
                  name={'cart-outline'}
                  size={32}
                  color={COLOR.primary}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <View style={{}}></View>,
        }}
      />
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{
          headerShown: true,
          title: 'Thông tin giao hàng',
          headerTintColor: COLOR.primary,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <BoxSearch />
              <TouchableOpacity>
                <Ionicons
                  name={'cart-outline'}
                  size={32}
                  color={COLOR.primary}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <View style={{}}></View>,
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: true,
          title: 'Giỏ hàng',
          headerTintColor: COLOR.primary,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: 'Giỏ hàng',
          headerTintColor: COLOR.primary,
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: true,
          title: 'Giỏ hàng',
          headerTintColor: COLOR.primary,
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              <BoxSearch />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BuyScreen"
        component={BuyScreen}
        options={{
          headerShown: true,
          title: 'Xác nhận đơn hàng',
          headerTintColor: COLOR.primary,
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: true,
          headerTintColor: COLOR.second,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLOR.primary,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitle: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <BoxSearch />
              <TouchableOpacity>
                <Ionicons
                  name={'cart-outline'}
                  size={32}
                  color={COLOR.second}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <View style={{}}></View>,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainScreen;
