import React, { useCallback } from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from '../styles/board';
import { TYPE_KEYS } from './types';
import { useStateValue } from './Redux';
const Cell = ({
  points,
  category,
  hasBeenSelected,
}: {
  points: number;
  category: string;
  hasBeenSelected: boolean;
}) => {
  const classes = useStyles();
  const [{ question }, dispatch] = useStateValue();
  const selectCell = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch({ type: TYPE_KEYS.SELECT_CELL, points, category });
  }, []);

  return (
    <Card onClick={selectCell} className={classes.card}>
      {hasBeenSelected ? ' ' : `$${points}`}
    </Card>
  );
};

export default Cell;
