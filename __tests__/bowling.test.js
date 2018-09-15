const Scorecard = require('../src/bowling');

let scorecard = null;

beforeEach(() => {
  scorecard = new Scorecard();
});

// list of scores
// method for adding scores
// method to calculate score

test('it is created with an empty list of scores', () => {
  expect(scorecard.scores).toEqual([]);
});

test('bowl method adds a score to the list of scores', () => {
  scorecard.bowl(8);
  expect(scorecard.scores).toEqual([8]);
});

test('zero game', () => {
  for (let i = 0; i < 20; i += 1) {
    scorecard.bowl(0);
  }
  expect(scorecard.finalScore()).toBe(0);
});

test('hitting one every time returns a score of 20', () => {
  for (let i = 0; i < 20; i += 1) {
    scorecard.bowl(1);
  }
  expect(scorecard.finalScore()).toBe(20);
});


