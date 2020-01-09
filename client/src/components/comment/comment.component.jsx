import React from 'react';

import {
  Container,
  Content,
  ProfilePicLink,
  ProfilePic,
  Detail,
  Name,
  Date,
  Right
} from './comment.styles';

const Comment = ({ comment }) => {
  const { id, date, content, user } = comment;
  const { profilePic, name } = user;
  return (
    <Container key={id}>
      <ProfilePicLink to={`/users/${user.id}`}>
        <ProfilePic src={profilePic} />
      </ProfilePicLink>
      <Right>
        <Detail>
          <Name to={`/users/${id}`}>{name}</Name>
          <Date>{date}</Date>
        </Detail>
        <Content>{content}</Content>
      </Right>
    </Container>
  );
};

export default Comment;
