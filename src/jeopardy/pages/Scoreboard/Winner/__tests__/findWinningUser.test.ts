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
    ];
  });
});
