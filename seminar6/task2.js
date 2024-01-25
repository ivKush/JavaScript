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
    return arg.reduce((a, b) => a += b) / arg.length;
}
console.log(calculateAverage(arr2));

function capitalizeFirstLetter(arg) {
    let arr3 = arg.split(/\s/);
    // arr3 = arr3.map(el => {
    //     let a = el[0].toUpperCase();
    //     return el[0] = a; // Не работает - не присваевает значение ???
    // });

    for (let el of arr3) {
        let a = el[0].toUpperCase();
        // (el[0]) = el[0].toUpperCase();
        
        console.log(a);
    };
    return arr3;
}


console.log(capitalizeFirstLetter('Жили были дед и баба'));

