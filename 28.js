// Дана строка в формате:

// 'kebab-case'
// Преобразуйте ее в формат:

// 'snake_case'

const function1 = (str) => {
    console.log(str.replace(/-/g, "_"));
};

function1("kebab-case");

// Дана строка в формате:

// 'snake_case'
// Преобразуйте ее в формат:

// 'camelCase'

const function2 = (str) => {
    console.log(str.replace(/(_\w)/g, (match) => match[1].toUpperCase()));
};

function2("snake_case");

// Дана строка в формате:

// 'camelCase'
// Преобразуйте ее в формат:

// 'snake_case'

const function3 = (str) => {
    console.log(str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`));
};

function3("camelCase");

// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

const function4 = () => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        arr[i] = [];
        for (let j = 0; j < 3; j++) {
            arr[i].push(j + 1);
        }
    }
    console.log(arr);
};

function4();
