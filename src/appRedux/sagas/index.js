import {all, fork} from 'redux-saga/effects';
import {watchLoginSagas} from './loginSagas';
import {watchGetInvoiceSagaSagas} from './getInvoicesSaga';
import {watchCreateInvoiceSaga} from './createInvoiceSaga';

export default function* rootSaga() {
  yield all([
    // Sagas
    fork(watchLoginSagas),
    fork(watchGetInvoiceSagaSagas),
    fork(watchCreateInvoiceSaga),
  ]);
}
