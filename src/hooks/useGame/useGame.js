import { useReducer } from 'react';
import { EnumGameResultStates } from '../../lib';
import * as actions from './actions';

const initialState = {
  computer: {
    play: null,
    score: 0
  },
  player: {
    play: null,
    score: 0
  },
  screen: 1
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_PLAYER:
      return {
        ...state,
        player: { ...state.player, ...action.payload }
      };
    case actions.SET_COMPUTER:
      return {
        ...state,
        computer: { ...state.computer, ...action.payload }
      };
    case actions.UPDATE_SCORE:
      const playerKey =
        action.payload === EnumGameResultStates.player ? 'player' : 'computer';
      const scorer = state[playerKey];
      return {
        ...state,
        [playerKey]: { ...scorer, score: scorer.score + 1 }
      };
    case actions.SET_SCREEN:
      return { ...state, screen: action.payload };
    case actions.PLAY_AGAIN:
      const player = {
        play: null,
        score: state.player.score
      };
      const computer = {
        play: null,
        score: state.computer.score
      };
      return { ...initialState, computer, player };
    default:
      throw new Error();
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
