import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './HomeScreen.style';
export default function HomeScreenView(props) {
  const {handleNavigateCreateInvoice, handleNavigateListInvoice} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleNavigateListInvoice}>
        <Text>List Invoice Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={handleNavigateCreateInvoice}>
        <Text>Create Invoice Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
