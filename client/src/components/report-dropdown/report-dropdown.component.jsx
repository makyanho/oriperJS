import React from 'react';
import { IconContext } from 'react-icons';
import { IoMdArrowDropdown } from 'react-icons/io';

import { DropdownContainer, DropDownButton } from './report-dropdown.styles';

const ReportDropdown = () => {
  return (
    <DropdownContainer>
      <DropDownButton size="small" className="tooltip">
        檢舉
      </DropDownButton>
      <IconContext.Provider
        value={{ color: 'var(--color-grey-light-3)', size: '2rem' }}
      >
        <IoMdArrowDropdown />
      </IconContext.Provider>
    </DropdownContainer>
  );
};

export default ReportDropdown;
