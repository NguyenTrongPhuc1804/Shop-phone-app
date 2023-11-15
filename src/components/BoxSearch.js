import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {COLOR} from '../constant/color';
import {useNavigation, useRoute} from '@react-navigation/native';
const BoxSearch = () => {
  const navigate = useNavigation();
  const route = useRoute();
  const [search, setSearch] = useState(route.params?.keyword || '');

  const updateSearch = search => {
    setSearch(search);
  };
  return (
    <View style={{width: '100%'}}>
      <SearchBar
        onSubmitEditing={() => {
          navigate.navigate('SearchScreen', {keyword: search});
        }}
        lightTheme
        placeholder="Tìm kiếm ..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={{
          width: '100%',
          paddingHorizontal: 20,
          borderColor: 'white',
          backgroundColor: 'transparent',
          borderBottomWidth: 0,
        }}
        inputContainerStyle={{
          borderRadius: 20,
          backgroundColor: COLOR.grey,
        }}
      />
    </View>
  );
};

export default BoxSearch;
