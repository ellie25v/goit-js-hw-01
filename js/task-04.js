'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let message;

const droidWanted = prompt('Kоличество дроидов которые Вы хотите купить');

const totalPrice = Number(droidWanted) * pricePerDroid;
const creditsLeft = credits - totalPrice;


if (droidWanted === null){
    message = `Отменено пользователем!`;

}
else if (totalPrice > credits){
    message = `Недостаточно средств на счету!`;

}
else if (totalPrice <= credits){
    message = `Вы купили ${droidWanted} дроидов, на счету осталось ${creditsLeft} кредитов.`;

}
else {
    message = `What?`;

}
alert(message);

