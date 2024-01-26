/*
Напишите функцию createCalculator, которая принимает начальное
значение и возвращает объект с двумя методами: add и subtract.
Метод add должен увеличивать значение на переданное число, а
метод subtract должен уменьшать значение на переданное число.
Значение должно быть доступно только через методы объекта, а не
напрямую.
*/

function createCalculator(num) {
    let val = num;
    return {
        add: num => val += num,
        subtract: num => val -= num,
        result: () => val,
    }
}

const calc = createCalculator(10);
calc.add(5);
console.log(calc.result());
calc.subtract(20);
console.log(calc.result());