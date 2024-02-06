'use strict';

/*
1. Создайте функцию loadData(url), которая принимает аргумент url
(строка) - адрес сервера для загрузки данных.
2. Внутри функции loadData() создайте объект XMLHttpRequest с
помощью new XMLHttpRequest().
3. Зарегистрируйте обработчик события onreadystatechange, который
будет вызываться при изменении состояния запроса. Проверьте,
если readyState равен 4 (успешно выполнен запрос) и status равен
200 (успешный статус ответа сервера), то выведите полученные
данные в консоль с помощью console.log(xhr.responseText).
4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
запроса, url - адрес сервера, true - асинхронный режим запроса.
5. Отправьте запрос на сервер с помощью xhr.send().
*/

function loadData(url) {
    const objXML = new XMLHttpRequest();
    objXML.open('GET', url);
    objXML.onreadystatechange = function() {
        if (objXML.status !== 200) return console.log('Error', objXML.status, ':', objXML.statusText);
        console.log(`Ответ: ${objXML.response}`);
    }
    objXML.send();
}

loadData("https://jsonplaceholder.typicode.com/users");