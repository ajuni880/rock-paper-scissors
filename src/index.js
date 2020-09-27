import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, defaultTheme } from './utils';
import { Layout, GameTitle, SecondaryButtonFixed, Scoreboard, RulesModal } from './components/shared';
import GameProvider from './context/GameProvider';
import Game from './components/screens/Game';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GameProvider>
        <Layout>
          <GlobalStyles />
          <GameTitle>
            <Scoreboard />
          </GameTitle>
          <Game />
          <SecondaryButtonFixed onClick={() => setModalOpen(true)}>Rules</SecondaryButtonFixed>
          <RulesModal open={isModalOpen} onCloseModal={() => setModalOpen(false)}/>
        </Layout>
      </GameProvider>
    </ThemeProvider>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
