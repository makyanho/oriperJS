import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './global.styles';
import { Container } from './common.styles';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './pages/home/home.container';
import Work from './pages/work/work.component';
import CharacterPage from './pages/character/character.component';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work/:workId" component={Work} />
          <Route path="/character/:characterId" component={CharacterPage} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
