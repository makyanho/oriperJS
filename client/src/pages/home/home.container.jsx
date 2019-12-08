import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsHomeLoaded } from '../../redux/home/home.selectors';
import { fetchHomeStart } from '../../redux/home/home.acitons';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Home from './home.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsHomeLoaded(state)
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchHomeStart())
});

const HomeContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithSpinner
)(Home);

export default HomeContainer;
