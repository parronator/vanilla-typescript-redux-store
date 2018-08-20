import { IPlayer } from './entity';

export interface IPlayerState {
  loading: boolean;
  loaded: boolean;
  data: IPlayer[];
}
