import * as React from 'react';
import styled from '@emotion/styled';
import { useStateValue } from '../../Redux';
import dailyDouble from './dailyDouble.png';
import { TYPE_KEYS, GAME_SCREEN } from '../../types';

const Centered = styled.div`
  margin: auto;
  text-align: center;
`;

export function DailyDouble() {
  const [, dispatch] = useStateValue();
  const onClick = React.useCallback(
    ev => {
      ev.preventDefault();
      dispatch({ type: TYPE_KEYS.SWITCH_VIEW, view: GAME_SCREEN.QUESTION_PAGE });
    },
    [dispatch],
  );
  return (
    <Centered onClick={onClick}>
      <img src={dailyDouble} />
    </Centered>
  );
}
