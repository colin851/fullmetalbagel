

(function() {

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

    const navBlock = document.querySelector(".menu-mask");
    navBlock.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "a") {
            const curItem = navBlock.querySelector('.cur');
            curItem.classList.remove('cur');
            e.target.classList.add('cur');
            const menuMask = document.querySelector(".menu-mask");
            menuMask.classList.remove('showMenu');
            document.body.style.removeProperty('overflow');
        }
    });
})()