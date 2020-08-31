import React from 'react';

import './App.css';
import './styles';
import {
  AppContainer,
  Header,
  Content,
  TextHeader,
} from './styles';
import Routes from './routes';

function App() {
  return (
    <AppContainer>
      <Header>
        <TextHeader>Desafio 04 - Utilizando React.js</TextHeader>
      </Header>
      <Content>
        <Routes />
      </Content>
    </AppContainer>
  );
}

export default App;