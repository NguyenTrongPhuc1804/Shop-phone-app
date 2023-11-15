import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import {COLOR} from '../constant/color';
import ProductInCategoryScreen from '../screen/ProductInCategoryScreen';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();
const HomeNavigation = () => {
  const navigate = useNavigation();
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Giỏ hàng',
          headerTintColor: COLOR.primary,
          header: () => (
            <Header
              title="Trang chủ"
              onPress={() => {
                navigate.navigate('CartScreen');
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProductInCategoryScreen"
        component={ProductInCategoryScreen}
        options={({route}) => ({
          headerShown: true,
          title: `Danh mục ${route.params.name}`,
          headerTintColor: COLOR.primary,
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => {
                navigate.navigate('FilterScreen');
              }}>
              <Text>
                <Ionicons name={'filter'} size={32} color={COLOR.primary} />;
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
