import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
`;

export const ProfilePicLink = styled(Link)``;

export const ProfilePic = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  margin-right: 0.5rem;
`;

export const Right = styled.div``;

export const Detail = styled.div`
  font-size: 0.75rem;
`;

export const Name = styled(Link)`
  color: var(--color-red-1);
  margin-right: 0.75rem;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

export const Date = styled.span`
  color: var(--color-grey-dark-2);
`;

export const Content = styled.div``;
