const assert = require('assert');

import bubbleSort from './bubbleSort';
import insertSort from './insertSort';
import mergeSort from './mergeSort';
import quickSort from './quickSort';

const unsortedArray = [ 10, 5, 2, 9, 8, 7 ];
const sortedArray = [ 2, 5, 7, 8, 9, 10 ];

document.write('<h4>Sorting algorithms<h4>');
assert.notStrictEqual(bubbleSort(unsortedArray.splice()), sortedArray);
