const botmobile = document.getElementsById('bot-mobile');


function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

botmobile.addEventListener('click', toggleMenu);
