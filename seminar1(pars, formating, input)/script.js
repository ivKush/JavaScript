// console.log("Текст из script.js!");

const num1 = 123; // const - для НЕизменяемых переменных
console.log(num1);

let a = 5; // let - для изменяемых переменных
a = 7;
console.log(a);

// const b = 1 + 2 + 3;
// console.log(b);

// const myAge = 41;
// // const currentYear = 2023;
// const currentYear = new Date().getFullYear(); // Получение текущей даты

// const summ = myAge + currentYear;
// const diff = myAge - currentYear;
// const mult = myAge * currentYear;
// const div = currentYear / myAge;

// console.log(summ, diff, mult, div);
// console.log(summ + diff + mult + div + myAge + currentYear);

// const a = 0.1;
// const b = 0.2;
// console.log(a + b);
// console.log(Math.round((a + b) * 10) / 10);

const num2 = "234.54s6";
const num3 = "98.765";
console.log(num2, num3);
console.log(Number(num2, num3)); // Парсим переменную из строки в число
console.log(+num2, -num3); // Парсим переменную в положительное или отрицательное ЧИСЛО - знаком

console.log(Number.parseInt(num3));   // Парсим в целое число
console.log(Number.parseFloat(num2, num3)); // Парсим в Float

const myName = "Ivan";
const mySurname = "Kushnir";
console.log(`${myName}  -->  ${mySurname}`);   // Вывод переменных с форматированием.
console.log(myName + mySurname);   // Вывод переменных с конкотинацией.
console.log(myName + " " + mySurname);   // Вывод переменных с конкотинацией.

const num = Number(prompt("Введите число")); // Запрос ввода через алерт - prompt()
console.log(num + 5);
