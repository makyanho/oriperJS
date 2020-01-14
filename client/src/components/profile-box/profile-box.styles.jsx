import styled from 'styled-components';
import { Button } from '../../common.styles';

export const FollowButton = styled(Button)`
  margin: auto;
`;

export const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  width: fit-content;
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.75rem;
`;

export const Figure = styled.figure`
  margin-bottom: 0.25rem;
`;

export const ProfilePic = styled.img`
  border-radius: 5px;
`;

export const Name = styled.figcaption`
  text-align: center;
  font-size: 1rem;
`;

export const Uid = styled.div`
  border: 1px solid var(--color-red-1);
  width: fit-content;
  margin: auto;
  margin-bottom: 0.25rem;
`;

export const UidLabel = styled.span`
  background-color: var(--color-red-1);
  color: white;
  padding: 0 0.5rem;
`;

export const UidData = styled.span`
  padding: 0 0.5rem;
`;

export const Follow = styled.div`
  width: fit-content;
  margin: auto;
  margin-bottom: 0.25rem;
  display: flex;
`;

export const FollowLabel = styled.span`
  color: var(--color-grey-dark-2);
`;

export const FollowData = styled.span`
  color: var(--color-red-1);
`;
