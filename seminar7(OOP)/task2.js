'use strict';

/*
 Создайте объект Animal со свойством name и методом eat(), который
выводит сообщение о том, что животное ест. Создайте объект Dog со
свойством name и методом bark(), который выводит сообщение о
том, что собака лает. Используйте одалживание метода eat() из
объекта Animal для объекта Dog, чтобы вывести сообщение о том,
что собака ест.
// Одалживание метода eat() из объекта Animal к объекту Dog
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating.
*/

const animal = {
    name: 'tiger',

    aet() {
        console.log(this.name + ' ест');
    },

    // a: function aet() {
    //     console.log(this.name + ' ест');
    // },
}

const dog = {
    name: 'sharik',
    bark() {
        console.log(this.name + ' лает');
    }
}

dog.aet = animal.aet;
dog.aet();

// dog.eat = animal.a;
// dog.eat();

