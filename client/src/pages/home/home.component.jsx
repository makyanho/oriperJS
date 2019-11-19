import React from 'react';
import HomeSection from '../../components/home-section/home-section.component';
import { project, characters, artworks, fictions } from '../../data';

const Home = () => {
  return (
    <div>
      <HomeSection data={project} />
      <HomeSection data={characters} />
      <HomeSection data={artworks} />
      <HomeSection data={fictions} />
    </div>
  );
};

export default Home;
