import { IReducers, IState, IAction } from '../models/store';

export class Store {
  private subscribers: Function[];
  private reducers: IReducers;
  private state: IState;

  constructor(reducers: IReducers = {}, initialState: IState = {}) {
    this.state = initialState;
  }

  get value(): IState {
    return this.state;
  }

  dispatch(action: IAction): void {
    this.state = {
      ...this.state,
      players: [...this.state.players, action.payload],
    };
    console.log(this.state);
  }
}
