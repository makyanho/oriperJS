import React from 'react';
import './App.css';

import { GlobalStyle } from './global.styles';
import { Container } from './common.styles';

import Header from './components/header/header.component';
import Home from './pages/home/home.component';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
