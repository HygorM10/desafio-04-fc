import React from 'react';
import { LinkStyled } from '../LinkStyled';

import { MaratonaFullCycle } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <MaratonaFullCycle className="glitch">Maratona Full Cycle 4.0</MaratonaFullCycle>
      <LinkStyled to="/users">Listagem de Usuários</LinkStyled>
    </>
  );
};

export default Main;