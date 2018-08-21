import { IReducers, IState, IAction } from '../models/store';

export class Store {
  private subscribers: Function[];
  private reducers: IReducers;
  private state: IState;

  constructor(reducers: IReducers = {}, initialState: IState = {}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {} as IAction);
  }

  get value(): IState {
    return this.state;
  }

  dispatch(action: IAction): void {
    this.state = this.reduce(this.state, action);
  }

  private reduce(state: IState, action: IAction): IState {
    const newState: IState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}
