const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement;

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;
    console.log(input.value);
    input.value = '';
  },
  false
);
