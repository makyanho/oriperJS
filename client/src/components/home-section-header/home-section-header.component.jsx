import React from 'react';
import {
  SectionHeaderGrid,
  SectionHeaderName,
  SectionHeaderContainer,
  SectionHeaderTab,
  SectionHeaderMore,
  SectionHeaderMoreText,
  SectionHeaderMoreImg
} from './home-section.header.styles';

const HomeSectionHeader = ({ data, selected, setSelected }) => {
  const { title, more, tabs } = data;
  return (
    <SectionHeaderContainer>
      <SectionHeaderGrid>
        <SectionHeaderName>{title}</SectionHeaderName>
        {tabs.map((tab, index) => (
          <SectionHeaderTab
            key={tab.title}
            isSelected={tab.title === selected.title}
            onClick={() => setSelected(tabs[index])}
          >
            {tab.title}
          </SectionHeaderTab>
        ))}
        <SectionHeaderMore href="#">
          <SectionHeaderMoreText>{more.text}</SectionHeaderMoreText>
          <SectionHeaderMoreImg />
        </SectionHeaderMore>
      </SectionHeaderGrid>
    </SectionHeaderContainer>
  );
};

export default HomeSectionHeader;
