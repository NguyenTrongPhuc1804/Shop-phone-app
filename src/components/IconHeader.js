import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../constant/color';
import {useNavigation} from '@react-navigation/native';

const IconHeader = ({name = 'menu', onPress}) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (name === 'menu') {
          navigate.toggleDrawer();
        } else {
          onPress();
        }
      }}>
      <Text>
        <Ionicons name={name} size={28} color={COLOR.primary} />;
      </Text>
    </TouchableOpacity>
  );
};

export default IconHeader;
