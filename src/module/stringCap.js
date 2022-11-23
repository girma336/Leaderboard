const capitalize = (str) => {
  const strNew = str.trim().split(/\s+/);
  const strOne = strNew[0];
  const strTwo = strNew[1];
  if (!strTwo) {
    return `${strOne.charAt(0).toUpperCase() + strOne.slice(1)}`;
  } else {
    return `${strOne.charAt(0).toUpperCase() + strOne.slice(1)} ${strTwo.charAt(0).toUpperCase() + strTwo.slice(1)}`;
  }
};

export default capitalize;