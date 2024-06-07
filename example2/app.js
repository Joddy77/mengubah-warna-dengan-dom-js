const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll('button');

for(let button of buttons) {
    button.addEventListener('click', colorize)
}

const headings = document.querySelectorAll('h1');

for(let heading of headings) {
    heading.addEventListener('click', colorize)
}

function colorize () {
    this.style.backgroundColor = generateRandomColor();
    this.style.color = generateRandomColor();
}

const reset = document.querySelector('div');
reset.addEventListener('click', reseting);

function reseting () {
     // Reset all buttons
     for (let button of buttons) {
        button.style.backgroundColor = '';
        button.style.color = '';
    }
    
    // Reset all headings
    for (let heading of headings) {
        heading.style.backgroundColor = '';
        heading.style.color = '';
    }
}