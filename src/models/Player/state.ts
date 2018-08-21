import { IPlayer } from './entity';

export interface IPlayersState {
  loading: boolean;
  loaded: boolean;
  data: IPlayer[];
}
