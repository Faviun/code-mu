// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

const function1 = (str) => {
    const arr = str.split(" ");
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === "a") {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};

function1("apple banana ananas apricot avocado");

// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

const function2 = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 === 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};

function2([1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

const function3 = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (String(arr[i]).includes("0")) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};

function3([1, 5, 10, 20, 30, 40, 51, 60, 70, 80, 90, 100]);

// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

const function4 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (String(arr[i]).includes("3")) {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
};

// Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'

const function5 = () => {
    let str = "";
    for (let i = 1; i <= 5; i++) {
        str += `-${i}`;
    }
    str += "-";
    console.log(str);
};

function5();

// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// Найдите сумму элементов этого объекта.

const function6 = (obj) => {
    let sum = 0;
    for (let key in obj) {
        for (let key2 in obj[key]) {
            for (let key3 in obj[key][key2]) {
                sum += obj[key][key2][key3];
            }
        }
    }
    console.log(sum);
};

function6({
    1: {
        1: {
            1: 111,
            2: 112,
            3: 113,
        },
        2: {
            1: 121,
            2: 122,
            3: 123,
        },
    },
    2: {
        1: {
            1: 211,
            2: 212,
            3: 213,
        },
        2: {
            1: 221,
            2: 222,
            3: 223,
        },
    },
    3: {
        1: {
            1: 311,
            2: 312,
            3: 313,
        },
        2: {
            1: 321,
            2: 322,
            3: 323,
        },
    },
});
