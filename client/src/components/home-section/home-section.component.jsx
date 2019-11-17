import React, { useState } from 'react';

import HomeSectionHeader from '../home-section-header/home-section-header.component';
import Grid from '../grid/grid.component';
import { SectionHolder } from '../../common.styles';

const HomeSection = ({ data }) => {
  const [selected, setSelected] = useState(data.tabs[0]);

  return (
    <SectionHolder>
      <HomeSectionHeader
        data={data}
        selected={selected}
        setSelected={setSelected}
      />
      <Grid selected={selected} />
    </SectionHolder>
  );
};

export default HomeSection;
