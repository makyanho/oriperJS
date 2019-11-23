import React from 'react';
import HomeSection from '../../components/home-section/home-section.component';
import { project, characters, artworks, fictions } from '../../data';

const Home = () => {
  return (
    <div>
      <HomeSection data={project} size="big" />
      <HomeSection data={characters} />
      <HomeSection data={artworks} type="works" />
      <HomeSection data={fictions} type="works" />
    </div>
  );
};

export default Home;
