import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import IconHeader from './IconHeader';
import BoxSearch from './BoxSearch';
import {COLOR} from '../constant/color';

const Header = ({icon, title, onPress}) => {
  let iconRight = 'cart-outline';
  switch (icon) {
    case 'sort':
      iconRight = 'sort';
      break;
    case 'trash':
      iconRight = 'trash-bin-outline';
      break;
    case 'person-outline':
      iconRight = 'person';
      break;
    case 'filter':
      iconRight = 'filter';
      break;
    default:
      break;
  }
  return (
    <View style={{width: '100%', paddingTop: 20, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <IconHeader />
        <Text style={{fontSize: 22, color: COLOR.primary, fontWeight: '700'}}>
          {title}
        </Text>
        <IconHeader name={iconRight} onPress={onPress} />
      </View>
      <View>
        <BoxSearch />
      </View>
    </View>
  );
};

export default Header;
