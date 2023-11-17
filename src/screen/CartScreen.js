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
const imgList = [
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 10000000,
    id: 1,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 10000000,
    id: 1,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 10000000,
    id: 1,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 2,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 3,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 4,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 5,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
const {height, width} = Dimensions.get('window');
const CartScreen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cartSlice);
  console.log(cart);
  // if (cart?.length <= 0) {
  //   return <EmptyCart />;
  // }
  useEffect(() => {
    // dispatch(getAllProduct());
  }, []);

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
            padding: 15,
            backgroundColor: COLOR.third,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: COLOR.second,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Thanh toán
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
