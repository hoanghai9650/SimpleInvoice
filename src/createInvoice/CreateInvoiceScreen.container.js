import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import CreateInvoiceScreenView from './CreateInvoiceScreen.view';
import {useDispatch} from 'react-redux';
import {createInvoiceAction} from '../appRedux/actions/invoice';
import {PAYLOAD_CREATE_INVOICE} from './CreateInvoice.constant';
import {useFormik} from 'formik';
import moment from 'moment';

export default function CreateInvoiceScreenContainer({navigation}) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      itemReference: '',
      description: '',
      quantity: '',
      invoiceDate: moment(new Date()).format('YYYY-MM-DD'),
    },

    onSubmit: data => {
      handleCreateInvoice(data);
    },
  });

  const handleCreateInvoice = data => {
    dispatch(
      createInvoiceAction({
        ...data,
        callback: (err, res) => {
          if (res) {
            Alert.alert('Success');
            navigation.goBack();
          } else {
            console.warn('Error', err);
          }
        },
      }),
    );
  };

  return <CreateInvoiceScreenView formik={formik} />;
}
