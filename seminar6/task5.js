/*
Задача: Напишите функцию createPasswordChecker, которая
принимает допустимую длину пароля в качестве аргумента и
возвращает функцию для проверки введенного пароля.
Возвращаемая функция должна принимать пароль и возвращать
true, если его длина соответствует допустимой, и false в противном
случае.
// Пример использования:
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат:
false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true
*/

function createPasswordChecker(arg) {
    const pass = prompt('password: ')
    return () => {
        if (pass.length === arg) {
            return true;
        }
        return false;
    }
}

const checkPass = createPasswordChecker(5);
console.log(checkPass());
