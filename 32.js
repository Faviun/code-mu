// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

const function1 = (num) => {
    let sum = 0;
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
        sum += +str[i];
    }
    console.log(sum);
};

function1(12345);
