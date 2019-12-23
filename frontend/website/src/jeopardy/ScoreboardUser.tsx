import * as React from 'react';
import styled from '@emotion/styled';
import { User, GAME_SCREEN } from './types';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import { useStateValue } from './Redux';
import { TYPE_KEYS } from './types';

type ScoreboardProps = { user: User; mode: string };

export function ScoreboardUser({ user, mode }: ScoreboardProps) {
  const [wager, changeWager] = React.useState();
  const [
    {
      question: { points },
    },
    dispatch,
  ] = useStateValue();
  const onChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      ev.preventDefault();
      const { value } = ev.target;
      console.log({ value });
      changeWager(value);
    },
    [changeWager],
  );
  const addPoints = React.useCallback((ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault();
    dispatch({ type: TYPE_KEYS.ADD_POINTS, userName: user.name, points });
  }, []);
  const subtractPoints = React.useCallback((ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault();
    dispatch({ type: TYPE_KEYS.SUBTRACT_POINTS, userName: user.name, points });
  }, []);
  return (
    <>
      <div>
        <div>
          <div>{user.name}</div>
          <div>{user.score}</div>
        </div>
        {mode === GAME_SCREEN.QUESTION_PAGE ||
          (mode === GAME_SCREEN.FINAL_JEOPARDY && (
            <div>
              <IconButton aria-label="add" onClick={addPoints}>
                <AddIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={subtractPoints}>
                <RemoveIcon />
              </IconButton>
            </div>
          ))}
        {mode === GAME_SCREEN.FINAL_JEOPARDY && (
          <TextField id="outlined-basic" label="Wager" variant="outlined" onChange={onChange} />
        )}
      </div>
    </>
  );
}
