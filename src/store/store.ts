import { IReducer, IState } from '../models/store';

export class Store {
  private subscribers: Function[];
  private reducers: IReducer;
  private state: IState;

  constructor(reducers: IReducer = {}, initialState: IState = {}) {
    this.state = initialState;
  }

  get value(): IState {
    return this.state;
  }
}
