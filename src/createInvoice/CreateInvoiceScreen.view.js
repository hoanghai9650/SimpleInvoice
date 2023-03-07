import {View, Text, TextInput} from 'react-native';
import React from 'react';
import SortButton from '../listInvoice/component/SortButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './CreateInvoiceScreen.style';
export default function CreateInvoiceScreenView(props) {
  const {formik} = props;
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Type your ref"
        onChangeText={text => formik.setFieldValue('itemReference', text)}
      />
      <TextInput
        placeholder="Type your description"
        onChangeText={text => formik.setFieldValue('description', text)}
      />
      <TextInput
        placeholder="Type your quantity"
        onChangeText={text => formik.setFieldValue('quantity', text)}
        keyboardType="number-pad"
      />
      <SortButton title="submit" onPress={() => formik.submitForm()} />
    </SafeAreaView>
  );
}
