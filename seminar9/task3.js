'use strict';

async function loadData(url) {
    let respons = await fetch(url);
    if (respons.ok) {
        console.log('OK');
        console.log(await respons.json());
    } else {
        console.log('ERROR');
    }
}

loadData("https://jsonplaceholder.typicode.com/users");

