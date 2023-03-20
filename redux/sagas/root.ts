import {all} from 'redux-saga/effects';
import {itemSaga} from './itemSaga';

export function* rootSaga() {
  yield all([itemSaga()]);
}
