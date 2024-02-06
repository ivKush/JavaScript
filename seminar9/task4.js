'use strict';

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url).then((res) => res.json()).then((el) => listUser(el));

// const listUserHtml = document.querySelector('.listUser')

function listUser(elem) {
    const arrUser = [];
    for (const key of elem) {
        arrUser.push(key.name);
        console.log(key.name);
    }
    console.log('----------abcd...----------------');

    arrUser.sort().forEach((el) => {
        console.log(el);
        
        let tagForList = document.createElement('p');
        tagForList.textContent = el;
        document.body.appendChild(tagForList);
    });
}
