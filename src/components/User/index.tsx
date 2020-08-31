import React from 'react';
import { IUser } from '../Users';
import {
  UserAvatar,
  UserContainer,
  UserDataContainer,
  UserEmail,
  UserName,
} from './styles';

interface IUserComponentProps {
  user: IUser;
}

const User: React.FC<IUserComponentProps> = ({ user }) => {
  const { avatar, id, first_name, last_name, email } = user;
  return (
    <UserContainer>
      <UserAvatar src={avatar} />
      <UserDataContainer>
        <UserName>
          {id} - {first_name} {last_name}
        </UserName>
        <UserEmail>{email}</UserEmail>
      </UserDataContainer>
    </UserContainer>
  );
};

export default User;