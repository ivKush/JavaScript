"use strict";

/*
Необходимо создать переменную name, записать в эту переменную свое имя.
Необходимо также создать переменную admin и присвоить этой переменной значение
из переменной name.
Вывести значение переменной admin в консоль.
*/

function newAdmin() {
    const name = "Ivan";
    return name; 
}

let admin = newAdmin();
console.log(admin);
