import BST from './bst';

const bst1 = new BST();

bst1.add(4);
bst1.add(2);
bst1.add(6);
bst1.add(5);
console.log(bst1);

console.log('BST search', bst1.search(6));
