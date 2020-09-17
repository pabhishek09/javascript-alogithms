class QueueOfStacks {

  constructor() {
    this.values = [];
    this.secondary = [];
  } 

  enqueue(value) {
    while(this.secondary.length) {
      this.values.push(this.secondary.pop());
    }
    this.values.push(value);
    return this.values;
  }

  dequeue() {
    while(this.values.length) {
      this.secondary.push(this.values.pop());
    }
    return this.secondary.pop();   
  }
  
  peek() {
    if (this.values.length) return this.values[0]
    else return this.secondary[this.secondary.length-1];
  }

}

export default QueueOfStacks;