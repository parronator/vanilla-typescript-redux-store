import { IPlayersState } from '../models/Player/state';
import { IAction } from '../models/store';
import { IPlayer } from '../models/Player/entity';

export const initialState: IPlayersState = {
  loading: false,
  loaded: false,
  data: [{ name: 'Albert Parrón', selected: true }],
};

export function playersReducer(
  state: IPlayersState = initialState,
  action: IAction,
) {
  switch (action.type) {
    case 'ADD_PLAYER': {
      const player: IPlayer = action.payload;
      const data: IPlayer[] = [...state.data, player];
      return {
        ...state,
        data,
      };
    }
  }
  return state;
}
