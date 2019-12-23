export type User = {
  name: string;
  score: number;
};

export const GAME_SCREEN = {
  QUESTION_PAGE: 'QUESTION_PAGE',
  BOARD_PAGE: 'BOARD_PAGE',
  FINAL_JEOPARDY: 'FINAL_JEOPARDY',
} as const;

export type GameQuestion = {
  points: number;
  value: string;
  isDailyDouble: boolean;
  hasBeenSelected: boolean;
};

export type GameCategory = {
  CategoryName: string;
  CategoryInfo: GameQuestion[];
};
