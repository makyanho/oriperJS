import CharacterActionTypes from './character.types';

const INITIAL_STATE = {
  characterDetail: null,
  isFetching: false,
  errorMessage: undefined
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_CHARACTER_DETAIL_START:
      return {
        ...state,
        isFetching: true
      };
    case CharacterActionTypes.FETCH_CHARACTER_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characterDetail: action.payload
      };
    case CharacterActionTypes.FETCH_CHARACTER_DETAIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default characterReducer;
