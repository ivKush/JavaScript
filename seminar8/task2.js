'use strict';

/*
Создайте класс Animal, который будет представлять животное. У
класса Animal должны быть следующие свойства и методы:
● Свойство name (строка) - имя животного.
● Метод speak() - выводит в консоль звук, издаваемый животным.
Создайте подкласс Dog, который наследует класс Animal. Для
подкласса Dog добавьте дополнительное свойство и метод:
● Свойство breed (строка) - порода собаки.
● Метод fetch() - выводит в консоль сообщение "Собака [name]
принесла мяч.".
*/

class Animal {
    color;

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издаёт звук`);
    }
}

class Dog extends Animal {
    
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} гавкает`);
    }

    fetch() {
        console.log(`Собака ${this.color} ${this.name} принесла мяч.`);
    }
}

const animal = new Animal('животное')
const dog = new Dog('Rex', 'pitbull');
console.log(dog);
animal.speak()
dog.speak();
dog.fetch();
animal.name = 'Медведь'
animal.speak();
dog.speak();
dog.name = 'Alaska';
dog.fetch();
dog.color = 'black';
dog.fetch();