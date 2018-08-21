import { IPlayer } from './models/Player/entity';
import { IReducers } from './models/store';
import * as fromStore from './store';

const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;

button.addEventListener('click', addPlayerAndReset, false);

function addPlayerAndReset(): void {
  const name: string = input.value.trim();
  if (!name) return;
  const player: IPlayer = { name, selected: false };
  store.dispatch({ type: 'ADD_PLAYER', payload: player });
  console.log(store.value);
  input.value = '';
}

const reducers: IReducers = {
  players: fromStore.playersReducer,
};

const store = new fromStore.Store(reducers);

store.subscribe(state => console.log('STATE =>', state));
