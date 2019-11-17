import React from 'react';
import HomeSection from '../../components/home-section/home-section.component';
import { project } from '../../data';

const Home = () => {
  return (
    <div>
      <HomeSection data={project} />
    </div>
  );
};

export default Home;
