export const SET_PLAYER = 'SET_PLAYER';
export const SET_COMPUTER = 'SET_COMPUTER';
export const SET_WINNER = 'SET_WINNER';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const SET_SCREEN = 'SET_SCREEN';
export const PLAY_AGAIN = 'PLAY_AGAIN';

export const setPlayer = (player) => ({
  type: SET_PLAYER,
  payload: player
});

export const setComputer = (computer) => ({
  type: SET_COMPUTER,
  payload: computer
});

export const updateScore = (player) => ({
  type: UPDATE_SCORE,
  payload: player
});

export const setScreen = (screen) => ({
  type: SET_SCREEN,
  payload: screen
});

export const playAgain = () => ({
  type: PLAY_AGAIN
});