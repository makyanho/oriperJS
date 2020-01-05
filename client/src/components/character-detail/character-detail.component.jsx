import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCharacterDetail } from '../../redux/character/character.selectors';
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
import RelatedCharacterGrid from '../related-character-grid/related-character-grid.component';
import { Button } from '../../common.styles';
import { SectionHolder } from '../../common.styles';

const CharacterDetail = ({ character }) => {
  const {
    name,
    img,
    desc,
    tags,
    createdAt,
    freetalk,
    user,
    attrs,
    characters
  } = character;
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
            <RelatedCharacterGrid
              title="關係角色"
              type="character"
              size="small"
              items={characters}
            />
          </Detail>
        </MainGrid>
      </Container>
    </SectionHolder>
  );
};

const mapStateToProps = createStructuredSelector({
  character: state => selectCharacterDetail(state)
});

export default connect(mapStateToProps)(CharacterDetail);
