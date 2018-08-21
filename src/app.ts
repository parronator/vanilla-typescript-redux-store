import { IPlayer } from './models/Player/entity';
import { IReducers, IAction } from './models/store';
import * as fromStore from './store';

const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;

button.addEventListener('click', addPlayerAndReset, false);

function addPlayerAndReset(): void {
  const name: string = input.value.trim();
  if (!name) return;
  const player: IPlayer = { name, selected: false };
  const action: IAction = { type: 'ADD_PLAYER', payload: player };
  store.dispatch(action);
  console.log(store.value);
  input.value = '';
}

const reducers: IReducers = {
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
