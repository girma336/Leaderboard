const mainContainer = document.querySelector('.board-container');
const populateScore = (Data) => {
  const newDiv = document.createElement('div');
  newDiv.className = 'name-score';

  newDiv.innerHTML = `
   <div class="list-element">
   <p>${Data.user}: ${Data.score}</p>
   </div>`;

  mainContainer.appendChild(newDiv);
};

export default populateScore;