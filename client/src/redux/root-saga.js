import { all, call } from 'redux-saga/effects';

import { homeSagas } from './home/home.sgags';
import { characterSagas } from './character/chatacter.sagas';

export default function* rootSaga() {
  yield all([call(homeSagas), call(characterSagas)]);
}
