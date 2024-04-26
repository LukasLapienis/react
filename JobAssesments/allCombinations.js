// function getAllSubsets(array) {
//   const target = 10000;
//   const subsets = [[]];
//   let counter = 1;
//   let isTrue = false;
//   for (let i = 0; i < array.length; i++) {
//     const currentLength = subsets.length;
//     const currentCount = counter;
//     for (let j = 0; j < currentLength; j++) {
//       const subset = subsets[j].concat(array[i]);
//       subsets.push(subset);
//       counter = counter + 1;
//       let sum = 0;

//       for (let numberCount = 0; numberCount < subset.length; numberCount++) {
//         sum += subset[numberCount];
//       }
//       // console.log(sum);
//       if (sum === target) {
//         isTrue = true;
//         break;
//       }
//     }
//     if (isTrue) {
//       break;
//     }
//   }
//   console.log(subsets);
//   console.log(counter);
//   return subsets;
// }

// const inputArray = [1, 2, 3];
// const combinations = getAllSubsets(inputArray);
// // console.log(combinations);

function getCombinations(valuesArray) {
  var combi = [];
  var temp = [];
  var slent = Math.pow(2, valuesArray.length);

  for (var i = 0; i < slent; i++) {
    temp = [];
    for (var j = 0; j < valuesArray.length; j++) {
      if (i & Math.pow(2, j)) {
        temp.push(valuesArray[j]);
      }
    }
    if (temp.length > 0) {
      combi.push(temp);
    }
  }

  // combi.sort((a, b) => a.length - b.length);
  // console.log(combi.join('\n'));
  return combi;
}
