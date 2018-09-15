function Scorecard () {
  this.scores = [];
}

Scorecard.prototype.bowl = function(score) {
  this.scores.push(score);
}

Scorecard.prototype.finalScore = function () {
  return this.scores.reduce((total, score) => {
    return total + score;
  }, 0)
}

module.exports = Scorecard;