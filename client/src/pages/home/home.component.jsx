import React from 'react';
import HomeSection from '../../components/home-section/home-section.component';
import { project, characters } from '../../data';

const Home = () => {
  return (
    <div>
      <HomeSection data={project} />
      <HomeSection data={characters} />
    </div>
  );
};

export default Home;
