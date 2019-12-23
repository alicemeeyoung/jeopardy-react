export type User = {
  name: string;
  score: number;
};

export type GameQuestion = {
  points: number;
  value: string;
  isDailyDouble: boolean;
  hasBeenSelected: boolean;
};

export type GameCategory = {
  categoryName: string;
  categoryInfo: GameQuestion[];
};

export const GAME_SCREEN = {
  QUESTION_PAGE: 'QUESTION_PAGE',
  BOARD_PAGE: 'BOARD_PAGE',
  FINAL_JEOPARDY: 'FINAL_JEOPARDY',
} as const;

export const TYPE_KEYS = {
  SUBTRACT_POINTS: 'SUBTRACT_POINTS',
  ADD_POINTS: 'ADD_POINTS',
} as const;

type ACTIONS_TYPE = typeof TYPE_KEYS;
type ACTIONS_KEYS = keyof ACTIONS_TYPE;
export type ACTIONS_VALUES = ACTIONS_TYPE[ACTIONS_KEYS];

export type ADD_POINTS = {
  type: ACTIONS_TYPE['ADD_POINTS'];
  userName: string;
  points: number;
};

export type SUBTRACT_POINTS = {
  type: ACTIONS_TYPE['SUBTRACT_POINTS'];
  userName: string;
  points: number;
};

export type ActionTypes = ADD_POINTS | SUBTRACT_POINTS;

export type Question = {
  points: number;
  // Question
  value: string;
};

export type StateType = {
  users: User[];
  question: Question;
};
