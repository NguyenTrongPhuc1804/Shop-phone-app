import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import InputCus from '../components/Input/InputCus';
import CartProduct from '../components/CardProduct/CartProduct';
import {COLOR} from '../constant/color';

const BuyScreen = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{height: '45%', padding: 10, borderBottomWidth: 1}}>
        {/* <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={imgList}
          renderItem={({item}) => <CartProduct item={item} detail={200} />}
          keyExtractor={item => item.id}
        /> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <Text style={styles.text}>Tổng đơn hàng :</Text>
        <Text style={styles.text}>40000</Text>
      </View>
      <View style={{paddingHorizontal: 30, marginTop: 20}}>
        <View>
          <InputCus
            title={'Mã giảm giá (nếu có)'}
            placeholder={'Mã giảm giá'}
          />
        </View>
        <View>
          <InputCus title={'Phí vận chuyển'} placeholder={'Phí vận chuyển'} />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          bottom: 10,
          position: 'absolute',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity
          style={{padding: 20, backgroundColor: COLOR.third, borderRadius: 20}}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Mua hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  label: {
    color: 'red',
  },
});
export default BuyScreen;
