import React from 'react';
import {
  CharacterCellContainer,
  CharacterCellOverlay,
  CharacterCellDesc,
  CharacterCellTitle,
  CharacterCellAuthor,
  CharacterCellFooter,
  CharacterCellFooterImage,
  CharacterCellFooterCnt,
  CharacterCellFooterCell
} from './character-cell.styles';

const CharacterCell = ({ item }) => {
  const { id, imageUrl, title, author, cmt, fav } = item;
  return (
    <CharacterCellContainer to={`/character/` + id} imageUrl={imageUrl}>
      <CharacterCellOverlay>
        <CharacterCellDesc>
          <CharacterCellTitle>{title}</CharacterCellTitle>
          <CharacterCellAuthor>{author}</CharacterCellAuthor>
          <CharacterCellFooter>
            <CharacterCellFooterCell>
              <CharacterCellFooterImage src="/images/ico_comment_h13.png" />
              <CharacterCellFooterCnt>{cmt}</CharacterCellFooterCnt>
            </CharacterCellFooterCell>
            <CharacterCellFooterCell>
              <CharacterCellFooterImage src="/images/ico_favourite_h13.png" />
              <CharacterCellFooterCnt>{fav}</CharacterCellFooterCnt>
            </CharacterCellFooterCell>
          </CharacterCellFooter>
        </CharacterCellDesc>
      </CharacterCellOverlay>
    </CharacterCellContainer>
  );
};

export default CharacterCell;
