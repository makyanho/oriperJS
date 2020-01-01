import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  fetchCharacterDetailSuccess,
  fetchCharacterDetailFailure
} from './character.actions';

import CharacterActionTypes from './character.types';

export function* fetchCharacterDetailAsync({ payload }) {
  try {
    const response = yield axios({
      url: `/api/v1/characters/${payload}`
    }).then();
    yield put(fetchCharacterDetailSuccess(response.data));
  } catch (error) {
    yield put(fetchCharacterDetailFailure(error.message));
  }
}

export function* fetchCharacterDetailStart() {
  yield takeLatest(
    CharacterActionTypes.FETCH_CHARACTER_DETAIL_START,
    fetchCharacterDetailAsync
  );
}

export function* characterSagas() {
  yield all([call(fetchCharacterDetailStart)]);
}
