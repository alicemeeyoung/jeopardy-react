import React from 'react';
import GameAPI from './GameAPI.json';
import Cell from './Cell';
import Column from './Column';
import { GameCategory } from './types';

const Board = () => {
  return GameAPI.map((category: GameCategory, index: number) => {
    const { categoryName, categoryInfo } = category;
    return (
      <React.Fragment>
        <Cell value={categoryName} />
        <Column questions={categoryInfo} />
      </React.Fragment>
    );
  });
};

export default Board;
