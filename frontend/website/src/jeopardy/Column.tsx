import React from 'react';
import Cell from './Cell';
import { GameQuestion } from './types';
import { Questions } from '../styles/board';

const Column = ({ questions }: { questions: GameQuestion[] }) => {
  return (
    <Questions>
      {questions.map((question, index) => {
        const { value, points, hasBeenSelected } = question;
        return <Cell key={value} value={'$' + points} hasBeenSelected={hasBeenSelected} />;
      })}
    </Questions>
  );
};

export default Column;
