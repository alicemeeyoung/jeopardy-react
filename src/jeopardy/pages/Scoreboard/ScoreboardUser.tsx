import * as React from 'react';
import styled from '@emotion/styled';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import { useStateValue } from '../../Redux';
import { User, GAME_SCREEN, TYPE_KEYS } from '../../types';

type ScoreboardProps = { user: User };

const Centered = styled.div`
  text-align: center;
`;

const ScoreText = styled.div`
  font-size: 32px;
  padding: 16px;
`;

export function ScoreboardUser(props: ScoreboardProps) {
  const { user } = props;
  const [wager, changeWager] = React.useState('');
  const [{ question, mode }, dispatch] = useStateValue();
  const questionPoints = question?.points ?? 0;
  const points = question?.isDailyDouble ? questionPoints * 2 : questionPoints;
  const onChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      ev.preventDefault();
      const { value } = ev.target;
      changeWager(value);
    },
    [changeWager],
  );
  const addPoints = React.useCallback(
    (ev: React.MouseEvent<HTMLElement>) => {
      ev.preventDefault();
      if (mode === GAME_SCREEN.FINAL_JEOPARDY) {
        const newPoints = Number(wager);
        dispatch({ type: TYPE_KEYS.ADD_POINTS, userName: user.name, points: newPoints });
      } else {
        dispatch({ type: TYPE_KEYS.ADD_POINTS, userName: user.name, points });
        dispatch({ type: TYPE_KEYS.SWITCH_VIEW, view: GAME_SCREEN.BOARD_PAGE });
      }
    },
    [mode, user.name, points, dispatch, wager],
  );
  const subtractPoints = React.useCallback(
    (ev: React.MouseEvent<HTMLElement>) => {
      ev.preventDefault();
      if (mode === GAME_SCREEN.FINAL_JEOPARDY) {
        const newPoints = Number(wager);
        dispatch({ type: TYPE_KEYS.SUBTRACT_POINTS, userName: user.name, points: newPoints });
      } else {
        dispatch({ type: TYPE_KEYS.SUBTRACT_POINTS, userName: user.name, points });
      }
    },
    [mode, user.name, points, dispatch, wager],
  );

  return (
    <Centered>
      <div>
        <div>{user.name}</div>
        <ScoreText>{user.score}</ScoreText>
      </div>
      {(mode === GAME_SCREEN.QUESTION_PAGE || mode === GAME_SCREEN.FINAL_JEOPARDY) && (
        <div>
          <IconButton aria-label="add" onClick={addPoints}>
            <AddIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={subtractPoints}>
            <RemoveIcon />
          </IconButton>
        </div>
      )}
      {mode === GAME_SCREEN.FINAL_JEOPARDY && (
        <TextField id="outlined-basic" label="Wager" variant="outlined" onChange={onChange} />
      )}
    </Centered>
  );
}
