/*
Напишите функцию createGreeting, которая принимает имя
пользователя и возвращает функцию, которая будет выводить
приветствие с использованием этого имени.
// Пример использования:
const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"
*/

function createGreeting(name) {
    return  () => console.log('Привет ' + name);
}

const helloName = createGreeting('Ivan'); // Разновидность Замыкания - функция в фукции, обратиться к ней можно только через экземпляр функции. 
helloName();