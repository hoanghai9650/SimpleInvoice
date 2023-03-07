import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreenContainer from '../login/LoginScreen.container';

import {NavigationContainer} from '@react-navigation/native';
import {SCENE_NAME} from './sceneName';
import ListInvoiceScreenContainer from '../listInvoice/ListInvoiceScreen.container';
import CreateInvoiceScreenContainer from '../createInvoice/CreateInvoiceScreen.container';
const Stack = createNativeStackNavigator();

export default function Scenes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCENE_NAME.LOGIN}
          component={LoginScreenContainer}
          key={SCENE_NAME.LOGIN}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={SCENE_NAME.LIST_INVOICE}
          component={ListInvoiceScreenContainer}
          key={SCENE_NAME.LIST_INVOICE}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCENE_NAME.CREATE_INVOICE}
          component={CreateInvoiceScreenContainer}
          key={SCENE_NAME.CREATE_INVOICE}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
