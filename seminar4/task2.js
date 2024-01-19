/*
1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
увеличьте каждый элемент массива на единицу.
2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
1. Пусть дан такой массив:
const arr = [1, 2, 3];
Добавьте ему в конец элементы 4 и 5.
1. Создайте произвольный массив из 5 элементов, Удалите из него два
элемента. Проверьте, какое станет значение свойства length после
этого.
*/

let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  //   arr[i] = arr[i] + 1;
  arr[i]++;
}
console.log(arr);

arr = [];
arr[3] = "a";
arr[8] = "b";
console.log(arr.length);

arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr);

console.log(arr.length);
arr.shift();
arr.pop();
console.log(arr.length);
