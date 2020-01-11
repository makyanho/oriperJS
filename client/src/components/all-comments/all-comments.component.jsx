import React from 'react';

import { Container, Title, LineBreak } from './all-comments.styles';
import Comment from '../comment/comment.component';
import WriteComment from '../write-comment/write-comment.component';

const AllComments = ({ comments }) => {
  return (
    <Container>
      <Title>評論</Title>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <LineBreak />
      <WriteComment />
    </Container>
  );
};

export default AllComments;
