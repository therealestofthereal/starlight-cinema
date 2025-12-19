// inspired by the best website in the world :))
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });


// comet code
const h1 = document.querySelector("#hero-text h1");
const comet = document.querySelector("#comet");

let hoverTimer = null;

h1.addEventListener("mouseenter", () => {
    hoverTimer = setTimeout(() => {
        // wait 3 seconds  before activating comet when the user hovers over h1
        comet.classList.add("active");

        // remove class after 5 seconds so animation can replay
        setTimeout(() => {
            comet.classList.remove("active");
        }, 5000);
    }, 3000);
});

h1.addEventListener("mouseleave", () => { //if user stops hovering early, cancel comet early
    clearTimeout(hoverTimer);
    hoverTimer = null;

    comet.classList.remove("active");

    // force reset 
    comet.style.animation = "none";
    comet.offsetHeight;
    comet.style.animation = "";
});
