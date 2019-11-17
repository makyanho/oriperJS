import styled from 'styled-components';

export const SectionHeaderContainer = styled.div``;

export const SectionHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  margin: 0 5px;
  height: 2.5rem;
  border-bottom: 2px solid var(--color-red-1);
`;

export const SectionHeaderName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  justify-self: start;
  align-self: center;
  padding-left: 1rem;
`;

export const SectionHeaderTab = styled.div`
  font-size: 0.8125rem;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  line-height: 2.5rem;
  cursor: pointer;

  color: ${props => (props.isSelected ? 'var(--color-red-1)' : '')};
`;

export const SectionHeaderMore = styled.a`
  font-size: 0.75rem;
  justify-self: end;
  align-self: center;
  display: flex;
  text-decoration: none;
  color: inherit;
  align-items: center;
`;

export const SectionHeaderMoreText = styled.span`
  font-size: 0.75rem;
`;

export const SectionHeaderMoreImg = styled.img`
  background-color: var(--color-grey-light-2);
  width: 2.6875rem;
  height: 2rem;
  object-fit: cover;
  margin-left: 15px;
`;
