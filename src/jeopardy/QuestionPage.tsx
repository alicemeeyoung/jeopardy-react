import * as React from 'react';
import styled from '@emotion/styled';
import { useStateValue } from './Redux';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const Text = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 64px;
`;

const useQuestionCardStyles = makeStyles({
  card: {
    paddingTop: '12rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    margin: '0.2rem',
    backgroundColor: '#3F9FC9',
    color: 'white',
    minHeight: '3rem',
    minWidth: '3rem',
    textAlign: 'center',
    fontSize: '1.2rem',
    height: '21rem',
  },
});

export function QuestionPage() {
  const [{ question }] = useStateValue();
  const classes = useQuestionCardStyles();
  return <Card className={classes.card}>{question.value}</Card>;
}
