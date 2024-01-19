"use strict";
/*
1. С помощью цикла for выведите в консоль числа от 11 до 33.
2. С помощью цикла for выведите в консоль нечетные числа в
промежутке от 1 до 99.
3. С помощью цикла for выведите в консоль числа от 100 до 0.
4. Дано число num с неким начальным значением. Умножайте его на 3
столько раз, пока результат умножения не станет больше 1000.
Какое число получится? Посчитайте количество итераций,
необходимых для этого.
*/
let arr = [];
for (let i = 11; i <= 33; i++) {
  arr.push(i);
}
console.log(arr);

const arr2 = [];
for (let i = 1; i < 99; i = i + 2) {
  arr2.push(i);
}
console.log(arr2);

const arr3 = [];
for (let i = 100; i > 0; i--) {
  arr3.push(i);
}
console.log(arr3);

let num = 1;
let count = 0;
while (num < 1000) {
  num = num * 3;
  count++;
  console.log(num);
}
console.log(`count = ${count}`);
