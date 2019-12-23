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

const Centered = styled.div`
  text-align: center;
`;

const ScoreText = styled.div`
  font-size: 30px;
`;

export function ScoreboardUser(props: ScoreboardProps) {
  const { user, mode } = props;
  const [wager, changeWager] = React.useState();
  const [{ question }, dispatch] = useStateValue();
  const points = question ? question.points : null;
  const onChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      ev.preventDefault();
      const { value } = ev.target;
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
    <Centered>
      <div>
        <div>{user.name}</div>
        <ScoreText>{user.score}</ScoreText>
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
    </Centered>
  );
}
