// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

const function1 = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && !isNaN(str[i])) {
            arr.push(i);
        }
    }
    console.log(arr);
};

function1("Hello 123");

// Дан массив с некоторыми числами, например, вот такой: [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]

const function2 = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let str = String(arr[i]);
        let newStr = "";
        for (let j = str.length - 1; j >= 0; j--) {
            newStr += str[j];
        }
        newArr.push(Number(newStr));
    }
    console.log(newArr);
};

function2([123, 456, 789]);

// Дана некоторая строка с числом: '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'

const function3 = (str) => {
    let newStr = "";
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = str[i] + newStr;
        count++;
        if (count % 3 === 0 && i !== 0) {
            newStr = " " + newStr;
        }
    }
    console.log(newStr);
};

function3("1234567");

// Дана некоторая строка: 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'

const function4 = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    console.log(newStr);
};

function4("AbCdE");

// Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе: [12, 34, 56]

const function5 = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        newArr.push(+(String(arr[i]) + String(arr[i + 1])));
    }
    console.log(newArr);
};

function5([1, 2, 3, 4, 5, 6]);

// Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'

const function6 = (str) => {
    let arr = str.split(" ");
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (count % 2 === 0) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
    }
    arr = arr.join(" ");
    console.log(arr);
};

function6("aaa bbb ccc ddd eee fff");
