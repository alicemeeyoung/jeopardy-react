import * as React from 'react';
import styled from '@emotion/styled';
import { User, GAME_SCREEN } from './types';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';

type ScoreboardProps = { user: User; mode: string };

export function ScoreboardUsers({ user, mode }: ScoreboardProps) {
  const onChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    console.log('onChange', ev.target.value);
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
              <IconButton aria-label="add">
                <AddIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <RemoveIcon />
              </IconButton>
            </div>
          ))}
        {mode === GAME_SCREEN.FINAL_JEOPARDY && (
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={onChange} />
        )}
      </div>
    </>
  );
}
