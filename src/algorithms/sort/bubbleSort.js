document.write('<p>Bubble sort</p>');

function bubbleSort(inputArr) {
  console.log('Bubble sort input', inputArr.slice());
  let didSort = true;
  while(didSort) {
    didSort = false;
    for (let index = 0; index < inputArr.length - 1 ; index++) {
			if (inputArr[index] > inputArr[index + 1]) {
        didSort = true;
        const greaterVal = inputArr[index];
        inputArr[index] = inputArr[index + 1];
        inputArr[index + 1] = greaterVal;
      }
    }
  }
  console.log('bubble sort output', inputArr);
	return inputArr;
}

export default bubbleSort;
