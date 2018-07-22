import { IPlayer } from './models/player';
import * as fromStore from './store';

const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;
const span = document.querySelector('span') as HTMLSpanElement;
const playerList = document.querySelector('.players') as HTMLLIElement;

button.addEventListener('click', addPlayerAndReset, false);

const reducers: { [key: string]: Function } = {
  players: fromStore.reducer
};

const store = new fromStore.Store(reducers);

store.subscribe(state => console.log('STATE =>', state));
store.subscribe(state => {
  renderPlayers(state.players.data);
});

function addPlayerAndReset() {
  const playerName: string = input.value.trim();
  if (!playerName) return;
  const player: IPlayer = { name: playerName, selected: false };
  store.dispatch({ type: 'ADD_PLAYER', payload: player });
  input.value = '';
}

function renderPlayers(players: IPlayer[]) {
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
