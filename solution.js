const rotateArray = (arr, rotations) => {
  let k = Number.POSITIVE_INFINITY;
  k = rotations > arr.length ? rotations % arr.length : rotations;
  return arr.slice(arr.length - k).concat(arr.slice(0, arr.length - k));
};

const rotations = 1;
const arr = [1, 2, 3, 4, 5];

const result = rotateArray(arr, rotations);

console.log("Result = ", result);
