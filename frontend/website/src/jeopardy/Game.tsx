import * as React from 'react';
import styled from '@emotion/styled';
import Board from './Board';
import { Scoreboard } from './Scoreboard';
import { StateProvider } from './Redux';
import { reducer } from './redux/reducer';

const Text = styled.span`
  font-size: 69px;
`;

export function Game() {
  console.log('hi');
  return (
    <StateProvider>
      <>
        <Board />
        {/* Game */}
        <div />
        <span>hello</span>
        {/* Scoreboard */}
        <Scoreboard />
      </>
    </StateProvider>
  );
}
