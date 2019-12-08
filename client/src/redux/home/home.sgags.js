import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { fetchHomeSuccess, fetchHomeFailure } from './home.acitons';

import HomeActionTypes from './home.types';

export function* fetchHomeAsync() {
  try {
    const response = yield axios({
      url: 'api/home'
    }).then();
    yield put(fetchHomeSuccess(response.data));
  } catch (error) {
    yield put(fetchHomeFailure(error.message));
  }
}

export function* fetchHomeStart() {
  yield takeLatest(HomeActionTypes.FETCH_HOME_START, fetchHomeAsync);
}

export function* homeSagas() {
  yield all([call(fetchHomeStart)]);
}
