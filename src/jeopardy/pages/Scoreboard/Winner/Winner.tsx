import * as React from 'react';
import { useStateValue } from '../../../Redux';
import { findWinningUsers } from './findWinningUser';

const winnerStyles = {
  fontSize: '3.5rem',
  margin: 'auto',
  width: '50%',
};

export function WinnerPage() {
  const [{ users }] = useStateValue();
  const winners = findWinningUsers(users);
  return (
    <div css={winnerStyles}>
      <span>Congratulations</span>
      {winners.map(winner => (
        <div key={`${winner}yop`}>{winner}</div>
      ))}
    </div>
  );
}
