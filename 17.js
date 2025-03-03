// Дана некоторая строка: 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'

const function1 = (str) => {
    const arr = str.split(" ");
    // const result = arr.map((item) => {
    //     if (item.length <= 3) {
    //         return item.toUpperCase();
    //     }
    //     return item;
    // });
    // return result.join(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length <= 3) {
            arr[i] = arr[i].toUpperCase();
        }
    }
    console.log(arr.join(" "));
};

function1("a bc def ghij");

// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

const function2 = (str) => {
    if (str === str.toUpperCase()) {
        console.log("Верхний регистр");
    } else if (str === str.toLowerCase()) {
        console.log("Нижний регистр");
    }
};

function2("A");
function2("a");

// Дано некоторое число, например, такое: 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28

const function3 = (num) => {
    const arr = num.toString().split("");
    const result = arr.filter((item) => item % 2 === 0);
    console.log(result.join(""));
};

function3(123789);
