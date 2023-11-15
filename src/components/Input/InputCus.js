import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../constant/color';

const InputCus = ({password, title, placeholder, onChange, value}) => {
  const [eye, setEye] = useState(true);
  return (
    <View style={{marginBottom: 10, position: 'relative', width: '100%'}}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 16,
          color: 'black',
          fontWeight: '600',
        }}>
        {title}
      </Text>
      <TextInput
        style={{
          width: '100%',
          height: 54,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: COLOR.primary,
          backgroundColor: '#F1F4FF',
          padding: 10,
          marginBottom: 18,
          fontSize: 16,
          color: COLOR.black,
        }}
        placeholderTextColor={COLOR.gray}
        value={value}
        secureTextEntry={password ? eye : false}
        placeholder={placeholder}
        onChangeText={value => onChange(value)}
      />
      {password ? (
        <TouchableOpacity
          onPress={() => {
            setEye(!eye);
          }}
          style={{position: 'absolute', bottom: 34, right: 10}}>
          <Ionicons name={eye ? 'eye-off' : 'eye'} size={24} color={'black'} />
        </TouchableOpacity>
      ) : (
        ''
      )}
    </View>
  );
};

export default InputCus;
