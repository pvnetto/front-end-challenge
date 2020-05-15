export const phoneFormatter = (number) => {
    let newNum = number.toString();
    newNum = newNum.replace(/\D/g, '');
    if (newNum.length <= 4) return newNum;
    else if (newNum.length <= 9) {
        // Inserts hyphen between the 4th digit and the remaining
        newNum = newNum.replace(/(\d)(\d{4})$/, "$1-$2");
    }
    else if (newNum.length <= 11) {
        // Puts the last 2 digits between parenthesis
        newNum = newNum.replace(/^(\d{2})(\d)/g, "($1) $2");
        newNum = newNum.replace(/(\d)(\d{4})$/, "$1-$2");
    }
    else if (newNum.length <= 13) {
        // Puts the 2 digits after the first 9 between parenthesis 
        newNum = newNum.replace(/(\d)(\d{2})(\d{9})$/g, "$1 ($2) $3");
        newNum = newNum.replace(/(\d)(\d{4})$/, "$1-$2");
        newNum = '+'.concat(newNum);
    }

    return newNum;
}

const priceFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
});

export const formatPrice = (price) => priceFormatter.format(price);