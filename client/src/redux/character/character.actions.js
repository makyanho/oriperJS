import CharacterActionTypes from './character.types';

export const fetchCharacterDetailStart = characterId => ({
  type: CharacterActionTypes.FETCH_CHARACTER_DETAIL_START,
  payload: characterId
});

export const fetchCharacterDetailSuccess = homeData => ({
  type: CharacterActionTypes.FETCH_CHARACTER_DETAIL_SUCCESS,
  payload: homeData
});

export const fetchCharacterDetailFailure = errorMessage => ({
  type: CharacterActionTypes.FETCH_CHARACTER_DETAIL_FAILURE,
  payload: errorMessage
});

export const fetchCharacterDetailStartAsync = () => {
  return dispatch => {
    dispatch(fetchCharacterDetailStart());
  };
};
