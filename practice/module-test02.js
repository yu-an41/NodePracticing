// import一定要在最前面import，require則不一定
const {Person, a ,f} = require('./Person');
//require 副檔名是js時可以省略
// require() 匯出時就是要用module.exports

const p2 = new MyPerson('Flora', 30);

console.log(p2.toString());

console.log({a});
console.log(f(9));
