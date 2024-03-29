'use strict';

/*
Текст задания
1. Напишите функцию getEvenNumbers, которая принимает массив
чисел в качестве аргумента и возвращает новый массив,
содержащий только четные числа.
2. Задача: Напишите функцию calculateAverage, которая принимает
массив чисел в качестве аргумента и возвращает среднее значение
этих чисел.
3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
качестве аргумента и возвращает новую строку, в которой первая
буква каждого слова является заглавной.
*/

const arr2 = [1, 2, 3, 4, 6, 8, 9];

function getEvenNumbers(arg) {
    return arg.filter((el) => el % 2 === 0); // filter() - собирает новый массив на основе правда/ложь, переберая по одгому элеменнту.
};
console.log(getEvenNumbers(arr2));

function calculateAverage(arg) {
    return arg.reduce((a, b) => a + b, 0) / arg.length; // reduce((a, b) - берет первые два элемента массива и проделывает операции указанные в колбекфункции сохраняя результат в первой переменной, вторая переменная переберает массив. По итогу возвращает накопленный результат из первой переменной.
}
console.log(calculateAverage(arr2));

function capitalizeFirstLetter(arg) {
    let arr3 = arg.split(' ');
    return arr3.map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
    // map() - переберает массив поэлементно и возвращает массив.
    // slice(1) - делает срез массива по индексам.
    // join(' ') - собирает массив в строку через переданный символ.
}

console.log(capitalizeFirstLetter('Жили были дед и баба'));

