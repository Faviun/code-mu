// Дана строка. Проверьте, что эта строка состоит только из цифр.

const function1 = (str) => {
    let count = 0;
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            count++;
        }
    }
    count ? console.log("No") : console.log("Yes");
};

function1("12345");

// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

const function2 = (str) => {
    let count = 0;
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    count ? console.log("No") : console.log("Yes");
};

function2("24683");

// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

const function3 = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < String(arr[i]).length; j++) {
            if (String(arr[i])[j] === "0") {
                count++;
            }
        }
        if (count < 2) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};

function3([1, 10, 100, 1000, 10000]);

// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

const function4 = () => {
    const arr = [];
    for (let i = 1; i <= 1000; i++) {
        let sum = 0;
        for (let j = 0; j < String(i).length; j++) {
            sum += +String(i)[j];
        }
        if (sum === 13) {
            arr.push(i);
        }
    }
    console.log(arr);
};

function4();

// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

const function5 = () => {
    const arr = [];
    let count = 1;
    for (let i = 0; i < 3; i++) {
        const subArr = [];
        for (let j = 0; j < 3; j++) {
            subArr.push(count);
            count++;
        }
        arr.push(subArr);
    }
    console.log(arr);
};

function5();
