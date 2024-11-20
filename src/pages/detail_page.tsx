import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import colors from '../commons/colors';
import {DetailPageProps} from '../app_navigators/stack_params';
import {useSelector} from 'react-redux';

const DetailPage: FC<DetailPageProps> = props => {
  const item = props.route.params.item;

  const {payload} = useSelector((state: any) => state.auth);
  console.log('CHECK PAYLOAD REMOVE =', payload);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', padding: 12}}>
      <Text style={styles.header}>Chi Tiết</Text>
      <View>{item && item.id ? <Text>{item.id}</Text> : <></>}</View>
      <View>{item && item.name ? <Text>{item.name}</Text> : <></>}</View>
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
    color: colors.black,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default DetailPage;
