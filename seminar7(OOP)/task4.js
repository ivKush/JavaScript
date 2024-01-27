'use strict';

/*
 Создайте класс Person, который имеет свойства name и age, а также
метод introduce(), который выводит сообщение с представлением
имени и возраста персоны.
const person = new Person("John", 25);
person.introduce(); // Вывод: My name is John and I'm 25 years old.
*/

class Person {    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(this.name + ' ' + this.age);
    }
}

const person = new Person("John", 25);
person.introduce();