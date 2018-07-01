import { PlayerDTO } from './models/playerDTO';
import * as fromStore from './store';

const store = new fromStore.Store(
  {},
  {
    players: [{ name: 'Albert Parrón', selected: true }]
  }
);

console.log(store.value);

const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;

button.addEventListener(
  'click',
  () => {
    const playerName: string = input.value.trim();
    if (!playerName) return;
    const player: PlayerDTO = createPlayer(playerName);
    console.log(player);
    input.value = '';
  },
  false
);

function createPlayer(name: string): PlayerDTO {
  return { name, selected: false };
}
