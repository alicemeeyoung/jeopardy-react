import React from 'react';
import { GameQuestion } from './types';

const Column = ({ questions }: GameQuestion[]) => {
  console.log({ questions });

  return <div>Hi I'm a column</div>;
};

export default Column;
