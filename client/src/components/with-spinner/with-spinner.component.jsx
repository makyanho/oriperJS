import React, { useEffect } from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, fetchData, ...otherProps }) => {
    console.log('Spinner', otherProps);
    useEffect(() => {
      if (fetchData) {
        fetchData(otherProps.match.params);
      }
    }, [fetchData, otherProps.match.params]);
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
