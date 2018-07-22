import { IReducers, IState } from '../models/store';

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
}
