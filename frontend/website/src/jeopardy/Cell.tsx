import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from '../styles/board';

const Cell = ({ value, hasBeenSelected }: { value: string; hasBeenSelected: booleans }) => {
  const classes = useStyles();
  return (
    <Card onClick={() => console.log('hi')} className={classes.card}>
      {hasBeenSelected ? '' : value}
    </Card>
  );
};

export default Cell;
