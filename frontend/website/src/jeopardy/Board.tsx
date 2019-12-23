import React from 'react';
import GameAPI from './GameAPI.json';
import Cell from './Cell';
import Column from './Column';
import { GameQuestion } from './types';

const Board = () => {
  return GameAPI.map((category, index: number) => {
    const { categoryName, categoryInfo } = category;
    return (
      <div>
        {/* <Cell value={} /> */}
        {/* <Column questions={} /> */}
      </div>
    );
  });
};

export default Board;
