import styled from 'styled-components';

export const UserItemStyled = styled.span`
  pointer-events: none;
  & + & {
    margin-left: 7px;
  }
`;
