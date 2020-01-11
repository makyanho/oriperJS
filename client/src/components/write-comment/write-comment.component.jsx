import React from 'react';

import {
  Container,
  ProfilePic,
  Right,
  Detail,
  Name,
  TextArea,
  CommentBox,
  SendButton,
  Footer
} from './write-comment.styles';

const WriteComment = () => {
  return (
    <Container>
      <ProfilePic src="/images/dummy/profilePic.jpg" />
      <Right>
        <Detail>
          <Name>使用者名稱</Name>
        </Detail>
        <CommentBox>
          <TextArea rows="5" />
          <Footer>
            <SendButton size="small">發送</SendButton>
          </Footer>
        </CommentBox>
      </Right>
    </Container>
  );
};

export default WriteComment;
