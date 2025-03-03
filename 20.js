// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

const function1 = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && isNaN(str[i])) {
            count++;
        }
    }
    count <= 3 ? console.log("Все ок") : console.log("Больше трех букв");
};

function1("a bWc def12 ghAij");

// Дано число. Получите первую четную цифру с конца этого числа.

const function2 = (num) => {
    const arr = num.toString().split("");
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
            break;
        }
    }
};

function2(1234567890);

// Дана некоторая строка: 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'

const function3 = (str) => {
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = "!" + arr[i].slice(1);
    }
    console.log(arr.join(" "));
};

function3("abcde abcde abcde");

// Дан массив с числами: [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

const function4 = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            console.log("Есть два одинаковых элемента подряд");
            count++;
            break;
        }
    }
    !count && console.log("Нет двух одинаковых элементов подряд");
};

function4([1, 2, 3, 3, 4, 5]);
