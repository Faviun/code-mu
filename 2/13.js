// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

const function1 = (str1, str2) => {
    if (str1[str1.length - 1] === str2[0]) {
        console.log("Совпадают");
    } else {
        console.log("Не совпадают");
    }
};

function1("Hello", "Ola");

// Дана некоторая строка. Найдите позицию третьего нуля в строке.

const function2 = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            count++;
            if (count === 3) {
                console.log(i);
                break;
            }
        }
    }
};

function2("1002100300400500");

// Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.

const function3 = (str) => {
    let arr = str.split(",");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    console.log(sum);
};

function3("12,34,56");

// Дана дата в следующем формате: '2025-12-31'
// Преобразуйте эту дату в следующий объект: {year: 2025, month: 12, day: 31}

const function4 = (str) => {
    let arr = str.split("-");
    let obj = {
        year: arr[0],
        month: arr[1],
        day: arr[2],
    };
    console.log(obj);
};

function4("2025-12-31");
