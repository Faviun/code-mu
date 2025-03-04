// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

const function1 = () => {
    for (let i = 10; i <= 1000; i++) {
        if (i.toString()[0] % 2 === 0 && i.toString()[0] !== "0") {
            console.log(i);
        }
    }
};

// function1();

// Дан некоторый массив. Поменяйте местами пары элементов этого массива

const function2 = (arr) => {
    for (let i = 0; i < arr.length; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    console.log(arr);
};

function2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Дан следующий объект:
// let obj = {
// 	1: {
// 		1: 11, 2: 12, 3: 13,
// 	},
// 	2: {
// 		1: 21, 2: 22, 3: 23,
// 	},
// 	3: {
// 		1: 24, 2: 25, 3: 26,
// 	},
// }
// Найдите сумму элементов этого объекта.

const function3 = (obj) => {
    let sum = 0;
    for (let key in obj) {
        for (let key2 in obj[key]) {
            sum += obj[key][key2];
        }
    }
    console.log(sum);
};

function3({
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
});
