
const menu = document.querySelector(".menu-block");
menu.addEventListener("click", () => {
    const menuMask = document.querySelector(".menu-mask");
    const result = menuMask.classList.toggle('showMenu');
    if (result) {
        document.body.style.cssText+= 'overflow: hidden';
    } else {
        document.body.style.removeProperty('overflow');
    }
});