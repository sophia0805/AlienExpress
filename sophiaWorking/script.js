//interactive glow effect following cursor
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.glow');
    //page >> client to scroll down
    const x = e.pageX - 100;
    const y = e.pageY - 100;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
});

//hover effect to features (moves up when mouse is on it)
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

//get started button when mouse hovers
const startButton = document.querySelector('.startbutton');
startButton.addEventListener('mouseenter', () => {
    startButton.classList.remove('pulse');
});
startButton.addEventListener('mouseleave', () => {
    startButton.classList.add('pulse');
});