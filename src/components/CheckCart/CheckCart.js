import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import RatingCus from '../Rating';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../constant/color';

const CheckCart = ({item, cart}) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate.navigate('ProductDetail', {id: item.id});
      }}
      style={{
        marginBottom: 10,
        width: cart ? '100%' : 300,
        backgroundColor: COLOR.second,
        flexDirection: 'row',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        marginRight: 10,
      }}>
      <Image
        resizeMode="contain"
        style={{
          flex: 1.5,
          borderRadius: 10,
        }}
        source={{uri: item.image}}
      />
      <View
        style={{
          flex: 2,
          paddingLeft: 10,
          justifyContent: 'center',
          color: COLOR.black,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 6,
            color: COLOR.black,
          }}
          numberOfLines={1}>
          {item.name}
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 16,
            marginBottom: 6,
            color: COLOR.black,
          }}
          numberOfLines={1}>
          {item.summary}
        </Text>
        {!cart ? (
          <Text numberOfLines={1}>
            <RatingCus color={COLOR.second} rating={item.rating} />
          </Text>
        ) : (
          ''
        )}

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'red',
            marginBottom: 6,
          }}
          numberOfLines={1}>
          {item.price.toLocaleString()} VND
        </Text>
      </View>
      {cart ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: COLOR.third,
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: COLOR.second}}>
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: COLOR.black,
              fontSize: 20,
              marginHorizontal: 5,
              fontWeight: 'bold',
            }}>
            10
          </Text>
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: COLOR.third,
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: COLOR.second}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </TouchableOpacity>
  );
};

export default CheckCart;
