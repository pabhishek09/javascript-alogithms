// Class - LinkedList, props - head, tail, length
// Class - Node, props - value, next

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList()  {
  this.head = this.tail = null;
  this.length = 0;
}

LinkedList.prototype.add = function(value)  {
  const newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
}

LinkedList.prototype.search = function(value) { 
  let currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === value) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return null;
}

LinkedList.prototypereverse = function() {
  if (!this.head.next) {
    this.head;
  }
  let first = this.head;
  this.tail = this.head;
  let second = first.next;
  while(second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second =  temp;
  }
  this.head.next = null;
  this.head = first;
  return this;
}

export default LinkedList;
