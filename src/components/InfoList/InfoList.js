import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../constant/color';
import {useNavigation} from '@react-navigation/native';

const InfoList = ({name, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: COLOR.primary,
        paddingVertical: 20,
      }}>
      <FontAwesome5 name={name} size={30} color={COLOR.primary} />
      <Text style={{fontSize: 18, fontWeight: 'bold', color: COLOR.black}}>
        Thông tin giao hàng
      </Text>
      <Ionicons name={'chevron-forward'} size={34} color={COLOR.primary} />
    </TouchableOpacity>
  );
};

export default InfoList;
