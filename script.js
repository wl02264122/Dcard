let index = 1;
let lock = true;
function checkControls(){
    const pageA = document.querySelector(".pageA");
    const pageB = document.querySelector(".pageB");
    const pageC = document.querySelector(".pageC");
    if (index === 1 || index === 4 ) {
        pageA.classList.add("active");
        pageB.classList.remove("active");
        pageC.classList.remove("active");
    } else if (index === 2) {
        pageA.classList.remove("active");
        pageB.classList.add("active");
        pageC.classList.remove("active");
    } else if (index === 3 || index === 0) {
        pageA.classList.remove("active");
        pageB.classList.remove("active");
        pageC.classList.add("active");
    }
}
function rightArrowClick() {
    const rightArrow = document.querySelector(".right-arrow");
    const page = document.querySelector(".banner-img");
    rightArrow.addEventListener("click", () => {
        if (!lock) return
        if (index >= 3) {
            setTimeout(() => {
                page.style.transition = "none";
                page.style.left = -600 + "px";
                index = 1;
            }, 150);
        }
        page.style.transition = "150ms ease";
        console.log(index, 1 * (index * -600));
        index++;
        page.style.left = 1 * (index * -600) + "px";
        lock = false;
        checkControls();
        setTimeout(() => {
            lock = true;
        }, 150);
    })
}
function leftArrowClick() {
    const leftArrow = document.querySelector(".left-arrow");
    const page = document.querySelector(".banner-img");
    leftArrow.addEventListener("click", () => {
        checkControls();
        if (!lock) return
        if (index <= 1) {
            setTimeout(() => {
                page.style.transition = "none";
                page.style.left = -1800 + "px";
                index = 3;
            }, 150);
        }
        page.style.transition = "150ms ease";
        index--;
        page.style.left = 1 * (index * -600) + "px";
        lock = false;
        checkControls();
        setTimeout(() => {
            lock = true;
        }, 150);
    })
}
function pageControls() {
    const page = document.querySelector(".banner-img");
    const control = document.querySelector(".control");
    const pageA = document.querySelector(".pageA");
    const pageB = document.querySelector(".pageB");
    const pageC = document.querySelector(".pageC");
    pageA.addEventListener("click", () => {
        pageB.classList.remove("active");
        pageC.classList.remove("active");
        pageA.classList.add("active");
        page.style.left = -600 + "px";
        index = 1;
        console.log(index);
        page.style.transition = "150ms ease";
    })
    pageB.addEventListener("click", () => {
        pageA.classList.remove("active");
        pageC.classList.remove("active");
        control.classList.remove("active");
        pageB.classList.add("active");
        page.style.left = -1200 + "px";
        index = 2;
        console.log(index);
        page.style.transition = "150ms ease";
    })
    pageC.addEventListener("click", () => {
        pageB.classList.remove("active");
        pageA.classList.remove("active");
        control.classList.remove("active");
        pageC.classList.add("active");
        page.style.left = -1800 + "px";
        index = 3;
        console.log(index);
        page.style.transition = "150ms ease";
    })
}
function autoPlayBanner() {     // 自動輪播
    const rightArrow = document.querySelector(".right-arrow");
    const page = document.querySelector(".banner-img");
    const banner = document.querySelector(".banner");
    let autoplay = setInterval(() => {
        checkControls();
        if (index >= 3) {
            setTimeout(() => {
                page.style.transition = "none";
                page.style.left = -600 + "px";
                index = 1;
            }, 150);
        }
        page.style.transition = "150ms ease";
        index++;
        page.style.left = 1 * (index * -600) + "px";
        console.log(index);
        lock = false;
        checkControls();
        setTimeout(() => {
            lock = true;
        }, 150);
    }, 2000);
    banner.addEventListener("mouseenter", () => {
        clearInterval(autoplay);
    })
    banner.addEventListener("mouseleave", () => {
        clearInterval(autoplay);
        autoplay = setInterval(() => {
            if (index >= 3) {
                setTimeout(() => {
                    page.style.transition = "none";
                    page.style.left = -600 + "px";
                    index = 1;
                }, 150);
            }
            page.style.transition = "150ms ease";
            index++;
            page.style.left = 1 * (index * -600) + "px";
            lock = false;
            setTimeout(() => {
                lock = true;
            }, 150);
        }, 2000);
    })
}

function bannerArrowVisibility() {
    const banner = document.querySelector(".banner-high");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    banner.addEventListener("mouseenter", () => {
        leftArrow.style.visibility = "visible";
        rightArrow.style.visibility = "visible";
    })
    banner.addEventListener("mouseleave", () => {
        leftArrow.style.visibility = "hidden";
        rightArrow.style.visibility = "hidden";
    })
}

leftArrowClick();
bannerArrowVisibility();
rightArrowClick();
autoPlayBanner();
pageControls();
checkControls();