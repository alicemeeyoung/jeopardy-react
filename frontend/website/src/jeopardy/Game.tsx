import * as React from 'react';
import styled from '@emotion/styled';
import Board from './Board';

type QuestionProp = {
  value: number;
  question: string;
};

const Text = styled.span`
  font-size: 69px;
`;

export function Game() {
  console.log('hi');
  return (
    <>
      <Board />
      <div />
      <span>hello</span>
      {/* Scoreboard */}
      <div />
    </>
  );
}
