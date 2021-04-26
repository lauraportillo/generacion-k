'use strict';

const solutionContainer = document.querySelector('.js-solution');

const message = 'Cómo será dar con Nekgikis V...';
const numbers = [23, 24, 25, 18, 19, 5, 6, 7, 20, 15, 17, 8, 10, 11, 4, 3, 12, 2, 16, 14, 9, 21, 0, 1, 13, 22];

const messageNoSpaces = message.replace(/ /g, '');
const messageLowecase = messageNoSpaces.toLowerCase();
const removeAccents = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
const messageClean = removeAccents(messageLowecase);

let data = [];
function getData() {
  for (let i = 0; i < messageClean.length; i++) {
    const letter = messageClean[i];
    const id = numbers[i];
    data.push({ letter, id });
  }
}
getData();

const paintSolution = () => {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    const letter = data[i].letter;

    html += `<span>`;
    html += `${letter}`;
    html += `</span>`;
  }
  solutionContainer.innerHTML = html;
};

data.sort(function (a, b) {
  return a.id - b.id;
});

paintSolution();
