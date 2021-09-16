const inputElem = document.querySelector('[type="text"]');
const spanElem = document.querySelector('#name-output');

inputElem.addEventListener('input', onInputChange);
function onInputChange(event) {
  const input = event.currentTarget;

  spanElem.textContent = input.value ? input.value : 'незнакомец';
};

