import * as React from 'react';
import { QuestionPage } from './QuestionPage';
import JeopardyLanding from './JeopardyLanding';
import Board from './Board';
import { DailyDouble } from './pages/DailyDouble/DailyDouble';
import { Scoreboard } from './pages/Scoreboard/Scoreboard';
import { WinnerPage } from './pages/Scoreboard/Winner/Winner';
import { useStateValue } from './Redux';
import { GAME_SCREEN } from './types';

export function GameLayout() {
  const [{ mode }] = useStateValue();
  return mode === GAME_SCREEN.WINNER ? (
    <WinnerPage />
  ) : (
    <div css={{ textAlign: 'center' }}>
      <h3 className="center">Jeopardy</h3>
      {mode === GAME_SCREEN.DAILY_DOUBLE_LANDING && <DailyDouble />}
      {mode === GAME_SCREEN.BOARD_PAGE && <Board />}
      {(mode === GAME_SCREEN.QUESTION_PAGE || mode === GAME_SCREEN.FINAL_JEOPARDY) && (
        <QuestionPage />
      )}
      {mode === GAME_SCREEN.FINAL_JEOPARDY_LANDING && <JeopardyLanding />}
      <Scoreboard />
    </div>
  );
}
