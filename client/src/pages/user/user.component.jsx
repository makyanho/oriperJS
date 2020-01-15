import React from 'react';

import { Container } from './user.styles';
import UserHeader from '../../components/user-header/user-header.component';
import Tags from '../../components/tags/tags.component';

const UserPage = () => {
  return (
    <Container>
      <UserHeader />
      <Tags />
    </Container>
  );
};

export default UserPage;
