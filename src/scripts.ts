const btn01El = document.querySelector<HTMLButtonElement>('#btn_01');
const btn02El = document.querySelector<HTMLButtonElement>('#btn_02');
const btn03El = document.querySelector<HTMLButtonElement>('#btn_03');
const btn04El = document.querySelector<HTMLButtonElement>('#btn_04');
const btn05El = document.querySelector<HTMLButtonElement>('#btn_05');
const btn06El = document.querySelector<HTMLButtonElement>('#btn_06');
const btn07El = document.querySelector<HTMLButtonElement>('#btn_07');

const box01El = document.querySelector<HTMLDivElement>('#box_01');
const box02El = document.querySelector<HTMLDivElement>('#box_02');
const box03El = document.querySelector<HTMLDivElement>('#box_03');
const box04El = document.querySelector<HTMLDivElement>('#box_04');
const box05El = document.querySelector<HTMLDivElement>('#box_05');
const box06El = document.querySelector<HTMLDivElement>('#box_06');

// Clicking on btn_01 changes box_01 background to yellow
btn01El.addEventListener('click', () => {
  box01El.style.backgroundColor = 'yellow';
});
// Clicking on btn_02 changes box_02 text to SUCCESS
btn02El.addEventListener('click', () => {
  box02El.innerText = 'SUCCESS';
});
// Clicking on btn_03 makes box_03 invisible
btn03El.addEventListener('click', () => {
  box03El.style.display = 'none';
});
