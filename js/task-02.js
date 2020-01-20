'use strict';

const total = 100;
const ordered = prompt('Количество заказов');

if (ordered === null) {
    alert(`Отменен заказ`);

} else if (Number(ordered) >= total) {
    alert(`На складе недостаточно тoваров!`);

} else if (Number(ordered) <= total) {
    alert(`Заказ оформлен, с вами свяжется менеджер`);

} else {
    alert(`Число введено неправильно, заказ не принят`);

}