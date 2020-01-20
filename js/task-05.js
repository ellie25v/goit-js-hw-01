'use strict';

let credits;
const country = prompt('Choose country');
const countryLowerCase = country.toLocaleLowerCase();
const countryCapitalized = countryLowerCase.charAt(0).toUpperCase() + countryLowerCase.slice(1)

let message;

switch (countryCapitalized) {
    case 'Китай':
        credits = 100;
        message = `Доставка в ${countryCapitalized} будет стоить ${credits} кредитов`;
        break;

    case 'Чили':
        credits = 250;
        message = `Доставка в ${countryCapitalized} будет стоить ${credits} кредитов`;
        break;

    case 'Австралия':
        credits = 170;
        message = `Доставка в ${countryCapitalized} будет стоить ${credits} кредитов`;
        break;

    case 'Индия':
        credits = 80;
        message = `Доставка в ${countryCapitalized} будет стоить ${credits} кредитов`;
        break;

    case 'Ямайка':
        credits = 120;
        message = `Доставка в ${countryCapitalized} будет стоить ${credits} кредитов`;
        break;

    default:
        message = 'В вашей стране доставка не доступна';
}

alert(message);