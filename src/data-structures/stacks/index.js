import Stack from './stacks';

const stack1 = new Stack();

stack1.push('Google');
stack1.push('Amazon');
stack1.push('Linkedin');
stack1.push('Instagram');

console.log({stack1});
console.log('Peek', stack1.peek());


const pop = stack1.pop();
console.log({pop, stack1});


