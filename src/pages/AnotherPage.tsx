import React, {FC, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import colors from '../commons/colors';
import {windowWidth} from '../commons/dimens';
import {AnotherPageProps} from '../app_navigators/stack_params';

const AnotherPage: FC<AnotherPageProps> = props => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', padding: 12}}>
      <Text style={styles.header}>Another PAGE</Text>
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

export default AnotherPage;
