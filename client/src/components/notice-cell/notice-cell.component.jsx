import React from 'react';
import {
  NoticeCellContainer,
  NoticeCellTitle,
  NoticeCellDate
} from './notice-cell.styles';

const NoticeCell = ({ item }) => {
  const { title, date } = item;
  return (
    <NoticeCellContainer>
      <NoticeCellTitle>{title}</NoticeCellTitle>
      <NoticeCellDate>{date}</NoticeCellDate>
    </NoticeCellContainer>
  );
};

export default NoticeCell;
