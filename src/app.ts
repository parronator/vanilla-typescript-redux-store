import { PlayerDTO } from './models/playerDTO';
import * as fromStore from './store';

const reducers = {
  players: fromStore.reducer
};

const store = new fromStore.Store(reducers);

const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;

button.addEventListener(
  'click',
  () => {
    const playerName: string = input.value.trim();
    if (!playerName) return;
    const player: PlayerDTO = createPlayer(playerName);
    store.dispatch({ type: 'ADD_PLAYER', payload: player });
    input.value = '';
  },
  false
);

function createPlayer(name: string): PlayerDTO {
  return { name, selected: false };
}

store.subscribe(state => console.log('STATE =>', state));
