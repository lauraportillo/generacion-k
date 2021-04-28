'use strict';

const hieroglyphsContainer = document.querySelector('.js-hieroglyphs');
const solutionContainer = document.querySelector('.js-solution');
const buttonElement = document.querySelector('.js-btn');
const resetElement = document.querySelector('.js-reset');

const message = 'Cómo será dar con Nekgikis V...';
const numbers = [23, 24, 25, 18, 19, 5, 6, 7, 20, 15, 17, 8, 10, 11, 4, 3, 12, 2, 16, 14, 9, 21, 0, 1, 13, 22];
const hieroglyphs = '𓀪 𓁢 𓁹 𓄿 𓀪 𓀃 𓁢 𓄿 𓀪 𓀃 𓁢 𓁹 𓄿';

const messageNoSpaces = message.replace(/ /g, '');
const messageLowecase = messageNoSpaces.toLowerCase();
const removeAccents = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
const messageClean = removeAccents(messageLowecase);

let data = [];
const getData = () => {
  for (let i = 0; i < messageClean.length; i++) {
    const letter = messageClean[i];
    const id = numbers[i];
    data.push({ letter, id });
  }
};
getData();

const handleBtn = (evt) => {
  evt.preventDefault();
  paintSolution();
};

hieroglyphsContainer.innerHTML = hieroglyphs;
hieroglyphsContainer.classList.add('sectionC__solution--hieroglyphs');

const paintSolution = () => {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    const letter = data[i].letter;

    html += `<span>`;
    html += `${letter}`;
    html += `</span>`;
  }
  solutionContainer.innerHTML = html;
  hieroglyphsContainer.classList.remove('sectionC__solution--hieroglyphs');
  hieroglyphsContainer.classList.add('sectionC__solution--none');
};

data.sort(function (a, b) {
  return a.id - b.id;
});

function resetInfo() {
  location.reload();
}

buttonElement.addEventListener('click', handleBtn);
resetElement.addEventListener('click', resetInfo);
