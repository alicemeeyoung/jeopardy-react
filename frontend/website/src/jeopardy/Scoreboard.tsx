import * as React from 'react';
import styled from '@emotion/styled';
import { User, GAME_SCREEN } from './types';
import { ScoreboardUser } from './ScoreboardUser';

type ScoreboardProps = { users: User[] };

const usersHi: User[] = [
  { name: 'Team A', score: 200 },
  { name: 'Team B', score: 300 },
  { name: 'Team C', score: 500 },
];

export function Scoreboard({ users }: ScoreboardProps) {
  return (
    <>
      {usersHi.map(user => (
        <ScoreboardUser key={user.name} user={user} mode={GAME_SCREEN.FINAL_JEOPARDY} />
      ))}
    </>
  );
}
