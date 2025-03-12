// Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.

const function1 = (date) => {
    let date1 = new Date(date);
    date1 == "Invalid Date"
        ? console.log("Такой даты не существует")
        : console.log("Такая дата существует");
};

function1("2021-02-29");

// Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.

const function2 = (length) => {
    let str = "";
    for (let i = 0; i < length; i++) {
        str += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
    console.log(str);
};

function2(10);

// Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.

const function3 = (str) => {
    let arr = str.split(" ");
    let result = "";
    arr.forEach((item) => {
        result += item[0];
    });
    console.log(result.toUpperCase());
};

function3("hello world");

// Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.

const function4 = (arr) => {
    let result = [];
    arr.forEach((item) => {
        let arr1 = [];
        for (let i = 1; i <= item; i++) {
            if (item % i == 0) {
                arr1.push(i);
            }
        }
        result.push(arr1);
    });
    console.log(result);
};

function4([6, 8, 9, 12]);

// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

const function5 = (seconds) => {
    let d = Math.floor(seconds / 86400);
    seconds -= d * 86400;
    let h = Math.floor(seconds / 3600);
    seconds -= h * 3600;
    let m = Math.floor(seconds / 60);
    seconds -= m * 60;
    let s = seconds;
    console.log({d, h, m, s});
};

function5(1000000);
