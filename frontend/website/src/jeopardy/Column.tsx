import React from 'react';
import Cell from './Cell';
import { GameQuestion } from './types';

const Column = ({ questions }: { questions: GameQuestion[] }) => {
  return (
    <>
      {questions.map((question, index) => {
        const { value } = question;
        return <Cell key={value} value={value} />;
      })}
    </>
  );
};

export default Column;
