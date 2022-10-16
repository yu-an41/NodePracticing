//每個檔案的export default只能有一個（也可以沒有）
export default class Person {
    // 先初始化(建立時才給值)
    gender = 'female';
    //屬性一開始就有設定值的話可以這樣用（通常不建議寫在constructor之前）
    constructor(name = 'noname', age = 20) {
        // 類別的屬性不用宣告，也不可以加let const等關鍵字
        this.name = name;
        //此處this指的是這個各體
        this.age = age;
    }

    toJSON() {
        const {name, age, gender} = this;
        // 解構賦職，將上面的數值傳進來變成區域變數
        return {name, age, gender};
    }

    toString(){
        //覆蓋掉原本object的toString方法
        return JSON.stringify(this);
    }
}

const p1 = new Person('David', 25);

console.log(p1.toString());
// console.log(p1 + ''); // 串接空字串一樣可以轉為字串

export const a = 10;
const f = n => n*n;

//一次匯出的寫法，只要不是default都要包在大括號裡
export {f};