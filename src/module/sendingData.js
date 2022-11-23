const postData = async (newData) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pFGg600ud18ulIgGDUTq/scores/',
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
