/*
1. Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль.
*/
const sqrtNum = arg => Math.sqrt(arg);
console.log(sqrtNum(4) + sqrtNum(3));

/*
2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции
*/
const minNum = (arg1, arg2) => {
    if (arg1 < arg2) {
        return arg1;
    } else {
        return arg2;
    }
}

console.log(minNum(3, 1));