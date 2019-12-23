import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    padding: '1rem',
    margin: '0.2rem',
    backgroundColor: 'blue',
    color: 'yellow',
  },
});

const Cell = ({ value }: { value: string }) => {
  const classes = useStyles();
  return <Card className={classes.card}>{value}</Card>;
};

export default Cell;
