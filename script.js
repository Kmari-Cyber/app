document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    button1.addEventListener('click', () => {
        console.log('Вы нажали на кнопку 1');
    });

    button2.addEventListener('click', () => {
        console.log('Вы нажали на кнопку 2');
    });

    button3.addEventListener('click', () => {
        console.log('Вы нажали на кнопку 3');
    });
});