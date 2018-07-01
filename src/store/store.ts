export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  dispatch(action) {
    this.state = {
      ...this.state,
      players: [...this.state.players, action.payload]
    };
    console.log(this.state);
  }
}
