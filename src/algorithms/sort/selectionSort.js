document.write('<p>Selection sort</p>');

function selectionSort(inputArr) {
  console.log('Selection sort input', inputArr.slice());
  for (let index=0; index < inputArr.length; index++) {
    let smallestIndex = index;
     for (let i = index+1; i < arr.length; i++) {
       if (inputArr[smallestIndex] > inputArr[i]) {
         smallestIndex = i;
       }
     }
     const temp = inputArr[index];
     inputArr[index] = inputArr[smallestIndex];
     inputArr[smallestIndex] = temp;
   }
   return inputArr;
}

export default selectionSort;
