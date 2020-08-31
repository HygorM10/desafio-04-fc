import React, { useEffect, useState } from 'react';
import { LinkStyled } from '../LinkStyled';
import dao from '../../services/dao';

import { Container, Title, UsersContainer } from './styles';
import User from '../User';

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await dao.get('/users?per_page=12');
      const allUsers = response.data.data;
      console.log('allUsers', allUsers);
      setUsers(allUsers);
    };
    getUsers();
  }, []);

  return (
    <Container>
      <Title>Listagem de Usuários</Title>
      <UsersContainer>
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </UsersContainer>
      <LinkStyled to="/">Voltar para o Início</LinkStyled>
    </Container>
  );
};

export default Users;