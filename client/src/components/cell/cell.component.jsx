import React from 'react';
import ProjectCell from '../project-cell/project-cell.component';
import CharacterCell from '../character-cell/character-cell.component';

const Cell = props => {
  const { item } = props;
  switch (item.type) {
    case 'project':
      return <ProjectCell {...props} />;
    case 'character':
      return <CharacterCell {...props} />;
    default:
      return null;
  }
};

export default Cell;