// Заполните массив целыми числами от 1 до 10.

const function1 = () => {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(i);
    }
    console.log(arr);
};

function1(); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Заполните массив четными числами из промежутка от 1 до 100.

const function2 = () => {
    const arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
};

function2(); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, ... ]

// Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.

const function3 = (arr) => {
    const newArr = arr.map((el) => Math.round(el * 10) / 10);
    console.log(newArr);
};

function3([1.456, 2.125, 3.32, 4.1, 5.34]); // [ 1.5, 2.1, 3.3, 4.1, 5.3 ]
