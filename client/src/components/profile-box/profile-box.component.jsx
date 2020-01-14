import React from 'react';
import { IconContext } from 'react-icons';
import { FaEye } from 'react-icons/fa';

import {
  Container,
  Figure,
  ProfilePic,
  Name,
  Uid,
  UidLabel,
  UidData,
  Follow,
  FollowLabel,
  FollowData,
  FollowButton
} from './profile-box.styles';

const ProfileBox = () => {
  return (
    <Container>
      <Figure>
        <ProfilePic src="/images/dummy/profilePic.jpg" />
        <Name>使用者名稱</Name>
      </Figure>
      <Uid>
        <UidLabel>UID</UidLabel>
        <UidData>12345</UidData>
      </Uid>
      <Follow>
        <FollowLabel>關注</FollowLabel>
        <IconContext.Provider
          value={{ color: 'var(--color-grey-light-3)', size: '1rem' }}
        >
          <FaEye />
        </IconContext.Provider>
        <FollowData>123</FollowData>
      </Follow>
      <FollowButton size="small">關注作者</FollowButton>
    </Container>
  );
};

export default ProfileBox;
