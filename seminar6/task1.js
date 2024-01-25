'use strict';

/*
1. Создайте функцию mergeArrays, которая принимает два
массива и возвращает новый массив, содержащий все
элементы из обоих массивов. Используйте spread
оператор для объединения массивов.
mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
2, 3, 4, 5, 6]
2. Создайте функцию removeDuplicates, которая принимает
любое количество аргументов и возвращает новый
массив, содержащий только уникальные значения.
Используйте rest оператор для сбора всех аргументов в
массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
результат: [1, 2, 3, 4, 5]
*/

function mergeArrays(arg1, arg2) {
    const dualArrey = [...arg1, ...arg2];
    return dualArrey;
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

function removeDuplicates(...arg) {
    return arg.filter((el, i, arr) => i === arr.indexOf(el));
    // const unicArrey = arg.filter((el, i, arr) => i === arr.indexOf(el));
    // return unicArrey;
}
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));