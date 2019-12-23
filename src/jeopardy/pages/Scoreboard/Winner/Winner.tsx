import * as React from 'react';
import { useStateValue } from '../../../Redux';
import { findWinningUsers } from './findWinningUser';

export function WinnerPage() {
  const [{ users }] = useStateValue();
  const winners = findWinningUsers(users);
  return (
    <div>
      Congratulations
      {winners.map(winner => (
        <div key={`${winner}yop`}>{winner}</div>
      ))}
    </div>
  );
}
