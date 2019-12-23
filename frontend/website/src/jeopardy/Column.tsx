import React from 'react';
import Cell from './Cell';
import { GameQuestion } from './types';
import { Questions } from '../styles/board';

const Column = ({ questions }: { questions: GameQuestion[] }) => {
  return (
    <Questions>
      {questions.map((question, index) => {
        const { value, points } = question;
        return <Cell key={value} value={'$' + points} />;
      })}
    </Questions>
  );
};

export default Column;
