import React from 'react';
import { Container } from './tag.styles';

const Tag = ({ tag }) => (
  <Container {...tag} to={`/tags/${tag.tag}`}>
    {tag.tag}
  </Container>
);

export default Tag;
