import {View, Text} from 'react-native';
import React from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../constant/color';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategory} from '../../redux/slices/categorySlice';
import SkeletonCategory from '../../common/skeleton/SeletonCategoty';

const Category = ({}) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {category, isLoading} = useSelector(state => state.categorySlice);

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  if (isLoading) {
    return <SkeletonCategory />;
  } else {
    return (
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            color: COLOR.black,
          }}>
          Tất cả danh mục
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={category}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigate.navigate('ProductInCategoryScreen', {
                  id: item.id,
                  name: item.name,
                });
              }}
              style={{
                marginRight: 5,
                borderRadius: 20,
                flexDirection: 'column',
                padding: 5,
              }}>
              <View style={{width: 80, height: 80}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: '100%',
                    height: '100%',
                    marginBottom: 10,
                    borderRadius: 10,
                  }}
                  source={{uri: item.image}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  fontWeight: '600',
                  color: COLOR.black,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};

export default Category;
