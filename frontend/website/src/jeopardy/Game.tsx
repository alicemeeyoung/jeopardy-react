import * as React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
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
