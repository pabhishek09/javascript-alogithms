import Queue from './queue';
import QueueOfStacks from './queueOfStacks';

const queue1 = new Queue();

queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(5);
queue1.enqueue(6);
console.log(queue1);
console.log('Peek', queue1.peek());
const deque1 = queue1.dequeue();
console.log({ deque1, queue1 });



const queueOfStack1 = new QueueOfStacks();
queueOfStack1.enqueue(4);
queueOfStack1.enqueue(7);
queueOfStack1.enqueue(8);
console.log('Peek: ', queueOfStack1.peek());
queueOfStack1.dequeue();
console.log('Peek: ', queueOfStack1.peek());
queueOfStack1.enqueue(9);
console.log({queueOfStack1});
console.log('Peek: ', queueOfStack1.peek());