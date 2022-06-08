/**
 *  const let等の変数宣言
 */
// // var変数は上書き可能！
// // 型もない
// var val1 = "従来の変数宣言";
// console.log(val1);
// val1 = "上書き！";
// console.log(val1);
// // 再宣言も可能
// var val1 = 0;
// console.log(val1);

/**
 *  ES2015構文
 */

// let val2 = 'let変数';
// console.log(val2);
// // let上書き可能！
// val2 = '上書き！';
// console.log(val2);
// // letは再宣言不可
// // let val2 = ''; val2 has already been decleared.

/**
 * 　最も　const　をよく使う
 */

// const val3 = 'const変数';
// console.log(val3);
// // const は上書きも不可
// // val3 = ''; 'val3' is read-only.
// // const val3 = ''; 'val3' has already been decreared.

// constで定義したオブジェクトはプロパティは上書き可、追加も可
// const val4 = {
//   name: "shunta",
//   age: 18
// };
// val4.name = '??';
// val4.hobby = 'programming'
// console.log(val4);

// 同様にconstで定義した配列もプロパティの変更可
// const val5 = ['gm', 'gn'];
// val5[0] = 'hello!';
// val5.push('Good Afternoon!');
// console.log(val5);

/**
 *  テンプレート文字列
 */
// const name = "shunta";
// const age = 18;
// 「私のなまえはshuntaです。年齢は１８才です。」

// 従来
// const message1 = "私のなまえは" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// テンプレート文字列を用いる
// const message2 = `私のなまえは${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 *  アロー関数　ファットアロー形式
 */

// 従来
// function func1 (str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func111"));

// アロー関数
// 引数のかっこは省略できるが、しないこともある。

// const func2 = (str) => {
//   return str;
// }
// 一行で終わり、return するような処理は以下のようにも書ける
// const func2 = (str) => str;
// console.log(func2("Func2"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 12));

/**
 *  分割代入
 */

// const myProfile = {
//   name: "shunta",
//   age: 18
// };

// 従来の方法
// const message1 = `名前は${myProfile.name}で、年齢は${myProfile.age}です。`;
// console.log(message1);

// 取り出すものを宣言。
// const { name, age } = myProfile;
// const message2 = `名前は${name}で、年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["shunta", 18];

// 従来の方法
// const message3 = `名前は${myProfile[0]}で、年齢は${myProfile[1]}です。`;
// console.log(message3);

// 順番通りに入る
// const [name, age] = myProfile;
// const message4 = `名前は${name}で、年齢は${age}です。`

/**
 *  Default値
 */

// const sayHello = (name) => console.log(`こんにちは${name}さん。`);
// sayHello(); // こんにちは undefinedさん。

// Defaultの設定
// const sayHello = (name = 'ゲスト') => console.log(`こんにちは${name}さん。`);
// sayHello(); // こんにちはゲストさん。

/**
 *  スプレッド構文　...
 */

// 配列の展開
// const arr1 = [1, 2];

// console.log(arr1);
// // 配列が順番に取り出される
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // 従来の方法
// sumFunc(arr1[0], arr1[1]);
// // スプレッド構文
// sumFunc(...arr1);

// // まとめる　（上の配列の展開の応用）
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// // num1, num2の残りが配列として
// console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
const arr8 = arr4;
console.log(arr8);
