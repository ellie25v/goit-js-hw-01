'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

const PASSWORD = prompt('Input password');
let message;

if (PASSWORD === null) {
    message = `Отменено пользователем!`;
    
} 
else if (PASSWORD === ADMIN_PASSWORD) {
    message = `Добро пожаловать!`;

}
else {
    message = `Доступ запрещен, неверный пароль!`
}

alert (message);