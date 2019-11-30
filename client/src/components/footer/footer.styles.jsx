import styled from 'styled-components';
import { ContainerMargin } from '../../common.styles';

export const FooterContainer = styled.footer`
  ${ContainerMargin}
`;

export const FooterNav = styled.div`
  display: inline-block;
  padding-top: 1.375rem;
  padding-bottom: 1.125rem;
`;

export const FooterList = styled.ul`
  list-style: none;
`;

export const FooterItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const FooterLink = styled.a`
  font-size: 0.75rem;

  &:link,
  &:visited {
    color: var(--color-grey-dark-2);
    text-decoration: none;
    display: inline-block;
  }

  &:hover,
  &:active {
    color: var(--color-grey-light-3);
  }
`;

export const FooterBreakLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-grey-dark-2);
`;

export const FooterExtLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.875rem 1.5rem 1.25rem 0;
`;

export const FooterExtLink = styled.a`
  height: 32px;
  width: 32px;
  display: inline-block;
  background: ${({ img }) => `url(${img})`};

  &:hover {
    background: ${({ imgHover }) => `url(${imgHover})`};
  }

  &:not(:last-child) {
    margin-right: 0.625rem;
  }
`;
