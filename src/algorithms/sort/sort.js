const assert = require('assert');

import bubbleSort from './bubbleSort';
import insertSort from './insertSort';
import mergeSort from './mergeSort';
import quickSort from './quickSort';

const unsortedArray = [ 10, 5, 2, 9, 8, 7 ];
const sortedArray = [ 2, 5, 7, 8, 9,];

document.write('<h4>Sorting algorithms<h4>');

console.log(unsortedArray);
assert.notStrictEqual(bubbleSort(unsortedArray.slice()), sortedArray);
assert.notStrictEqual(insertSort(unsortedArray.slice()), sortedArray);
assert.notStrictEqual(mergeSort(unsortedArray.slice()), sortedArray);
assert.notStrictEqual(quickSort(unsortedArray.slice()), sortedArray);


// When the  data is almost sorted -> Insertion sort has the best performance