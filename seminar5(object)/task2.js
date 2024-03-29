'use strict';

/*
1. Создайте два массива: первый с названиями дней недели, а второй - с их 
порядковыми номерами:
`['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
`[1, 2, 3, 4, 5, 6, 7]`
2. С помощью цикла создайте объект, ключами которого будут названия дней, 
а значениями - их номера.
3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и 
возведите каждый элемент этого объекта в квадрат.
*/

const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const keys = [1, 2, 3, 4, 5, 6, 7];

const week = {};
for (const el in keys) {
    // week[days[el-1]] = el // так не работает, итерация проходит по индексам, а не по значениям
    week[keys[el]] = days[el]
}
console.log(week);

const week2 = {};
for (const el in days) {
    week2[days[el]] = keys[el]
}
console.log(week2);

const obj = {
    x: 1, 
    y: 2, 
    z: 3,
}

for (const el in obj) {
    // obj[el] = obj[el] * obj[el];
    obj[el] *= obj[el];
}
console.log(obj);
