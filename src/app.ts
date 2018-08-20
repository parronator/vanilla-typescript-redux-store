import { IPlayer } from './models/Player/entity';
import * as fromStore from './store';

const reducers = {
  players: fromStore.reducer,
};

const store = new fromStore.Store(reducers);

const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;

button.addEventListener(
  'click',
  () => {
    const name: string = input.value.trim();
    if (!name) return;
    const player: IPlayer = { name, selected: false };
    store.dispatch({ type: 'ADD_PLAYER', payload: player });
    input.value = '';
  },
  false,
);

store.subscribe(state => console.log('STATE =>', state));
