import populateAllScore from './populatScore.js';

const getDataScores = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pFGg600ud18ulIgGDUTq/scores/',
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((data) => {
      const list = data.result;
      populateAllScore(list);
    });
};

export default getDataScores;