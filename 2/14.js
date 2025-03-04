// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

const function1 = (str) => {
    let a = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && !isNaN(str[i])) {
            console.log(i);
            break;
        }
    }
};

function1("Hello 123");

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

const function2 = (obj) => {
    let keys = [];
    let values = [];
    for (let key in obj) {
        keys.push(key);
        values.push(obj[key]);
    }
    console.log(keys);
    console.log(values);
};

function2({a: 1, b: 2, c: 3});

// Дано число. Выведите в консоль количество четных цифр в этом числе.

const function3 = (num) => {
    let str = String(num);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0) {
            count++;
        }
    }
    console.log(count);
};

function3(123456789);

// Дана некоторая строка: Переведите в верхний регистр все нечетные буквы этой строки

const function4 = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) {
            arr.push(str[i].toUpperCase());
        } else {
            arr.push(str[i]);
        }
    }
    console.log(arr.join(""));
};

function4("Hello");

// Дана некоторая строка со словами:'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

const function5 = (str) => {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    arr = arr.join(" ");
    console.log(arr);
};

function5("aaa bbb ccc");
