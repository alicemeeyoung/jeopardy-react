import React, { useCallback } from 'react';
import finalJeopardySrc from '../content/img/finalJeopardy.jpg';
import { useStateValue } from './Redux';
import { TYPE_KEYS, GAME_SCREEN } from './types';
import { finalJeopardy } from './utilities/finalJeopardy';

const JeopardyLanding = () => {
  const [, dispatch] = useStateValue();
  const goToFinalQuestion = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch({
      type: TYPE_KEYS.SWITCH_VIEW,
      view: GAME_SCREEN.FINAL_JEOPARDY,
      question: finalJeopardy(),
    });
  }, []);

  return <img onClick={goToFinalQuestion} src={finalJeopardySrc} alt="final" width="50%" />;
};

export default JeopardyLanding;
