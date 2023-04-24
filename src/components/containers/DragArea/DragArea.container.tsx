import React, { FC, DragEvent, useContext } from 'react';
import { DragContext } from '../../../contexts/drag.context';
import { DragAreaProps } from './models';
import { DragAreaStyled } from './DragArea.style';

const DragArea: FC<DragAreaProps> = ({ items, onChange, children }) => {
  const { setPastIndex } = useContext(DragContext);

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    setPastIndex(Number((event.target as Element).getAttribute('data-id')));
  };

  const handleOnDrop = (event: DragEvent) => {
    const users = [...items];

    const userPositionIndex = Number(event.dataTransfer.getData('userPosition'));
    const changedUserIndex = Number(
      (event.target as Element).getAttribute('data-id')
    );

    const [reorderedUser] = users.splice(userPositionIndex, 1);

    users.splice(changedUserIndex, 0, reorderedUser);

    onChange(users);
  };

  return (
    <DragAreaStyled onDragOver={handleDragOver} onDrop={handleOnDrop}>
      {children}
    </DragAreaStyled>
  );
};

export default DragArea;
