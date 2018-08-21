import { IPlayer } from '../player';

export interface IPlayerState {
  loading: boolean;
  loaded: boolean;
  data: IPlayer[];
}
