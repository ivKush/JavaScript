'use strict';

/*
Найдите сумму всех чисел, приведенного объекта.
*/

const obj = {
  num: 10,
  key1: {
    problem: {
      trable: 100,
    },
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
}

function getSum(object) {
  let sum = 0;
  for (const key in object) {
    if (typeof object[key] === 'number') { // проверка типа значения, на число
      sum += object[key];
    } else {                               // если значение не число, запускается рекурсия и проходит по объекту с поиском числа и объекта
      sum += getSum(object[key])
    }
  }
  return sum;
}
console.log(getSum(obj));



// function sumNumbers1(obj) {
//   let sum = 0;

//   for (let stack = [obj]; stack.length > 0;) {
//     const currentObj = stack.pop();

//     for (const key in currentObj) {
//       if (typeof currentObj[key] === 'number') {
//         sum += currentObj[key];
//       } else if (typeof currentObj[key] === 'object') {
//         stack.push(currentObj[key]);
//       }
//     }
//   }

//   return sum;
// }

// const obj1 = {
//   num: 10,
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//     text: {
//       textDescr: 132,
//       num: 10
//     },
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };

// const result1 = sumNumbers1(obj);
// console.log(result);




