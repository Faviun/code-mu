// Дана некоторая строка. Получите массив позиций всех нулей в этой в строке.

const function1 = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            arr.push(i);
        }
    }
    console.log(arr);
};

function1("123045006789");

// Дана некоторая строка. Удалите из этой строки каждый третий символ.

const function2 = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 3 !== 0) {
            arr.push(str[i]);
        }
    }
    console.log(arr.join(""));
};

function2("Hello world");

// Дан некоторый массив. Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

const function3 = (arr) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum1 += arr[i];
        } else {
            sum2 += arr[i];
        }
    }
    console.log(sum1 / sum2);
};

function3([1, 2, 3, 4, 5, 6]); // 1 + 3 + 5 = 9; 2 + 4 + 6 = 12; 9 / 12 = 0.75
