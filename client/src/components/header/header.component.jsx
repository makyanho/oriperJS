import React from 'react';

import {
  HeaderContainer,
  SearchContainer,
  OptionContainer,
  ProfilePic,
  UserName
} from './header.styles';
import { GreyBackground } from '../../common.styles';

const Header = () => (
  <GreyBackground>
    <HeaderContainer>
      <img src="/images/logo.png" alt="" className="logo" />
      <SearchContainer>Search</SearchContainer>
      <OptionContainer>
        <ProfilePic src="/images/dummy/profilePic.jpg" />
        <UserName>username</UserName>
      </OptionContainer>
    </HeaderContainer>
  </GreyBackground>
);

export default Header;
