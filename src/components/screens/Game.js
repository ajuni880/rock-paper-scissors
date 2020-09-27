import React from 'react';
import SelectPlay from '../elements/SelectPlay';
import { withGame } from '../../context/GameProvider';
import Match from '../elements/Match';

const Game = (props) => {
  const { state } = props.game;

  return (
    <>
      {
        state.screen === 1 ? <SelectPlay /> : <Match />
      }
    </>
  );
}

export default withGame(Game);