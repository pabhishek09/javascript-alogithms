document.write('<p>Merge sort</p>');

// [5, 7, 4, 6, 2, 9, 3] - Divide into two arrays from a median element
// [5, 7, 4] [6, 2, 9, 3] - Break it down to smaller arrays 
// Write a stiching  algorithm to merge the smaller arrays into a single sorted array

function mergeSort(inputArr) {
  console.log('Merge Sort called with', inputArr.slice());
  if (inputArr.length < 2) {
    return inputArr;
  }
   
  const length = inputArr.length;
  const middle = Math.floor(length/2);
  const left = inputArr.slice(0, middle);
  const right = inputArr.slice(middle);
  
  console.log({left, right});

  const sortedLeft = mergeSort(left.slice());
  const sortedRight = mergeSort(right.slice());

  return stitch(sortedLeft, sortedRight);
}

function stitch(stichLeft, stichRight) {
  console.log('Stiching algorithm was called with',  stichLeft.slice(), stichRight.slice());
  const results = [];
  while (stichLeft.length && stichRight.length) {
    
    if (stichLeft[0] <= stichRight[0]) {
      results.push(stichLeft.shift());
    }
    else {
      results.push(stichRight.shift());
    }
  }
  
  return results.concat(stichLeft, stichRight);
}

export default mergeSort;
