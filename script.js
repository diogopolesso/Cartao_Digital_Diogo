const botmobile = document.getElementById('bot-mobile');

function toggleMenu(event) {
    if (event.type === 'toutchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    // const active = nav.classList.contains('active');
    // event.currentTarget.setAttribute('aria-expanded', 'true');
    // if (active) {
    //     event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    // } else {
    //     event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    // }
}

botmobile.addEventListener('click', toggleMenu);
botmobile.addEventListener('touchstart', toggleMenu);
