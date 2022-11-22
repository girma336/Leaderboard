const saveScore = (newData) => {
  console.log(newData);
  let scoreList = [];
  if (localStorage.getItem('Score')) {
    scoreList = JSON.parse(localStorage.getItem('Score'));
  }
  scoreList.push(newData);
  localStorage.setItem('Score', JSON.stringify(scoreList));
};

export default saveScore;