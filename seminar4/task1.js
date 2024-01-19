"use strict";

/*
1. Создайте массив с элементами 1, 2, 3. Выведите на экран
каждый из этих элементов.
2. Создайте массив с произвольными элементами.
Выведите на экран количество элементов в этом
массиве.
3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
первого элемента число 1, вместо второго - 2, вместо
третьего - 3.
*/

let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(arr.length);

// for (let i = arr.length; i > 0; i--) {
//         arr.shift();
//     }
// console.log(arr);

arr = ["a", "b", "c"];
console.log(arr);

for (let i = 0; i < 3; i++) {
  arr[i] = i + 1;
}

console.log(arr);

console.log(arr.length);
