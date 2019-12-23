import * as React from 'react';
import styled from '@emotion/styled';
import { useStateValue } from './Redux';

const Text = styled.span`
  font-size: 69px;
`;

export function QuestionPage() {
  const [{ question }] = useStateValue();
  return <Text>{question.value}</Text>;
}
