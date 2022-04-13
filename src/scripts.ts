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

const blueBoxEl = document.querySelectorAll<HTMLDivElement>('.js-blue-box');
const bodyEl = document.querySelector<HTMLBodyElement>('body');

const inputEl = document.querySelector<HTMLInputElement>('#my_input');
const inputTextEl = document.querySelector<HTMLTextAreaElement>('#input_text');

// Clicking on btn_01 changes box_01 background to yellow
btn01El.addEventListener('click', () => {
  box01El.style.backgroundColor = '#E2CF22';
});

// Clicking on btn_02 changes box_02 text to SUCCESS
btn02El.addEventListener('click', () => {
  box02El.innerText = 'SUCCESS';
});

// Clicking on btn_03 makes box_03 invisible
btn03El.addEventListener('click', () => {
  box03El.style.display = 'none';
});

// Clicking on btn_04 toggles box_04 visibility
btn04El.addEventListener('click', () => {
  if (box04El.style.display === 'none') {
    box04El.style.display = 'block';
  } else {
    box04El.style.display = 'none';
  }
});

// Clicking on btn_05 changes box_05 background to one of five possible colors
const bgColors = ['#017187', '#5C0187B5', '#8711018', '#01870EA0', '#011E87'];
btn05El.addEventListener('click', () => {
  box05El.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];
});

// Clicking on btn_06 makes number in box_06 increase by 1 every 3 seconds (stops at 10)
btn06El.addEventListener('click', () => {
  let btnCount = parseInt(box06El.innerText, 10);
  setInterval(() => {
    if (btnCount !== 10) {
      btnCount += 1;
      box06El.innerText = btnCount.toString(10);
    }
  }, 3000);
});

// Clicking on btn_07 changes all blue-box element BG colors to #18D5E1
// and body BG color changes to #000000
btn07El.addEventListener('click', () => {
  bodyEl.style.backgroundColor = '#000000';
  for (let i = 0; i < blueBoxEl.length; i += 1) {
    blueBoxEl[i].style.backgroundColor = '#18D5E1';
  }
});

// Hovering on box_01 changes its background to red
box01El.addEventListener('mouseenter', () => {
  box01El.style.backgroundColor = 'red';
});

box01El.addEventListener('mouseleave', () => {
  box01El.style.backgroundColor = ' #1FC2AE';
});

// Hovering mouse on box_05 its number increases by 1 (stops at 10)
// Moving the mouse away from box_05 resets and stops the count

let intervalCount: any;

box05El.addEventListener('mouseenter', () => {
  let btnCount = parseInt(box05El.innerText, 10);
  intervalCount = setInterval(() => {
    if (btnCount !== 10) {
      btnCount += 1;
      box05El.innerText = btnCount.toString(10);
    }
  }, 1000);
});

box05El.addEventListener('mouseleave', () => {
  clearInterval(intervalCount);
  box05El.innerText = '0';
});

// While filling in input field, the text also appears under it
const updateValue = (t: { target: { value: string; }; }) => {
  inputTextEl.textContent = t.target.value;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
inputEl.addEventListener('input', updateValue);
