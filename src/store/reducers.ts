import { IPlayer } from '../models/player';

interface State {
  loading: boolean;
  loaded: boolean;
  data: IPlayer[];
}

export const initialState: State = {
  loading: false,
  loaded: false,
  data: [{ name: 'Albert Parrón', selected: true }]
};

export function reducer(
  state: State = initialState,
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
