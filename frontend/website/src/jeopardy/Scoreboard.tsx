import * as React from 'react';
import styled from '@emotion/styled';
import { Game } from '../jeopardy/Game';
import { User } from './types';
import { ScoreboardUsers } from './';

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
        <ScoreboardUsers user={user} />
      ))}
    </>
  );
}
