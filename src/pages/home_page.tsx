import React, {FC, useEffect, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../commons/colors';
import {useDispatch, useSelector} from 'react-redux';
import {HomePageProps} from '../app_navigators/stack_params';
import {clearPayload} from '../app_stores/authSlice';

const HomePage: FC<HomePageProps> = props => {
  const token = useSelector((state: any) => state.auth.token); // Lấy token
  const payload = useSelector((state: any) => state.auth.payload); // Lấy payload
  const dispatch = useDispatch();

  const data = [
    {id: '001', name: 'Nguyễn Văn A'},
    {id: '002', name: 'Trần Thị B'},
    {id: '003', name: 'Lê Văn C'},
  ];

  useEffect(() => {
    (async () => {
      console.log('TOKEN nhan=', token);
      console.log('Payload nhan=', payload);

      if (payload) {
        const payloadItem = data.filter(x => x.id === payload.notificationId);
        if (payloadItem && payloadItem[0]) {
          props.navigation.navigate('DetailPage', {
            notificationId: payload.id,
            item: payloadItem[0],
          });
          dispatch(clearPayload()); //xóa payload
        }
      }
    })();
  }, [token, payload]);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', padding: 12}}>
      <Text style={styles.header}>Danh sách</Text>
      <View style={styles.itemView}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('DetailPage', {
              notificationId: '',
              item: data[0],
            })
          }>
          <Text style={styles.text}>Item 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemView}>
        <Text style={styles.text}>Item 2</Text>
      </View>

      <View style={styles.itemView}>
        <Text style={styles.text}>Item 3</Text>
      </View>

      {/* <Button
        title="goto Another page"
        onPress={() => props.navigation.navigate('AnotherPage')}></Button> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemView: {
    marginVertical: 12,
  },
  text: {
    color: colors.text,
    fontSize: 15,
    paddingVertical: 4,
  },
  header: {
    color: colors.red,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default HomePage;
