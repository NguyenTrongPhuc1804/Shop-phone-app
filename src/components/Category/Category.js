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
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
            color: COLOR.second,
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
                marginRight: 8,
                borderRadius: 20,
                marginBottom: 10,
                flexDirection: 'column',
                padding: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#739072',
                width: 80,
                height: 90,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}>
              <View style={{width: 60, height: 60}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: '100%',
                    height: '100%',
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
                  color: COLOR.second,
                  marginTop: 5,
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
