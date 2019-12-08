import HomeActionTypes from './home.types';

export const fetchHomeStart = () => ({
  type: HomeActionTypes.FETCH_HOME_START
});

export const fetchHomeSuccess = homeData => ({
  type: HomeActionTypes.FETCH_HOME_SUCCESS,
  payload: homeData
});

export const fetchHomeFailure = errorMessage => ({
  type: HomeActionTypes.FETCH_HOME_FAILURE,
  payload: errorMessage
});

export const fetchHomeStartAsync = () => {
  return dispatch => {
    dispatch(fetchHomeStart());
  };
};
