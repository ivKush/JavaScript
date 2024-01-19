/*
1. Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
*/
const sum = (arg1, arg2, arg3) => console.log(arg1 + arg2 + arg3);
sum(3, 4, 5);
/*
2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
*/
let param1 = 1;
let param2 = 2;
let param3 = 3;

const sumParam = () => console.log(param1 + param2 + param3);
sumParam();

/*
3. Дана фукнция
function func(num = 5) {
console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func();
*/
