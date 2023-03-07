import {SCENE_NAME} from '../scenes/sceneName';
import HomeScreenView from './HomeScreen.view';
import React from 'react';

export default function HomeScreenContainer({navigation}) {
  const handleNavigateListInvoice = () => {
    navigation.navigate(SCENE_NAME.LIST_INVOICE);
  };
  const handleNavigateCreateInvoice = () => {
    navigation.navigate(SCENE_NAME.CREATE_INVOICE);
  };
  return (
    <HomeScreenView
      handleNavigateCreateInvoice={handleNavigateCreateInvoice}
      handleNavigateListInvoice={handleNavigateListInvoice}
    />
  );
}
