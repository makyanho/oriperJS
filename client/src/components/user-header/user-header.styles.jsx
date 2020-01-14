import styled from 'styled-components';

export const Profile = styled.div`
  position: absolute;
  bottom: 0.5rem;
`;

export const Img = styled.div`
  width: 100%;
  padding-top: 25%;
  background: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Buttons = styled.div`
  display: flex;
  margin: 0.75rem 1rem;
  margin-left: 12.25rem;
`;

export const Tabs = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Tab = styled.li`
  font-weight: 500;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 3.125rem;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
`;

export const Button = styled.a`
  height: 32px;
  width: 32px;
  display: inline-block;
  background: ${({ img }) => `url(${img})`};
  margin-left: 0.625rem;

  &:hover {
    background: ${({ imghover }) => `url(${imghover})`};
  }
`;
