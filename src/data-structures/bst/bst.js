function BinarySearchTree() {
  this.root = null;
  this.length = 0;
}

function Node(value) {
  this.value = value;
  this.left = this.right = null;
}

BinarySearchTree.prototype.add = function(value) {
  const newNode = new Node(value);
  this.length++;
  if (!this.root) {
    this.root = newNode;
  } else { 
    let currentNode = this.root;
    while(true) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return;
        }
        
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return;
        } 
      }
    }
  }
}

BinarySearchTree.prototype.search = function(value) {
  let currentNode = this.root;
  while(true) {
    if (currentNode.value === value)  {
      return currentNode;
    } else if (currentNode.value > value) {
      currentNode = currentNode.left;
    } else if (currentNode.value < value) {
      currentNode = currentNode.right;
    }
  }
}

export default BinarySearchTree;
