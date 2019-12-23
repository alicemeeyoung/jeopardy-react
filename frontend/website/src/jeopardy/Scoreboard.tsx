import * as React from 'react';
import styled from '@emotion/styled';
import { User, GAME_SCREEN } from './types';
import { ScoreboardUser } from './ScoreboardUser';
import { useStateValue } from './Redux';

const ScoreboardRow = styled.div`
  display: flex;
`;

export function Scoreboard() {
  const [{ users }] = useStateValue();
  console.log({ users });
  return (
    <ScoreboardRow>
      {users &&
        users.map(user => (
          <ScoreboardUser key={user.name} user={user} mode={GAME_SCREEN.FINAL_JEOPARDY} />
        ))}
    </ScoreboardRow>
  );
}
