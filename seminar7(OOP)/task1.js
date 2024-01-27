'use strict';

/*
Создайте объект Person, представляющий человека, с
следующими свойствами: name, age и gender. Добавьте
также методы introduce и changeName. Метод introduce
должен выводить информацию о человеке, включая его
имя, возраст и пол. Метод changeName должен изменять
имя человека на новое заданное значение.
Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // Ожидаемый результат: My name is
John. I'm 25 years old and I identify as male.
Person.changeName("Mike");
*/

const person1 = {
    userName: '',
    age: 0,
    gender: '',
    introduce() {
        console.log(this.userName, this.age, this.gender);
    },
    changeName(params) {
        this.userName = params;
    },
};

person1.userName = "John";
person1.age = 25;
person1.gender = "male";

person1.introduce();
person1.changeName('Mike');
person1.introduce();