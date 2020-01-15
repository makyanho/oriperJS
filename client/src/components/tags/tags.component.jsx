import React from 'react';
import { Section, Title, Container } from './tags.styles';
import Tag from '../tag/tag.component';

const Tags = () => {
  const tags = [
    { tag: 'tag1', size: 'big' },
    { tag: 'tag2', size: 'normal' },
    { tag: 'tag3', size: 'small' }
  ];
  return (
    <Section>
      <Title>作品標籤</Title>
      <Container>
        {tags.map(tag => (
          <Tag id={tag.tag} tag={tag} />
        ))}
      </Container>
    </Section>
  );
};

export default Tags;
