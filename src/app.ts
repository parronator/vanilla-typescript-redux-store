import { IPlayer } from './models/Player/entity';
import * as fromStore from './store';

const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;
const span = document.querySelector('span') as HTMLSpanElement;
const playerList = document.querySelector('.players') as HTMLLIElement;

button.addEventListener('click', addPlayerAndReset, false);

function addPlayerAndReset() {
  const playerName: string = input.value.trim();
  if (!playerName) return;
  const player: IPlayer = { name: playerName, selected: false };
  const action: IAction = { type: 'ADD_PLAYER', payload: player };
  store.dispatch(action);
  input.value = '';
}

const reducers: IReducer = {
  players: fromStore.playersReducer,
};

const store = new fromStore.Store(reducers);

store.subscribe(state => console.log('STATE =>', state));
store.subscribe(state => {
  renderPlayers(state.players.data);
});

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
