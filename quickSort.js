write('quick sort');

// [5, 7, 4, 6, 2, 9, 3] - Last element becomes the pivot
// [2] 3 [5, 7, 4, 6, 9] - Create array of elements smaller and greater than the pivot
// Break down and then merge

function quickSort(inputArr) {
  console.log('Quick sort called with', inputArr.slice());
  if (inputArr.length < 2) {
    return inputArr;
  }
  const pivot = inputArr.pop();
  let smaller = [], greater = [];
  inputArr.forEach((elem) => {
    if (elem > pivot) {
      greater.push(elem);
    }  else {
      smaller.push(elem);
    }
  });
  console.log('Pivot: ', pivot, 'smaller: ', smaller.slice(), 'greater: ', greater.slice());
  // Recursive call
  smaller = quickSort(smaller);
  greater = quickSort(greater);
  // Merge
  return [...smaller, pivot, ...greater];
}

const quickSorted = quickSort(unsortedArray.slice());

console.log({quickSorted});

expect(quickSorted).toEqual(sortedArray);
