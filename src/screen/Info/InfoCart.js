import {View, Text} from 'react-native';
import React from 'react';
import InputCus from '../../components/Input/InputCus';
import CheckCart from '../../components/CheckCart/CheckCart';
import ProgressBarShip from '../../components/ProgressBarShip';
import {COLOR} from '../../constant/color';
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
const InfoCart = () => {
  return (
    <View>
      <View style={{paddingHorizontal: 60, marginTop: 20}}>
        <InputCus title="Nhập mã đơn hàng" placeholder="Nhập mã đơn hàng" />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 20,
            color: COLOR.black,
          }}>
          Đơn hàng của bạn
        </Text>
        <CheckCart item={imgList[0]} />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 20,
            color: COLOR.black,
          }}>
          Tình trạng đơn hàng
        </Text>
        <ProgressBarShip />
      </View>
    </View>
  );
};

export default InfoCart;
