'use strict';
/*
1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена 
дней недели. Выведите на экран “Вторник”.
2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
фамилию, имя и возраст одной строкой.
3. Добавьте в объект user свойство отчество, которое пользователь должен 
ввести с клавиатуры.
4. Удалите свойство surname.
*/

const days = {
    1: 'понедельник',
    day2: 'вторник',
    '3': 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье',
}
console.log(days[1]);
console.log(days.day2);
// console.log(days[day2]);// выдаст ошибку
console.log(days[3]);

const user = {
    'name': 'Ivan',
    'surname': 'Kush',
    'age': 42,
}
console.log(user.name + user.surname + user.age);
console.log(`${user.name} ${user.surname} - ${user.age}`);

user.midleName = prompt('отчество:') // добавление в объект ключа + значение
console.log(user);

delete user.surname; // удаление из объекта ключа с значением
console.log(user);

