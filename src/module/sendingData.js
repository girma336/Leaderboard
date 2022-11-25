const postData = async (newData) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/A4NZfQ4eyTEaDXUMcpW9/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    },
  );
};

export default postData;
