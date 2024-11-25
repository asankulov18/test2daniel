// //task1
// const extractNumbers = (str) => {
//     return str.match(/\d+/g).map(Number);
// };

// console.log(extractNumbers("a1fg5hj6")); // [1, 5, 6]

// //task2

// const fibonacci = (n1 = 0, n2 = 1) => {
//     if (n1 > 144) return;
//     console.log(n1);
//     setTimeout(() => fibonacci(n2, n1 + n2), 1000);
// };

// fibonacci();
// //task3

// const fetchTitles = async () => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const products = await response.json();
//         products.forEach(product => console.log(product.title));
//     } catch (error) {
//         console.error('Ошибка:', error);
//     }
// };
// fetchTitles();

//task4

document.getElementById('color-buttons').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = e.target.textContent;
    }
});

//task5 

const block = document.getElementById('toggle-block');
const button = document.getElementById('toggle-btn');

button.addEventListener('click', () => {
    block.style.display = block.style.display === 'none' ? 'block' : 'none';
});



/// task 6 
    let count = 0;
    const counterDiv = document.getElementById('counter');
    
    const interval = setInterval(() => {
        counterDiv.textContent = count;
        count++;
        if (count > 100) clearInterval(interval);
    }, 1);




    //task 7 

    document.getElementById('get-data-btn').addEventListener('click', async () => {
        try {
            const response = await fetch('product.json');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Ошибка при запросе:', error);
        }
    });




