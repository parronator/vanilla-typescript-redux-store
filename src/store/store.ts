import { IReducers, IState, IAction } from '../models/store';

export class Store {
  private subscribers: Function[];
  private reducers: IReducers;
  private state: IState;

  constructor(reducers: IReducers = {}, initialState: IState = {}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {} as IAction);
    this.subscribers = [];
  }

  get value(): IState {
    return this.state;
  }

  dispatch(action: IAction): void {
    this.state = this.reduce(this.state, action);
    this.notify();
  }

  subscribe(fn: Function) {
    this.subscribers = [...this.subscribers, fn];
    this.notify();
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn);
    };
  }

  private notify(): void {
    this.subscribers.forEach(fn => fn(this.value));
  }

  private reduce(state: IState, action: IAction): IState {
    const newState: IState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}
