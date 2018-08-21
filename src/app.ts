import { IPlayer } from './models/Player/entity';
import { IReducers, IAction, IState } from './models/store';
import * as fromStore from './store';

const button = document.querySelector('button') as HTMLButtonElement;
const unsubscribeButton = document.querySelector(
  '.unsubscribe',
) as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;
const span = document.querySelector('span') as HTMLSpanElement;
const playerList = document.querySelector('.players') as HTMLLIElement;

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

const unsubscribe = store.subscribe((state: IState) => {
  renderPlayers(state.players.data);
});

unsubscribeButton.addEventListener('click', unsubscribe, false);

playerList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    const player = JSON.parse(target.getAttribute('data-player') as any);
    store.dispatch({ type: 'REMOVE_PLAYER', payload: player });
  }
});

function renderPlayers(players: IPlayer[]) {
  span.innerHTML = players.length.toString();
  playerList.innerHTML = '';

  for (const player of players) {
    playerList.innerHTML += `
      <li>
        ${player.name}
        <button type="button" data-player='${JSON.stringify(
          player,
        )}'> Delete </button>
      </li>
    `;
  }
}
