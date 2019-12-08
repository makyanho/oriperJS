import HomeActionTypes from './home.types';

const INITIAL_STATE = {
  homeData: null,
  isFetching: false,
  errorMessage: undefined
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.FETCH_HOME_START:
      return {
        ...state,
        isFetching: true
      };
    case HomeActionTypes.FETCH_HOME_SUCCESS:
      return {
        ...state,
        isFetching: false,
        homeData: action.payload
      };
    case HomeActionTypes.FETCH_HOME_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default homeReducer;
