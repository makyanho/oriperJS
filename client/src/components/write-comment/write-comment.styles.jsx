import styled from 'styled-components';
import { Button } from '../../common.styles';

export const Container = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
`;

export const ProfilePic = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  margin-right: 0.5rem;
`;

export const Right = styled.div`
  width: 100%;
`;

export const Detail = styled.div`
  font-size: 0.75rem;
`;

export const Name = styled.span`
  color: var(--color-red-1);
  margin-right: 0.75rem;
`;

export const CommentBox = styled.div`
  border: 1px solid var(--color-grey-light-2);
  margin-top: 0.5rem;
  background-color: white;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 0;
  border-bottom: 1px solid var(--color-grey-light-2);
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const SendButton = styled(Button)`
  margin: 0.5rem 1rem;
`;
