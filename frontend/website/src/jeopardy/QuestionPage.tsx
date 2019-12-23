import * as React from 'react';
import styled from '@emotion/styled';

type QuestionProp = {
  value: number;
  question: string;
};

const Text = styled.span`
  font-size: 69px;
`;

export function QuestionPage({ value, question }: QuestionProp) {
  <Text>{question}</Text>;
}
