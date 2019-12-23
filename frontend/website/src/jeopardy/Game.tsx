import * as React from 'react';
import { Global, css } from '@emotion/core';
import Board from './Board';
import { Scoreboard } from './Scoreboard';
import { StateProvider } from './Redux';

export function Game() {
  return (
    <StateProvider>
      <Global
        styles={css`
          html {
            background-color: tan;
            font: 16px Arial;
          }
        `}
      />
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
