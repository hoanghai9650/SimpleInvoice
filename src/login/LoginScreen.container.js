import React, {useCallback, useState} from 'react';
import LoginScreenView from './LoginScreen.view';

import {SCENE_NAME} from '../scenes/sceneName';
import {useDispatch, useSelector} from 'react-redux';
import {loginActions} from '../appRedux/actions/auth';

import {Alert} from 'react-native';

export default function LoginScreenContainer({navigation}) {
  const dispatch = useDispatch();

  //Input value
  let [input, setInput] = useState();

  // Handle Press Login
  const handleLogin = useCallback(() => {
    if ((input = '101')) {
      dispatch(
        loginActions({
          callback: (err, res) => {
            console.log(res, err);
            if (res) {
              navigation.replace(SCENE_NAME.LIST_INVOICE);
            } else {
              Alert.alert(err);
            }
          },
        }),
      );
    }
  }, [input]);

  return <LoginScreenView handleLogin={handleLogin} setInput={setInput} />;
}
