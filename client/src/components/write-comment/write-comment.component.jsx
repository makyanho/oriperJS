import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { IoMdArrowDropdown } from 'react-icons/io';

import {
  Container,
  ProfilePic,
  Right,
  Detail,
  Name,
  TextArea,
  CommentBox,
  SendButton,
  Footer,
  DropdownContainer,
  DropdownMenu,
  DropdownMenuItem
} from './write-comment.styles';

const WriteComment = () => {
  const names = ['使用者名稱', '角色A', '角色B'];
  const [displayName, setDisplayName] = useState(names[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Container>
      <ProfilePic src="/images/dummy/profilePic.jpg" />
      <Right>
        <Detail>
          <Name>{displayName}</Name>
          <DropdownContainer>
            <div onClick={() => setShowDropdown(!showDropdown)}>
              <IconContext.Provider
                value={{ color: 'var(--color-grey-light-3)', size: '1rem' }}
              >
                <IoMdArrowDropdown />
              </IconContext.Provider>
            </div>
            {showDropdown ? (
              <DropdownMenu>
                {names.map((name, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    onClick={() => setDisplayName(name)}
                  >
                    {name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenu>
            ) : null}
          </DropdownContainer>
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
