//---------------------task--------------------

const rotateArray = (arr, k) => {
  const sliced = arr.slice();

  for (let i = 0; i < k; i++) {
    const rotated = sliced.pop();
    sliced.unshift(rotated);
  }
  return sliced;
};

module.exports = {
  rotateArray,
};
