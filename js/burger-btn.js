const burger = document.getElementById('burger');
const menuParts = document.querySelectorAll('.menu-part');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuParts.forEach(el => {
        el.classList.toggle('active');
    });
});