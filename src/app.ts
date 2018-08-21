import { IPlayer } from './models/Player/entity';
import * as fromStore from './store';
import { IAction } from './models/store';

const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;

button.addEventListener('click', addPlayerAndReset, false);

const store = new fromStore.Store(
  {},
  {
    players: [{ name: 'Albert Parrón', selected: true }],
  },
);

function addPlayerAndReset(): void {
  const name: string = input.value.trim();
  if (!name) return;
  const player: IPlayer = { name, selected: false };
  const action: IAction = { type: 'ADD_PLAYER', payload: player };
  store.dispatch(action);
  input.value = '';
}
