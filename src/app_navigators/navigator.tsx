import {createStackNavigator} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {RootStackParamList} from './stack_params';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomePage from '../pages/home_page';
import {useDispatch} from 'react-redux';
import {AppProps} from '../models/app_model';
import {setToken, setPayload} from '../app_stores/authSlice';
import DetailPage from '../pages/detail_page';
import AnotherPage from '../pages/AnotherPage';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: FC<AppProps> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setToken(props.accountToken)); // Lưu token vào Redux
      dispatch(setPayload(props.payload)); // Lưu payload vào Redux
    })();
  }, []);

  //view
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'HomePage'}
        screenOptions={{
          headerTintColor: 'black',
          headerLeftContainerStyle: {paddingLeft: 11},
          headerBackImage: () => {
            return (
              <View
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  paddingRight: 3,
                }}>
                <FontAwesome name="angle-left" color={'black'} size={32} />
              </View>
            );
          },
        }}>
        <Stack.Screen
          name="HomePage"
          options={({route}) => ({})}
          component={HomePage}
        />
        <Stack.Screen
          name="DetailPage"
          options={({route}) => ({})}
          component={DetailPage}
        />
        <Stack.Screen
          name="AnotherPage"
          options={({route}) => ({})}
          component={AnotherPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 28,
    marginLeft: 10,
  },
  item: {
    alignSelf: 'center',
    color: 'black',
    marginRight: 2,
  },
  roundshape: {
    height: 36,
    width: 36,
    justifyContent: 'center',
    borderRadius: 18,
  },
});

export default AppNavigator;
