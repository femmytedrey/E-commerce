const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".closemenu");
const menu = document.querySelector("ul")
const overlay = document.querySelector(".ulcontainer");

hamburger.addEventListener('click', () => {
    if (window.innerWidth <= 1000) { // Check if screen width is 1000px or less
        hamburger.style.display = 'none';
        close.style.display = 'block';
        menu.style.display = 'block';
        overlay.style.display = 'block';
    }
});

close.addEventListener('click', () => {
    if (window.innerWidth <= 1000) { // Check if screen width is 1000px or less
        hamburger.style.display = 'block';
        close.style.display = 'none';
        menu.style.display = 'none';
        overlay.style.display = 'none';
    }
});
