import React from 'react';
import GameAPI from './GameAPI.json';
import Cell from './Cell';
import Column from './Column';
import { GameCategory, API } from './types';
import { BoardContainer, CompleteColumn } from '../styles/board';

function isBoardCleared(api: API) {
  return api.some(({ categoryInfo }) => {
    const remainingQuestions = categoryInfo.filter(question => !question.hasBeenSelected).length;
    return remainingQuestions > 0;
  });
}

const Board = () => {
  return (
    <BoardContainer>
      {GameAPI.map((category: GameCategory, index: number) => {
        const { categoryName, categoryInfo } = category;
        return (
          <CompleteColumn>
            <Cell value={categoryName} />
            <Column questions={categoryInfo} />
          </CompleteColumn>
        );
      })}
    </BoardContainer>
  );
};

export default Board;
