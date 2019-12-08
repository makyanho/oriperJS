import React from 'react';
import { WorkContainer } from './work.styles';

const Work = props => (
  <WorkContainer>Work: {props.match.params.workId}</WorkContainer>
);

export default Work;
