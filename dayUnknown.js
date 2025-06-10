let intervalId; 

function assignColor() {
    let char = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += char[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
}

function handleInterval() {
    intervalId = setInterval(assignColor, 1000);
}

function stopInterval() {
    clearInterval(intervalId);
}