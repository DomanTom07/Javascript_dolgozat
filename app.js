/*
File: app.js
Author: Tamás Domán
Copyright: 2022, Tamás Domán
Group: Szoft I N
Date: 2022-04-28
Github: https://github.com/DomanTom07/
Licenc: GNU GPL
*/

let sideStr = document.getElementById('side');
let angleStr = document.getElementById('angle');
let submit = document.getElementById('submit');
let button = document.getElementById('button');

if (localStorage.getItem('result') > 0) {
    document.getElementById('welcome').innerHTML = "";
    document.getElementById('result').innerHTML = "Eredmény: " + localStorage.getItem('result');
}

submit.addEventListener('click', () => {
    let side = sideStr.value;
    if (isNaN(side) || side < 0) {
        alert("Hibás bevitel!");
        return;
    }
    if (side == "") {
        alert("Hiányzó adat!");
        return;
    }
    let angle = angleStr.value * Math.PI / 180;
    if (isNaN(angle) || angle < 0) {
        alert("Hibás bevitel!");
        return;
    }
    if (angle == 0) {
        alert("Hiányzó adat!");
        return;
    }
    let result = 0.5 * side * Math.sin(angle);
    localStorage.setItem('result', result);
});

button.addEventListener('click', () => {
    localStorage.removeItem('result');
    document.getElementById('welcome').innerHTML = "Írja be az adatokat!";
    document.getElementById('result').innerHTML = "";
});