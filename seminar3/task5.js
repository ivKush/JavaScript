/*
Реализовать функцию round5, которой передается целое число, функция должна 
возвращать ближайшее целое число к тому что было передано, без остатка делящееся 
на 5.
*/

function round5(val) {
 val / 10

}
 
console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5

/*
Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо 
чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, 
кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна 
выводить слово «FizzBuzz»
*/
function printBuzz() {
    for (let i = 0; i < 100; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}
 
printBuzz();
 
// function customFizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         const rules = {
//             3: "Fizz",
//             5: "Buzz"
//         };
 
//         let output = "";
 
//         for (const divisor in rules) {
//             if (i % divisor === 0) {
//                 output += rules[divisor];
//             }
//         }
//         console.log(output || i);
//     }
// }
 
// customFizzBuzz();
