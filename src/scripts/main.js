'use strict';

const numbersSpan = [...document.querySelectorAll('.population')];

/* eslint-disable function-paren-newline */
const numbers = numbersSpan.map((i) =>
  parseInt(i.innerText.replaceAll(',', '')),
);

const sum = numbers.reduce((prev, item) => prev + item, 0);
const avg = Math.round(sum / numbers.length);

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerText = toStringWithSeparator(sum);
average.innerText = toStringWithSeparator(avg);

function toStringWithSeparator(number) {
  const numberOfString = number.toString().split('');
  const stringLength = numberOfString.length;
  let count =
    stringLength % 3 === 0
      ? stringLength / 3 - 1
      : Math.floor(stringLength / 3);

  for (let index = stringLength - 3; count > 0; count--) {
    numberOfString.splice(index, 0, ',');
    index -= 3;
  }

  return numberOfString.join('');
}
