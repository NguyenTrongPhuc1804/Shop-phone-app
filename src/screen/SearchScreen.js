import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getSearchProduct} from '../redux/slices/productSlice';
import CartProduct from '../components/CardProduct/CartProduct';
import {COLOR} from '../constant/color';
import imageSearch from '../assets/Searching.png';
import {useState} from 'react';
import SkeletonSearch from '../common/skeleton/SkeletonSearch';
const {height} = Dimensions.get('window');
const SearchScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const {keyword} = route.params;
  const {listSearchProduct} = useSelector(state => state.productSlice);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getSearchProduct(keyword)).then(res => {
      if (!res.error) {
        setLoading(false);
      } else {
        console.log(res.error);
      }
    });
  }, [listSearchProduct]);
  if (loading) {
    return <SkeletonSearch />;
  } else {
    return (
      <View
        style={{
          paddingVertical: 10,
          backgroundColor: COLOR.second,
          height: height,
          justifyContent: 'center',
        }}>
        {listSearchProduct?.length == 0 ? (
          <View>
            <Image style={{width: '100%', height: 200}} source={imageSearch} />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: COLOR.third,
                textAlign: 'center',
              }}>
              Rất tiếc không tìm thấy sản phẩm nào !!
            </Text>
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLOR.black,
                  padding: 20,
                }}>
                Có {listSearchProduct?.length} sản phẩm tìm kiếm : {keyword}
              </Text>
            }
            columnWrapperStyle={{paddingHorizontal: 10}}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={listSearchProduct}
            renderItem={({item}) => <CartProduct item={item} />}
          />
        )}
      </View>
    );
  }
};

export default SearchScreen;
