import React, {FC, useEffect} from 'react';
import {Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppNavigator from './app_navigators/navigator';
import {AppProps} from './models/app_model';
import {Provider, useDispatch} from 'react-redux';
import store from './app_stores/store';
import {setPayload, setToken} from './app_stores/authSlice';

const App: FC<AppProps> = props => {
  if (Platform.OS == 'ios') {
    FontAwesome.loadFont();
    Ionicons.loadFont();
    MaterialCommunityIcons.loadFont();
    MaterialIcons.loadFont();
  }

  const token = 'TOKEN'; // Token giả lập
  const payload = {notificationId: '002', role: 'admin'}; // Payload giả lập

  return (
    <Provider store={store}>
      <AppNavigator accountToken={token} payload={payload} />
    </Provider>
  );

  //   return (
  //     <Provider store={store}>
  //       <AppNavigator accountToken={props.accountToken} payload={props.payload} />
  //     </Provider>
  //   );
};

export default App;
