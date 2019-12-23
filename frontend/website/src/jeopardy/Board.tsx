import React from 'react';
import GameAPI from './GameAPI.json';
import Cell from './Cell';
import Column from './Column';


const Board = () => {
  console.log(GameAPI);
  // For each game API show a column
  return GameAPI.map((category: GameQuestion[], index: number) => {
    const categoryName = Object.keys(category);
    return <Cell value={categoryName[0]} />;
  });
};

export default Board;
