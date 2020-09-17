// Queue - FIFO
class Node {

  constructor(value) {
    this.value = value
  }

}

class Queue {

  constructor() {
    this.first = null;
    this.last  = null;
    this.length = 0;
  }

  // O(1)
  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = this.last  = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }

  // O(1)
  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) this.last  = null;
    this.first = this.first.next;
    this.length--;
    return this;
  }

  // O(1)
  peek() {
    return this.first;
  }

}

export default Queue;
