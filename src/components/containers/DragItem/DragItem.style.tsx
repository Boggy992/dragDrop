import styled from 'styled-components';

interface DragItem {
  $isActive?: boolean;
}

export const DragItemStyled = styled.li<DragItem>`
  display: block;
  cursor: grabbing;
  background: #fff;
  padding: 20px;
  margin-bottom: 5px;
  border-radius: 10px;
  list-style-type: none;
  box-shadow: 5px 4px 31px -13px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease;
  opacity: ${({ $isActive }) => $isActive && 0.5};
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: transparent;
    position: absolute;
    top: 100%;
    left: 0;
  }
`;
