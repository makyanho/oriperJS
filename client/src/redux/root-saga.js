import { all, call } from 'redux-saga/effects';

import { homeSagas } from './home/home.sgags';

export default function* rootSaga() {
  yield all([call(homeSagas)]);
}
