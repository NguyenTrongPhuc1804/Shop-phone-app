import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import moment from 'moment';
import {COLOR} from '../constant/color';
import {showDialog} from '../redux/slices/commentSlice';
import {useDispatch, useSelector} from 'react-redux';

const Comment = ({
  name,
  message,
  idComment,
  listCommentChid,
  isChild,
  commentChild,
  createAt,
}) => {
  const dispatch = useDispatch();
  const {isLogin} = useSelector(state => state.authSlice);
  const {user} = useSelector(state => state.userSlice);
  return (
    <>
      <View
        style={{
          padding: 10,
          backgroundColor: COLOR.primary,
          borderRadius: 10,
          alignSelf: 'flex-start',
          marginTop: !isLogin ? 5 : 0,
          // marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 14, color: COLOR.second, fontWeight: 'bold'}}>
            {isChild ? commentChild.name : name}
          </Text>

          <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>
            lúc {moment(createAt).format('HH:mm')} ngày{' '}
            {moment(createAt).format('DD/MM')}
          </Text>
        </View>
        <Text style={{color: 'white', fontSize: 18}}>{message}</Text>
      </View>
      {isLogin ? (
        <View
          style={{
            flexDirection: 'row',
            marginTop: 0,
            paddingLeft: isChild ? 0 : 10,
            marginBottom: isChild ? 10 : 0,
          }}>
          {!isChild ? (
            <TouchableOpacity
              onPress={
                () =>
                  dispatch(
                    showDialog({
                      action: 'reply',
                      id: idComment,
                      text: message,
                      listCommentChid,
                      commentChild,
                      isChild,
                      name: user.name,
                    }),
                  )
                //               showDialog(
                //                 'reply',
                //                 idComment,
                //                 listCommentChid,
                //                 commentChild,
                //                 isChild,
                //                 message,
                //               )
              }>
              <Text style={{color: 'black'}}>phản hồi</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}

          <TouchableOpacity
            onPress={
              () =>
                dispatch(
                  showDialog({
                    action: 'edit',
                    id: idComment,
                    text: message,
                    listCommentChid,
                    commentChild,
                    isChild,
                    name: user.name,
                  }),
                )
              //             showDialog(
              //               'edit',
              //               idComment,
              //               listCommentChid,
              //               commentChild,
              //               isChild,
              //               message,
              //             )
            }>
            <Text style={{color: 'black', marginHorizontal: 10}}>
              chỉnh sửa
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () =>
                dispatch(
                  showDialog({
                    action: 'delete',
                    id: idComment,
                    text: message,
                    listCommentChid,
                    commentChild,
                    name: user.name,

                    isChild,
                  }),
                )
              //             showDialog(
              //               'delete',
              //               idComment,
              //               listCommentChid,
              //               commentChild,
              //               isChild,
              //               message,
              //             )
            }>
            <Text style={{color: 'black'}}>xóa</Text>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </>
  );
};

export default Comment;
