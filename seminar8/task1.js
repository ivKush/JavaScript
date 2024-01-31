'use strict';

/*
Напишите функцию getPrototypeChain(obj), которая будет
возвращать цепочку прототипов для заданного объекта
obj. Функция должна вернуть массив прототипов, начиная
от самого объекта и заканчивая глобальным объектом
Object.prototype.
*/

const user = {
    constructor(name, login) {
        this.name = name;
        this.login = login;
    },

    getUserName() {
        return this.name;
    },

}

const account = {
    constructor(login, pass) {
        this.login = login;
        this. pass = pass;
    },

    // __proto__:user, // устаревший метод связывания объектов
}

Object.setPrototypeOf(account, user); // Связывание объектов (как наследование у классов)

function getPrototypeChain(obj) {
    const arr = [];
    while (obj !== null) {
        arr.push(obj);
        obj = Object.getPrototypeOf(obj);
    }
    return arr;
}

console.log(getPrototypeChain(account));