import * as React from 'react';
import { QuestionPage } from './QuestionPage';
import JeopardyLanding from './JeopardyLanding';
import Board from './Board';
import { DailyDouble } from './pages/DailyDouble/DailyDouble';
import { Scoreboard } from './pages/Scoreboard/Scoreboard';
import { useStateValue } from './Redux';
import { GAME_SCREEN } from './types';

export function GameLayout() {
  const [{ mode }] = useStateValue();
  return mode === GAME_SCREEN.WINNER ? (
    <Board />
  ) : (
    <div css={{ textAlign: 'center' }}>
      {mode === GAME_SCREEN.DAILY_DOUBLE_LANDING && <DailyDouble />}
      {mode === GAME_SCREEN.BOARD_PAGE && <Board />}
      {mode === GAME_SCREEN.QUESTION_PAGE && <QuestionPage />}
      {mode === GAME_SCREEN.FINAL_JEOPARDY_LANDING && <JeopardyLanding />}
      {/* Scoreboard */}
      <Scoreboard />
    </div>
  );
}
