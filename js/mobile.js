

(function() {
    const navBlock = document.querySelector(".menu-mask");
    function checkNav() {
        const navH = document.querySelector(".nav").scrollHeight;
        const section1 = document.querySelector(".section-p1");
        const section1Rec = section1.getBoundingClientRect();
        const section2 = document.querySelector(".section-p2");
        const section2Rec = section2.getBoundingClientRect();
        const section3 = document.querySelector(".section-p3");
        const section3Rec = section3.getBoundingClientRect();
        const section4 = document.querySelector(".section-p4");
        const section4Rec = section4.getBoundingClientRect();
        if (section1Rec.top <= navH && section1Rec.bottom >= navH) {
            const curItem = navBlock.querySelector('.cur');
            curItem.classList.remove('cur');
            navBlock.querySelectorAll('.nav-item a')[0].classList.add('cur');
        }
        if (section2Rec.top <= navH && section2Rec.bottom >= navH) {
            const curItem = navBlock.querySelector('.cur');
            curItem.classList.remove('cur');
            navBlock.querySelectorAll('.nav-item a')[1].classList.add('cur');
        }
        if (section3Rec.top <= navH && section3Rec.bottom >= navH) {
            const curItem = navBlock.querySelector('.cur');
            curItem.classList.remove('cur');
            navBlock.querySelectorAll('.nav-item a')[2].classList.add('cur');
        }
        if (section4Rec.top <= navH && section4Rec.bottom >= navH) {
            const curItem = navBlock.querySelector('.cur');
            curItem.classList.remove('cur');
            navBlock.querySelectorAll('.nav-item a')[3].classList.add('cur');
        }
    }
    const menu = document.querySelector(".menu-block");
    menu.addEventListener("click", () => {
        const menuMask = document.querySelector(".menu-mask");
        const result = menuMask.classList.toggle('showMenu');
        if (result) {
            checkNav();
            document.body.style.cssText+= 'overflow: hidden';
        } else {
            document.body.style.removeProperty('overflow');
        }
    });
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