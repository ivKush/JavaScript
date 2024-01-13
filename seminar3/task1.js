/*
1. Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию)
2. Создайте функцию которая возводит переданное число в
квадрат
3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'.
*/

// userName = prompt("Введите имя");
// surName = prompt("Введите фамилию");
// age = Number.parseInt(prompt("Введите возраст"));

function helloUser(userName, surName, age) {
  console.log(`Привет ${userName} ${surName} с возрастом ${age}`);
}

const num = Number(prompt("Введите число"));

const square = (arg) => console.log(arg ** 2);

function checkNum(num) {
  if (!Number.isNaN(num)) {
    if (num === 0) {
      console.log("000");
    } else if (num > 0) {
      console.log("+++");
    } else {
      console.log("---");
    }
  } else {
    console.log('error');
  }
}

helloUser("Иван", "Иванов", 40);
square(num);
checkNum(num);
