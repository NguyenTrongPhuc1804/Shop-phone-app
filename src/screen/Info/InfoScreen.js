import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import InfoList from '../../components/InfoList/InfoList';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {COLOR} from '../../constant/color';
import RequestLogin from '../../common/RequestLogin/RequestLogin';
const {height} = Dimensions.get('window');
const InfoScreen = () => {
  const navigate = useNavigation();
  const {isLogin} = useSelector(state => state.authSlice);
  const goInfoShip = () => {
    navigate.navigate('InfoShip');
  };
  const goInfoCart = () => {
    navigate.navigate('InfoCart');
  };
  if (isLogin) {
    return (
      <View style={{width: '100%', paddingHorizontal: 20}}>
        <InfoList name="address-book" onPress={goInfoShip} />
        <InfoList name="shipping-fast" onPress={goInfoCart} />
      </View>
    );
  } else {
    return (
      <View
        style={{width: '100%', height: height, backgroundColor: COLOR.second}}>
        <RequestLogin />
      </View>
    );
  }
};

export default InfoScreen;
