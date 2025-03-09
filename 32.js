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

// Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.

const function4 = (year) => {
    year % 4 === 0 ? console.log("Високосный") : console.log("Не високосный");
};

function4(2025);

// Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

const function5 = (year) => {
    let arr = [];
    for (let i = year - 100; i <= year; i++) {
        if (i % 4 === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
};

function5(2025);

// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

const function6 = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let lastDay = new Date(year, month + 1, 0).getDate();
    let days = lastDay - now.getDate();
    console.log(days);
};

function6();

// Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

const function7 = () => {
    let now = new Date();
    let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    let obj = {
        prev: days[now.getDay() - 1] || days[6],
        curr: days[now.getDay()],
        next: days[now.getDay() + 1] || days[0],
    };
    console.log(obj);
};

function7();
