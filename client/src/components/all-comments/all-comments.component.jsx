import React from 'react';

import { Container, Title } from './all-comments.styles';
import Comment from '../comment/comment.component';

const AllComments = ({ comments }) => {
  return (
    <Container>
      <Title>評論</Title>
      {comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </Container>
  );
};

export default AllComments;
