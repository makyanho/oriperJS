import React from 'react';
import HomeSectionHeader from '../../components/home-section-header/home-section-header.component';
import Grid from '../../components/grid/grid.component';
import { SectionHolder } from '../../common.styles';

const Home = () => (
  <div>
    <SectionHolder>
      <HomeSectionHeader />
      <Grid />
    </SectionHolder>
  </div>
);

export default Home;
