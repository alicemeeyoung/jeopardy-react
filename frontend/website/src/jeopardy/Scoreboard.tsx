import * as React from 'react';
import styled from '@emotion/styled';
import { User, GAME_SCREEN } from './types';
import { ScoreboardUser } from './ScoreboardUser';
import { useStateValue } from './Redux';

type ScoreboardProps = { users: User[] };

export function Scoreboard() {
  const [{ users }] = useStateValue();
  console.log({ users });
  return (
    <>
      {users &&
        users.map(user => (
          <ScoreboardUser key={user.name} user={user} mode={GAME_SCREEN.FINAL_JEOPARDY} />
        ))}
    </>
  );
}
