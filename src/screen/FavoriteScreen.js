import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CartProduct from '../components/CardProduct/CartProduct';
import BoxSlide from '../components/BoxSlide';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useState} from 'react';
import {getAllProduct} from '../redux/slices/productSlice';

const FavoriteScreen = () => {
  const dispatch = useDispatch();
  const {allProduct} = useSelector(state => state.productSlice);
  const {favoriteItem} = useSelector(state => state.favoriteSlice);
  const [items, setItems] = useState([]);
  console.log(favoriteItem, 'favoriteItem');
  console.log(allProduct, 'allProduct');
  useEffect(() => {
    let itemFavorite = allProduct?.filter(item =>
      favoriteItem.includes(item.id),
    );
    setItems(itemFavorite);
  }, [favoriteItem]);

  return (
    <View style={{paddingHorizontal: 10}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={items}
        renderItem={({item}) => <CartProduct item={item} />}
      />
    </View>
  );
};

export default FavoriteScreen;
