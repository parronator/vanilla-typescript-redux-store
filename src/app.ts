import { PlayerDTO } from './models/playerDTO';
import * as fromStore from './store';

const reducers = {
  players: fromStore.reducer
};

const store = new fromStore.Store(reducers);

const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;
const span = document.querySelector('span') as HTMLSpanElement;
const playerList = document.querySelector('.players') as HTMLLIElement;

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
store.subscribe(state => {
  renderPlayers(state.players.data);
});

function renderPlayers(players: PlayerDTO[]) {
  span.innerHTML = players.length.toString();
  playerList.innerHTML = '';

  for (const player of players) {
    playerList.innerHTML += `
      <li>
        ${player.name}
        <button type="button"> Delete </button
      </li>
    `;
  }
}
