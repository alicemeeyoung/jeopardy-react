import * as React from 'react';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import { GAME_SCREEN, TYPE_KEYS } from '../../types';
import { ScoreboardUser } from './ScoreboardUser';
import { useStateValue } from '../../Redux';

const ScoreboardRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  bottom: 0;
`;

const ScoreboardContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export function Scoreboard() {
  const [{ users, mode }, dispatch] = useStateValue();
  const announceWinner = React.useCallback(
    (ev: React.MouseEvent<HTMLElement>) => {
      ev.preventDefault();
      dispatch({ type: TYPE_KEYS.SWITCH_VIEW, view: GAME_SCREEN.WINNER });
    },
    [dispatch],
  );
  return (
    <ScoreboardContainer>
      <ScoreboardRow>
        {users && users.map(user => <ScoreboardUser key={user.name} user={user} />)}
      </ScoreboardRow>
      {mode === GAME_SCREEN.FINAL_JEOPARDY && (
        <Button onClick={announceWinner}>
          <div>Announce Winner</div>
        </Button>
      )}
    </ScoreboardContainer>
  );
}
