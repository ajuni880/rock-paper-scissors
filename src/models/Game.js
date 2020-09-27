import Score from './Score';

export const options = {
  rock: 0,
  paper: 1,
  scissors: 2
};

export default class Game {
  constructor() {
    this.score = new Score();
    this.players = [];
  }
}