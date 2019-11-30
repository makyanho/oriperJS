import React from 'react';
import HomeSection from '../../components/home-section/home-section.component';
import { project, characters, artworks, fictions, notices } from '../../data';

const Home = () => {
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

export default Home;
