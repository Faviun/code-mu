// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

const function1 = (arr) => {
    const newArr = arr.filter((el) => el.startsWith("http://"));
    console.log(newArr);
};

function1([
    "http://example.com",
    "https://example.com",
    "http://example.com",
    "https://example.com",
    "http://example.com",
]); // [ 'http://example.com', 'http://example.com', 'http://example.com' ]

// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

const function2 = (arr) => {
    const newArr = arr.filter((el) => el.endsWith(".html"));
    console.log(newArr);
};

function2([
    "index.html",
    "style.css",
    "main.js",
    "about.html",
    "contacts.html",
]); // [ 'index.html', 'about.html', 'contacts.html' ]

// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

const function3 = (arr) => {
    const newArr = arr.map((el) => el * 1.1);
    console.log(newArr.map((el) => el.toFixed(1)));
};

function3([1, 2, 3, 4, 5]); // [ 1.1, 2.2, 3.3, 4.4, 5.5 ]
