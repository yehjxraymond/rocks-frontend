export const states = {};

export const initialState = {
  rocks: [
    {
      name: "Andesite",
      image:
        "https://mineralseducationcoalition.org/wp-content/uploads/andesite_366069737.jpg",
      weight: 13.5,
      engraving: "I'm made of Andesite",
      location: {
        lat: 1.336876,
        lng: 103.710109
      }
    },
    {
      name: "Diorite",
      weight: 0.15,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81TVw5AlEkL._SX425_.jpg",
      engraving: "I'm made of Diorite",
      location: {
        lat: 1.330276,
        lng: 103.752822
      }
    },
    {
      name: "Obsidian",
      weight: 3.25,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61Fk1UKrbcL._SX425_.jpg",
      engraving: "I'm made of Obsidian",
      location: {
        lat: 1.385251,
        lng: 103.849702
      }
    }
  ]
};

// Actions
export const types = {
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
    default:
      return state;
  }
}

// Action Creators
export function addedNewRock(rock) {
  return {
    type: types.ADDED_NEW_ROCK,
    rock
  };
}
