import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomeSection from '../../components/home-section/home-section.component';
import { selectHomeData } from '../../redux/home/home.selectors';

const Home = ({ homeData }) => {
  const { project, characters, artworks, fictions, notices } = homeData;
  return (
    <div>
      <HomeSection data={notices} type="notices" />
      <HomeSection data={project} size="big" />
      <HomeSection data={characters} />
      <HomeSection data={artworks} type="works" />
      <HomeSection data={fictions} type="works" />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  homeData: selectHomeData
});

export default connect(mapStateToProps)(Home);
