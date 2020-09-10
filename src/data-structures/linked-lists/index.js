import LinkedList from './linked-lists';

const ll1 = new LinkedList();

ll1.add(2);
ll1.add(5);
ll1.add(7);
ll1.add(11);

console.log({ll1});
console.log('LL1 search', ll1.search(7));
