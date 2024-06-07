const genButton = document.querySelector('#gen-btn');
const resetButton = document.querySelector('#reset-btn');
const h1 = document.querySelector('h1');

genButton.addEventListener('click', () => { 
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

resetButton.addEventListener('click', () => {
    document.body.style.backgroundColor = ''; // Mengembalikan warna latar belakang ke default
    h1.innerText = 'Random Color Generator'; // Mengembalikan teks h1 ke nilai awal
});

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    return `rgb(${r}, ${g}, ${b})`;
};