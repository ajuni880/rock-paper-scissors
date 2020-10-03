/* eslint-disable no-mixed-operators */
export const EnumPlays = {
  rock: 1,
  paper: 2,
  scissors: 3
};

export const EnumGameResultStates = {
  draw: 1,
  player: 2,
  computer: 3
}

export function checkWinner(p1, p2) {
  const { rock, paper, scissors } = EnumPlays;

  if (p1.play === p2.play) {
    return EnumGameResultStates.draw;
  } else if (
    p1.play === paper && p2.play === rock ||
    p1.play === scissors && p2.play === paper ||
    p1.play === rock && p2.play === scissors
  ) {
    return EnumGameResultStates.player;
  }
  return EnumGameResultStates.computer;
}

export function computerPlay() {
  return Math.ceil(Math.random() * 3);
}

export function computeMathResult(winner) {
  switch(winner) {
    case EnumGameResultStates.draw:
      return 'Draw';
    case EnumGameResultStates.player:
      return 'You win';
    case EnumGameResultStates.computer:
      return 'You lose';
    default:
      throw new Error('Invalid game state');
  }
}