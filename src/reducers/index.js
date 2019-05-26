export const states = {};

export const initialState = {
  rocks: []
};

// Actions
export const types = {
  LOADED_ROCKS: "LOADED_ROCKS",
  ADDED_NEW_ROCK: "ADDED_NEW_ROCK"
};

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADDED_NEW_ROCK:
      return {
        ...state,
        rocks: [...state.rocks, action.rock]
      };
    case types.LOADED_ROCKS:
      return {
        ...state,
        rocks: action.rocks
      };
    default:
      return state;
  }
}

// Action Creators
export function loadedRocks(rocks) {
  return { type: types.LOADED_ROCKS, rocks };
}
export function addedNewRock(rock) {
  return {
    type: types.ADDED_NEW_ROCK,
    rock
  };
}
