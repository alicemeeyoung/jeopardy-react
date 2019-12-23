import {
  sortUsersByHighestScoreFirst,
  findHighestScore,
  findWinningUsers,
} from '../findWinningUser';

const users = [
  { name: 'Team A', score: 100 },
  { name: 'Team B', score: 300 },
  { name: 'Team C', score: 200 },
];

describe('sortUsersByHighestScoreFirst', () => {
  test('returns the highest score user', () => {
    const actual = sortUsersByHighestScoreFirst(users);
    expect(actual).toEqual([
      { name: 'Team B', score: 300 },
      { name: 'Team C', score: 200 },
      { name: 'Team A', score: 100 },
    ]);
  });
});

describe('sortUsersByHighestScoreFirst', () => {
  test('returns the highest score user', () => {
    const actual = sortUsersByHighestScoreFirst(users);
    expect(actual).toEqual([
      { name: 'Team B', score: 300 },
      { name: 'Team C', score: 200 },
      { name: 'Team A', score: 100 },
    ]);
  });
});

describe('findHighestScore', () => {
  test('returns the highest score ', () => {
    const actual = findHighestScore(users);
    expect(actual).toEqual(300);
  });
});

describe('findWinningUsers', () => {
  test('returns the highest score user', () => {
    const actual = findWinningUsers(users);
    expect(actual).toEqual(['Team B']);
  });
  test('returns multiple users if valid', () => {
    const actual = findWinningUsers([...users, { name: 'Team D', score: 300 }]);
    expect(actual).toEqual(['Team B', 'Team D']);
  });
});
