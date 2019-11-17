import styled from 'styled-components';
import { ContainerMargin } from '../../common.styles';

export const HeaderBackground = styled.header`
  height: 3.125rem;
  width: 100%;
  background-color: var(--color-grey-dark-1);
`;

export const HeaderContainer = styled.div`
  ${ContainerMargin}

  display: grid;
  grid-template-columns: min-content 1fr min-content min-content;
  grid-template-rows: auto;
  column-gap: 0.25rem;
  align-items: center;
`;

export const SearchContainer = styled.div``;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfilePic = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 5px;
  border: 2px solid red;
`;

export const UserName = styled.div`
  color: white;
  padding: 0 1rem;
`;
