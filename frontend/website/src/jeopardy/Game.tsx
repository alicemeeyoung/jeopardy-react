import * as React from 'react';
import styled from '@emotion/styled';
import { Scoreboard } from './Scoreboard';

const Text = styled.span`
  font-size: 69px;
`;

export function Game() {
  console.log('hi');
  return (
    <>
      {/* Game */}
      <div />
      <span>hello</span>
      {/* Scoreboard */}
      <Scoreboard />
    </>
  );
}
