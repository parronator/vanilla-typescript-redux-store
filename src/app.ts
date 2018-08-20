import { IPlayer } from './models/Player/entity';
import * as fromStore from './store';

const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;

button.addEventListener('click', addPlayerAndReset, false);

const store = new fromStore.Store(
  {},
  {
    players: [{ name: 'Albert Parrón', selected: true }]
  }
);
console.log(store.value);

function addPlayerAndReset(): void {
  const name: string = input.value.trim();
  if (!name) return;
  const player: IPlayer = { name, selected: false };
  console.log(player);
  input.value = '';
}
