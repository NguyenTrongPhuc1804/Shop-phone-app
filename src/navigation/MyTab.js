import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import HomeScreen from '../screen/HomeScreen';
import CategoryScreen from '../screen/CategoryScreen';
import FavoriteScreen from '../screen/FavoriteScreen';
import InfoScreen from '../screen/Info/InfoScreen';
import {COLOR} from '../constant/color';
import {useDispatch, useSelector} from 'react-redux';
import {removeFavorite} from '../redux/slices/favoriteSlice';
import HomeNavigation from './HomeNavigation';
import {createLogicalAnd} from 'typescript';
import {setActiveDrawer} from '../redux/slices/categorySlice';
import CartScreen from '../screen/CartScreen';
const Tab = createBottomTabNavigator();

const MyTab = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {favoriteItem} = useSelector(state => state.favoriteSlice);
  const {cart, sum} = useSelector(state => state.cartSlice);

  return (
    <Tab.Navigator
      initialRouteName="Trang chủ"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Trang chủ': {
              iconName = focused ? 'home' : 'home-outline';
              break;
            }
            case 'Cửa hàng': {
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            }
            case 'Yêu thích': {
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            }
            case 'Thông tin': {
              iconName = focused ? 'person' : 'person-outline';
              break;
            }
            case 'Thông tin': {
              iconName = focused ? 'person' : 'person-outline';
              break;
            }
            case 'Giỏ hàng': {
              iconName = focused ? 'bag-handle' : 'bag-handle-outline';
              break;
            }
          }

          // You can return any component that you like here!

          return (
            <View>
              <Text>
                <Ionicons name={iconName} size={size} color={color} />;
              </Text>
              {route.name === 'Giỏ hàng' && cart.length > 0 ? (
                <Text
                  style={{
                    position: 'absolute',
                    color: 'white',
                    right: -5,
                    top: -5,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    paddingHorizontal: 6,
                    paddingVertical: 1,
                    fontSize: 12,
                  }}>
                  {sum}
                </Text>
              ) : (
                ''
              )}
            </View>
          );
        },
        tabBarActiveTintColor: COLOR.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {height: 65, paddingBottom: 8},
        tabBarLabelStyle: {fontSize: 12},
      })}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeNavigation}
        listeners={{
          tabPress: e => {
            dispatch(setActiveDrawer('Trang chủ'));
          },
        }}
        options={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cửa hàng"
        component={CategoryScreen}
        listeners={{
          tabPress: e => {
            dispatch(setActiveDrawer('Cửa hàng'));
          },
        }}
        options={{
          headerTitleAlign: 'center',
          header: () => (
            <Header
              title="Cửa hàng"
              icon="filter"
              onPress={() => {
                navigate.navigate('FilterScreen');
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Giỏ hàng"
        component={CartScreen}
        listeners={{
          tabPress: e => {
            dispatch(setActiveDrawer('Trang chủ'));
          },
        }}
        options={{
          headerShown: true,
          header: () => {
            return (
              <Header
                title="Giỏ hàng"
                icon="filter"
                onPress={() => {
                  navigate.navigate('FilterScreen');
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Yêu thích"
        component={FavoriteScreen}
        listeners={{
          tabPress: e => {
            dispatch(setActiveDrawer('Yêu thích'));
          },
        }}
        options={{
          headerTitleAlign: 'center',
          header: () => (
            <Header
              title="Yêu thích"
              icon="trash"
              onPress={() => {
                if (favoriteItem.length !== 0) {
                  Alert.alert('Thông báo', 'Bạn có chắc chắn xóa tất cả ?', [
                    {
                      text: 'Cancel',
                      onPress: () => {},
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => dispatch(removeFavorite())},
                  ]);
                } else {
                  Alert.alert(
                    'Thông báo',
                    'Bạn chưa có sản phẩm yêu thích nào',
                    [{text: 'OK', onPress: () => dispatch(removeFavorite())}],
                  );
                }
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Thông tin"
        component={InfoScreen}
        listeners={{
          tabPress: e => {
            dispatch(setActiveDrawer('Thông tin'));
          },
        }}
        options={{
          headerTitleAlign: 'center',
          header: () => (
            <Header
              title="Thông tin"
              onPress={() => {
                navigate.navigate('CartScreen');
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTab;
