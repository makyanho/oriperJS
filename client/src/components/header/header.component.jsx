import React from 'react';

import {
  HeaderContainer,
  SearchContainer,
  OptionContainer,
  ProfilePic,
  UserName,
  HeaderBackground
} from './header.styles';

const Header = () => (
  <HeaderBackground>
    <HeaderContainer>
      <img src="/images/logo.png" alt="" className="logo" />
      <SearchContainer>Search</SearchContainer>
      <OptionContainer>
        <ProfilePic src="/images/dummy/profilePic.jpg" />
        <UserName>username</UserName>
      </OptionContainer>
    </HeaderContainer>
  </HeaderBackground>
);

export default Header;
