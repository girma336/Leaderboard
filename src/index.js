import './style.css';
import './student.jpg';
import populateScore from './module/populatScore.js';

const scoreList = [
  {
    user: 'John Doe',
    score: 42,
  },
  {
    user: 'Peter Parker',
    score: 35,
  },
  {
    user: 'Wonder Woman',
    score: 50,
  },
];
const mainContainer = document.querySelector('.board-container');
const populateAllScore = () => {
  mainContainer.innerHTML = '';

  scoreList.forEach((data) => {
    populateScore(data);
  });
};

const chechPromises = () => new Promise((resolve) => {
  if (scoreList) {
    resolve();
  }
});

async function init() {
  await chechPromises();
  populateAllScore();
}

init();