import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import CheckCart from '../components/CheckCart/CheckCart';
import {COLOR} from '../constant/color';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import EmptyCart from '../common/EmptyCart/EmptyCart';

const {height, width} = Dimensions.get('window');
const CartScreen = () => {
  const navigate = useNavigation();
  const {cart} = useSelector(state => state.cartSlice);
  useEffect(() => {}, [cart.length]);
  if (cart.length <= 0) {
    return <EmptyCart />;
  }
  return (
    <View
      style={{
        height: '100%',
        width: width,
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>
      <FlatList
        data={cart}
        renderItem={({item}) => <CheckCart item={item} cart />}
        keyExtractor={item => item.id}
      />
      <View style={{bottom: 10, width: '100%'}}>
        <TouchableOpacity
          onPress={() => {
            navigate.navigate('BuyScreen');
          }}
          style={{
            width: '100%',
            padding: 10,
            backgroundColor: COLOR.third,
            borderRadius: 10,
          }}>
          {cart.length <= 0 ? (
            ''
          ) : (
            <Text
              style={{
                fontSize: 18,
                color: COLOR.second,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Thanh toán
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
