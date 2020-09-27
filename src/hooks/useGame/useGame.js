import { useReducer } from 'react';
import { EnumGameResultStates } from '../../lib';
import * as actions from './actions';

const initialState = {
  players: {
    computer: {
      play: null,
      score: 0,
    },
    currentPlayer: {
      play: null,
      score: 0
    }
  },
  screen: 1
}

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          currentPlayer: { ...state.players.currentPlayer, ...action.payload }
        }
      };
    case actions.SET_COMPUTER:
      return {
        ...state,
        players: {
          ...state.players,
          computer: { ...state.players.computer, ...action.payload }
        }
      };
    case actions.UPDATE_SCORE:
      const playerKey = action.payload === EnumGameResultStates.player ? 'currentPlayer' : 'computer';
      const player = action.payload === EnumGameResultStates.player ?  state.players.currentPlayer : state.players.computer;
      const updatedPlayer = { ...player, score: player.score + 1 };
      return {
        ...state,
        players: {
          ...state.players,
          [playerKey]: updatedPlayer
        }
      }
    case actions.SET_SCREEN:
      return { ...state, screen: action.payload };
    case actions.PLAY_AGAIN:
      const currentPlayer = {
        play: null,
        score: state.players.currentPlayer.score
      };
      const computer = {
        play: null,
        score: state.players.computer.score
      };
      return { ...initialState, players: { computer, currentPlayer } };
    default:
      throw new Error();
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}