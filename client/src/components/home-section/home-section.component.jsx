import React, { useState } from 'react';

import HomeSectionHeader from '../home-section-header/home-section-header.component';
import Grid from '../grid/grid.component';
import { SectionHolder } from '../../common.styles';

const HomeSection = ({ data, type, size }) => {
  const [selected, setSelected] = useState(data.tabs[0]);

  return (
    <SectionHolder>
      <HomeSectionHeader
        data={data}
        selected={selected}
        setSelected={setSelected}
      />
      <Grid selected={selected} type={type} size={size} />
    </SectionHolder>
  );
};

export default HomeSection;
