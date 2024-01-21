'use strict';

/*
1. Создайте объект riddle.
2. Добавьте свойства question со значениями(текст загадки) и 
answer (ответ на загадку).
3. Создайте метод askQuestion который спрашивает у пользователя вопрос 
question и сравнивает ответ с answer.
В случае верного ответа, необходимо поздравить пользователя.
В случае, если пользователь ответил неверно, необходимо подсказать, 
подсказок может быть несколько.
Если пользователь ответил неверно после всех подсказок, то в консоль 
выводится текст: “вы проиграли”.
*/

const riddle = {
    question: 'абра-кадабра',
    answer: 'кадабра',
    hints: ['кад', 'абра'],
    askQuestion() {
        let inputAnswer = prompt(this.question).toLowerCase();
        if (inputAnswer === this.answer.toLocaleLowerCase()) {
            alert('поздравляю!');
        } else {
            for (const el in this.hints) {
                inputAnswer = prompt('подсказка ' + this.hints[el]).toLocaleLowerCase();
                if (inputAnswer === this.answer.toLocaleLowerCase()) {
                    alert('поздравляю!');
                    return;
                }
            }
            return alert('проиграл');
        }
    }
}
riddle.askQuestion();

riddle.askQuestion(riddle.question);
