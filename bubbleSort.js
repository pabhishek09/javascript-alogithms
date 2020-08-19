write('Bubble sort');

function bubbleSort(inputArr) {
  const sortedArray = [];
  inputArr.forEach((elem, index) => {
    if (index === 0) {
      sortedArray.push(elem);
    } else if (elem > sortedArray[index-1]) {
      sortedArray[index] = elem;
    } else {
      let sortCounter = index - 1;
      while(sortCounter >= 0) {
        if (elem > sortedArray[sortCounter]) {
           break;
        }
        const tempElement = sortedArray[sortCounter];
        sortedArray[sortCounter] = elem;
        sortedArray[sortCounter + 1] = tempElement;
        sortCounter--;
      }
    }
  });
  return sortedArray;
}

expect(bubbleSort(unsortedArray.slice())).toEqual(sortedArray);
