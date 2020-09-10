class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    while(true) {
      // console.log(`Current is ${current.value}`);
      if (current.value > value) {
        if (!current.left) {
          current.left  = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        };
        current = current.right;
      }
    }
    this.length++;
  }

  search(value) {
    let current = this.root;
    while(current) {
      if (current.value === value) {
         return current;
      } 
      else if (current.value > value) {
        current  = current.left;
      } 
      else if(current.value < value) {
        current = current.right;
      }
    }
    return null;
  }

  delete() {

  }

}

const bst1 = new BST();
bst1.add(9);
bst1.add(6);
bst1.add(15);
bst1.add(3);
bst1.add(7);
bst1.add(12);
bst1.add(17);

console.log(bst1.search(12));

function traverse(node) {
  const  tree = { value : node.value}
  tree.left = node.left  === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
