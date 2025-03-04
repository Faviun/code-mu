// Дана строка со словами. Отсортируйте слова в алфавитном порядке.

const function1 = (str) => {
    console.log(str.split(" ").sort().join(" "));
};

function1("apple banana ananas apricot avocado");

// Дано число. Получите массив делителей этого числа.

const function2 = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
};

function2(10);

// Даны два числа. Получите массив общих делителей этих чисел.

const function3 = (num1, num2) => {
    const arr = [];
    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
};

function3(10, 15);

// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

const function4 = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("No");
            return;
        } else {
            console.log("Yes");
            return;
        }
    }
};

function4(13);

// Через запятую написаны числа. Получите максимальное из этих чисел.

const function5 = (str) => {
    console.log(Math.max(...str.split(",")));
};

function5("1,2,3,4,5,6,7,8,9,10");

// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

const function6 = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        if (String(arr[i]).length < 2) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};

function6([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Дана строка. Удалите из нее все гласные буквы.

const function7 = (str) => {
    console.log(str.replace(/[аеёиоуыэюя]/g, ""));
};

function7("Привет яблоко");

// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке, учитывая запятые и прочие знаки препинания.

const function8 = (str) => {
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(",")) {
            arr[i] = arr[i].slice(0, -2) + arr[i].slice(-2).toUpperCase();
        } else {
            arr[i] = arr[i].slice(0, -1) + arr[i].slice(-1).toUpperCase();
        }
    }
    console.log(arr.join(" "));
};

function8("привет как дела, всё нормально азаза");
