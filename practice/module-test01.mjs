// 因為是export default，class的名字已經不重要，這邊直接改寫為MyPerson
import MyPerson, {a, f} from './Person.mjs';
// 基本上一定要加./

// 非default寫法如下
// import {Person} from './Person.mjs';

const p2 = new MyPerson('Flora', 30);

console.log(p2.toString());

console.log({a});
console.log(f(9));

// 執行時原本export的那邊也會被執行，但通常會將議會出跟要執行的東西分開