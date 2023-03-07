import {legacy_createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducer';
import rootSaga from '../sagas';

// ...

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
