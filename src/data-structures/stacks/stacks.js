// Plates - Last In  First Out

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = null;
  }

  peek() {
    return this.top;
  }

  push(value) {
    this.length++;
    const node = new Node(value);
    console.log(node);
    if (!this.top) {
      this.top = node;
      this.bottom = node;
    } else {
      const top = this.top;
      this.top = node;
      this.top.next =  top;
    }
    return this;
  }

  pop()  {
    const top = this.top;
    this.top = this.top.next;
    this.length--;
    return top;
  }

}

export default Stack;
