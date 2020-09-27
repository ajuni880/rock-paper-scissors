export default class Score {
  constructor({ incrementBy = 1 } = {} ) {
    this.value = 0;
    this.incrementBy = incrementBy;
  }

  increment() {
    this.score += this.incrementBy;
  }

  reset() {
    this.score = 0;
  }
}