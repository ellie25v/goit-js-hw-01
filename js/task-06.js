'use strict';

let total = 0;
let userInput;


while (userInput !== null) {
    userInput = prompt('Введите число');

    if (Number.isNaN(Number(userInput))) {
        alert('Было введено не число, попробуйте еще раз');

    } else {
        total += Number(userInput);
    }

}
alert(total);