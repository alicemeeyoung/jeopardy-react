import produce from 'immer';
import { ActionTypes, StateType } from '../types';

export const ACTIONS = {
  SUBTRACT_POINTS: 'SUBTRACT_POINTS',
  ADD_POINTS: 'ADD_POINTS',
} as const;

// type ACTIONS_TYPE = typeof ACTIONS;
// type ACTIONS_KEYS = keyof ACTIONS_TYPE;
// type ACTIONS_VALUES = ACTIONS_TYPE[ACTIONS_KEYS];

export function reducer(state: StateType, action: ActionTypes) {
  return produce<StateType>(state, draft => {
    switch (action.type) {
      case ACTIONS.SUBTRACT_POINTS: {
        const { userName, points } = action;
        const userIndex = draft.users.findIndex(user => user.name === userName);
        if (userIndex || userIndex === 0) {
          draft.users[userIndex].score -= points;
        }
        return;
      }
      case ACTIONS.ADD_POINTS: {
        const { userName, points } = action;
        const userIndex = draft.users.findIndex(user => user.name === userName);
        if (userIndex || userIndex === 0) {
          draft.users[userIndex].score += points;
        }
        return;
      }
      default:
        return state;
    }
  });
}
