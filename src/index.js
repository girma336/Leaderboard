import './style.css';
import './student.jpg';
import Scores from './module/StudeScore.js';
import postData from './module/sendingData.js';
import capitalize from './module/stringCap.js';
import getDataScores from './module/getingData.js';

const form = document.querySelector('.form-container');
const refreshBtn = document.querySelector('.ref-btn');
const nameValue = document.querySelector('.your-name');
const scoreValue = document.querySelector('.your-score');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newData = new Scores(capitalize(nameValue.value), scoreValue.value);
  postData(newData);
  nameValue.value = '';
  scoreValue.value = '';
});

refreshBtn.addEventListener('click', () => {
  getDataScores();
});
