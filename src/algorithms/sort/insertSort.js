document.write('<p>Insert sort</p>');

function insertionSort(inputArray) {
  console.log('insertionSort input', inputArray);
  for(let outerLoop = 1; outerLoop < inputArray.length; outerLoop++)  {
    for (let innerLoop = 0; innerLoop < outerLoop; innerLoop++) {
      if (inputArray[outerLoop] < inputArray[innerLoop]) {
        const spliced = inputArray.splice(outerLoop, 1);
        inputArray.splice(innerLoop, 0, spliced[0]);
      }
    }
  }
  console.log('insertionSort output', inputArray);
  return inputArray;
}

export default insertionSort;
