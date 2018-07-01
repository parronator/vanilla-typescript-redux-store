export const initialState = {
  loading: false,
  loaded: false,
  data: [{ name: 'Albert Parrón', selected: true }]
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case 'ADD_PLAYER': {
      const player = action.payload;
      const data = [...state.data, player];
      return {
        ...state,
        data
      };
    }
  }
  return state;
}
