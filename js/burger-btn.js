const burger = document.getElementById('burger');
const menuParts = document.querySelectorAll('.menu-part');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", !expanded);
    burger.setAttribute("aria-label", !expanded ? "Close menu" : "Open menu");
    menuParts.forEach(el => {
        el.classList.toggle('active');
    });
});
