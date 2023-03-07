/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Scenes from './src/scenes';
import {Provider} from 'react-redux';
import store from './src/appRedux/store/store';

function App() {
  return (
    <Provider store={store}>
      <Scenes />
    </Provider>
  );
}

export default App;
