import React from 'react';
import GameAPI from './GameAPI.json';
import Cell from './Cell';
import Column from './Column';
import { GameCategory } from './types';
import { BoardContainer, CompleteColumn } from '../styles/board';

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
