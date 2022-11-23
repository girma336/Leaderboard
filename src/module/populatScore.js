const mainContainer = document.querySelector('.board-container');

function populateAllScore(list) {
  mainContainer.innerHTML = '';
  const newList = list.map((item) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'name-score';

    newDiv.innerHTML = `
   <div class="list-element">
   <p>${item.user}: ${item.score}</p>
   </div>`;
    return newDiv;
  });

  newList.forEach((element) => {
    mainContainer.appendChild(element);
  });
}

export default populateAllScore;
