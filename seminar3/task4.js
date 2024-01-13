/*
1. Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
*/
const dayWeek = (num) => {
  if (num === 1) {
    return "понедельник";
  } else if (num === 2) {
    return "вторник";
  } else if (num === 3) {
    return "среда";
  } else if (num === 4) {
    return "четверг";
  } else if (num === 5) {
    return "пятница";
  } else if (num === 6) {
    return "суббота";
  } else {
    return "воскресение";
  }
};
console.log(dayWeek(7), dayWeek(1));

/*
2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)
*/

const userHello = (userName) => {
  const currentHour = new Date().getHours;
  if (currentHour > 22 && currentHour < 5) {
    return `Доброй ночи, ${userName}`;
  }
  if (currentHour < 11) {
    return `Доброе утро, ${userName}`;
  }
  if (currentHour < 18) {
    return `Добрый день, ${userName}`;
  }
  return `Добрый вечер, ${userName}`;
};

console.log(userHello("Иван"));
