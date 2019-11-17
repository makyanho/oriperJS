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

const HomeSectionHeader = () => (
  <SectionHeaderContainer>
    <SectionHeaderGrid>
      <SectionHeaderName>原創企劃</SectionHeaderName>
      <SectionHeaderTab isSelected>最新的企劃</SectionHeaderTab>
      <SectionHeaderTab>最熱門的企劃</SectionHeaderTab>
      <SectionHeaderTab>推薦的企劃</SectionHeaderTab>
      <SectionHeaderMore href="#">
        <SectionHeaderMoreText>更多企劃</SectionHeaderMoreText>
        <SectionHeaderMoreImg />
      </SectionHeaderMore>
    </SectionHeaderGrid>
  </SectionHeaderContainer>
);

export default HomeSectionHeader;
