// Выведите в консоль все целые числа от 1 до 100.

const function1 = () => {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
};

// Выведите в консоль все целые числа от -100 до 0.

const function2 = () => {
    for (let i = -100; i <= 0; i++) {
        console.log(i);
    }
};

// Выведите в консоль все целые числа от 100 до 1.

const function3 = () => {
    for (let i = 100; i >= 1; i--) {
        console.log(i);
    }
};

// Выведите в консоль все четные числа из промежутка от 1 до 100.

const function4 = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
};

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

const function5 = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
};

function5();
