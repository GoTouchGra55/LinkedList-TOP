import { Node, LinkedList } from './LinkedList.js';

let list = new LinkedList();
console.log(list.getSize());

list.append(13);
list.append(14);
list.prepend(12);
list.toString();

console.log(list.getSize());
let list2 = new LinkedList();
console.log(list2.getSize());

console.log('head', list.getHead);
console.log('tail', list.getTail);
let index = 0;
console.log(`at index ${index}`, list.at(index));
index = 2;
console.log(`at index ${index}`, list.at(index));

list.pop();
list.toString();

list.append(14);
list.append(15);
console.log(list.contains(11));
console.log(list.contains(13));

list.toString();
console.log(list.find(12));
console.log(list.find(14));
console.log(list.find(11));

list.toString();
list.insertAt(11, 8);
list.toString();
list.insertAt(10, 0);
list.toString();
list.insertAt(2, 2);
list.toString();

list.removeAt(0);
list.toString();
