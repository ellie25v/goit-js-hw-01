'use strict';

const total = 100;
const ordered = prompt('Количество заказов');


if (ordered === null) {
    alert(`Cancelled`);
    
} else if (ordered >= total) {
    alert(`На складе недостаточно тoваров!`);

} else if (ordered <= total) {
    alert(`Заказ оформлен, с вами свяжется менеджер`);

} else {
    alert(`What?`);

}