import './style.css';
import './student.jpg';
import Scores from './module/StudeScore.js';
import postData from './module/sendingData.js';
import capitalize from './module/stringCap.js';
import getDataScores from './module/getingData.js';
import succesFull from './module/succesfull.js';

const closeNew = document.querySelector('.successefull');

const form = document.querySelector('.form-container');
const refreshBtn = document.querySelector('.ref-btn');
const nameValue = document.querySelector('.your-name');
const scoreValue = document.querySelector('.your-score');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newData = new Scores(capitalize(nameValue.value), scoreValue.value);
  postData(newData);
  succesFull();
  const closeBtn = document.querySelector('#close');
  closeNew.classList.add('suc-green');
  closeBtn.addEventListener('click', () => {
    closeNew.classList.add('closeTab');
  });
  nameValue.value = '';
  scoreValue.value = '';
});

refreshBtn.addEventListener('click', () => {
  getDataScores();
});


