import * as React from 'react';
import Board from './Board';
import { Scoreboard } from './Scoreboard';
import { useStateValue } from './Redux';
import { GAME_SCREEN } from './types';

export function GameLayout() {
  const [{ mode }] = useStateValue();
  return (
    <>
      <span>hello</span>
      {mode === GAME_SCREEN.BOARD_PAGE && <Board />}
      {mode === GAME_SCREEN.QUESTION_PAGE && <Board />}
      {mode === GAME_SCREEN.FINAL_JEOPARDY && <Board />}
      {/* Scoreboard */}
      <Scoreboard />
    </>
  );
}
