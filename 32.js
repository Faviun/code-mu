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

// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

const function2 = (num) => {
    let str = num.toString();
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "0") {
            newStr += str[i];
        }
    }
    console.log(+newStr);
};

function2(102030405060708090);

// Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.

const function3 = (date) => {
    let now = new Date();
    let newDate = new Date(date);
    let diff = newDate - now;
    let days = Math.floor(diff / 1000 / 60 / 60 / 24);
    days < 0
        ? console.log("Прошло " + -days + " дней")
        : console.log("Осталось " + days + " дней");
};

function3("2025-03-08");
