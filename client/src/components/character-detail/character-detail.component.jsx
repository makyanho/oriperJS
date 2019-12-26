import React from 'react';
import {
  Container,
  Title,
  MainGrid,
  Figure,
  Img,
  ImgDesc,
  Attr,
  Detail,
  NameDiv,
  Name,
  Tags,
  Tag,
  Desc,
  User,
  UserLink,
  UserPic,
  UserName,
  UserRelated,
  Freetalk,
  Date,
  Buttons
} from './character-detail.styles';
import ReportDropdown from '../report-dropdown/report-dropdown.component';
import { Button } from '../../common.styles';
import { SectionHolder } from '../../common.styles';

const CharacterDetail = () => {
  const character = {
    name: '角色名字',
    img: ['/images/dummy/character.png'],
    desc: '角色詳細設定',
    tags: ['tag1', 'tag2', 'tag3', 'tag4'],
    createdAt: '2020/1/1',
    freetalk: '作者的話',
    user: {
      id: 1,
      name: '用戶名稱',
      profilePic: '/images/dummy/profilePic.jpg'
    },
    attrs: {
      性別: '女',
      種族: '人類',
      生日: null,
      身高: null,
      體重: null,
      職業: null
    },
    relatedCharacters: [
      {
        name: '角色名字',
        img: '/images/dummy/profilePic.jpg',
        relation: 'CP'
      },
      {
        name: '角色名字',
        img: '/images/dummy/profilePic.jpg',
        relation: '哥'
      }
    ]
  };
  const { name, img, desc, tags, createdAt, freetalk, user, attrs } = character;
  return (
    <SectionHolder>
      <Container>
        <Title>角色設定</Title>
        <MainGrid>
          <Figure>
            <Img src={img[0]} />
            <ImgDesc>
              {Object.getOwnPropertyNames(attrs).map(key => (
                <Attr key={key}>
                  {key} {attrs[key]}
                </Attr>
              ))}
            </ImgDesc>
          </Figure>
          <Detail>
            <Buttons>
              <Button>關 注</Button>
            </Buttons>
            <NameDiv>
              <Name>{name}</Name>
              <ReportDropdown />
            </NameDiv>
            <Tags>
              {tags.map(tag => (
                <Tag key={tag} to={'/tags/' + tag}>
                  {tag}
                </Tag>
              ))}
            </Tags>
            <Date>{createdAt}</Date>
            <Desc>{desc}</Desc>
            <UserRelated href="#">
              <UserLink to={'/users/' + user.id}>
                <User>
                  <UserPic src={user.profilePic} />
                  <UserName>{user.name}</UserName>
                </User>
              </UserLink>
              <Freetalk>{freetalk}</Freetalk>
            </UserRelated>
          </Detail>
        </MainGrid>
      </Container>
    </SectionHolder>
  );
};

export default CharacterDetail;
