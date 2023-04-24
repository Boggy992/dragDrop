import React, { FC, DragEvent, useState, useContext } from 'react';
import { DragContext } from '../../../contexts/drag.context';
import { DragItemProps } from './models';
import { DragItemStyled } from './DragItem.style';

const DragItem: FC<DragItemProps> = ({ children, index }) => {
  const { pastIndex, setPastIndex } = useContext(DragContext);
  const [activeUser, setActiveUser] = useState<number>(-1);

  const dragStartHandler = (event: DragEvent, userPosition: number) => {
    event.dataTransfer.setData('userPosition', userPosition.toString());
    setActiveUser(userPosition);
  };

  const dragEndHandler = () => {
    setPastIndex(-1);
    setActiveUser(-1);
  };

  return (
    <DragItemStyled
      data-id={index}
      draggable
      onDragStart={(event) => dragStartHandler(event, index)}
      onDragEnd={dragEndHandler}
      $isActive={index === pastIndex || index === activeUser}
    >
      {children}
    </DragItemStyled>
  );
};

export default DragItem;
