import { User } from '../../../types';

export function sortUsersByHighestScoreFirst(users: User[]): User[] {
  const sortedArr = users.sort((a, b) => {
    return a.score < b.score ? 1 : -1;
  });
  return sortedArr;
}

export function findHighestScore(users: User[]): number {
  const sortedArr = sortUsersByHighestScoreFirst(users);
  return sortedArr[0].score;
}

export function findWinningUsers(users: User[]): User[] {
  const highestScore = findHighestScore(users);
  return users.filter(user => user.score === highestScore);
}
