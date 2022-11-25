const successMeg = document.querySelector('.successefull');

const succesFull = () => {
  successMeg.innerHTML = '';
  const newDivSuc = document.createElement('div');
  newDivSuc.className = 'suc';
  newDivSuc.innerHTML = `
    <i id="close" class="fa-solid fa-close"></i>
    <p class="succes-ful">Leaderboard score created correctly</p>
    `;
  successMeg.appendChild(newDivSuc);
};

export default succesFull;