import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from '../styles/board';

const CategoryCell = ({ value, hasBeenSelected }: { value: string; hasBeenSelected: boolean }) => {
  const classes = useStyles();
  return <Card className={classes.card}>{hasBeenSelected ? '' : value}</Card>;
};

export default CategoryCell;
