import * as React from 'react';
import styled from '@emotion/styled';
import { User, GAME_SCREEN } from './types';
import { ScoreboardUser } from './ScoreboardUser';
import { useStateValue } from './Redux';

const ScoreboardRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 64px;
`;

export function Scoreboard() {
  const [{ users }] = useStateValue();
  return (
    <ScoreboardRow>
      {users && users.map(user => <ScoreboardUser key={user.name} user={user} />)}
    </ScoreboardRow>
  );
}
