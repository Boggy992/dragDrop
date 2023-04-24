import React from 'react';
import { UserProps } from './models';
import { UserItemStyled } from './UserItem.style';

const UserItem = ({ name, email }: UserProps) => (
  <>
    <UserItemStyled>{name}</UserItemStyled>
    <UserItemStyled>{email}</UserItemStyled>
  </>
);

export default UserItem;
