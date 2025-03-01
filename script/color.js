function getRandomColor() {
    let letters = 'abcdef0123456789';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('colorChange-btn').addEventListener('click', function(){
    const body = document.getElementById('body')

    body.style.background = getRandomColor();
})