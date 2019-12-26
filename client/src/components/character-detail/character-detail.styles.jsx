import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 2rem 1rem 1.5rem 1rem;
`;

export const Title = styled.h1``;

export const MainGrid = styled.div`
  display: flex;
`;

export const Figure = styled.figure`
  position: relative;
  margin-right: 3rem;

  &:hover {
    figcaption {
      display: block;
    }
  }
`;

export const Img = styled.img`
  border: solid 1px var(--color-grey-light-1);
`;

export const ImgDesc = styled.figcaption`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  color: white;
  background-color: var(--color-overlay-grey);
  padding-top: 20%;
  padding-left: 1.5rem;
  display: none;
`;

export const Attr = styled.span`
  display: block;
`;

export const Detail = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const NameDiv = styled.div`
  display: flex;
`;

export const Name = styled.h1``;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled(Link)`
  color: var(--color-red-1);
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const Date = styled.span`
  font-size: 0.75rem;
  color: var(--color-grey-dark-2);
  margin-top: 0.625rem;
`;

export const Desc = styled.p`
  flex-grow: 1;
  margin-top: 1.5rem;
`;

export const UserRelated = styled.div`
  display: flex;
`;

export const UserLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const User = styled.figure`
  &:hover {
    figcaption {
      text-decoration: underline;
    }
  }
`;

export const UserPic = styled.img`
  border-radius: 5px;
`;

export const UserName = styled.figcaption`
  text-align: center;
  font-size: 0.75rem;
`;

export const Freetalk = styled.p`
  margin-left: 1.5rem;
  margin-right: 3rem;
`;

export const RelatedChars = styled.div``;
