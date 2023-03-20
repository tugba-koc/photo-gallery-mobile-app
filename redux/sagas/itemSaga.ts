import {all, put, takeLatest} from 'redux-saga/effects';
import {getItemFailure, getItemSuccess} from '../actions';
import {GET_ITEM_REQUEST} from '../actions/actionType';

export interface ResponseGenerator {
  config?: any;
  units?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getItemSaga() {
  try {
    const URL = 'https://www.reddit.com/r/bag/top.json';
    const response = yield fetch(URL).then(res => res.json());
    yield put(getItemSuccess({items: response?.data?.children}));
  } catch (e) {
    yield put(
      getItemFailure({
        error: 'An unknown error occurred.',
      }),
    );
  }
}

export function* itemSaga() {
  yield all([takeLatest(GET_ITEM_REQUEST, getItemSaga)]);
}
