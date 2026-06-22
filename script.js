const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    (window.scrollY > 140) ? header.classList.add("scrolled") : header.classList.remove("scrolled");
})

const hamburgerButton = document.querySelector(".hamburger-bttn");
const primaryNav = document.querySelector(".primary-navigation");

hamburgerButton.addEventListener("click", () => {
    const isOpened = hamburgerButton.getAttribute("aria-expanded");
    const visibility = primaryNav.getAttribute("data-visible");

    if (isOpened === "false" && visibility === "false") {
        hamburgerButton.setAttribute("aria-expanded", "true");
        primaryNav.setAttribute("data-visible", "true");
        header.classList.add("scrolled");
    }
    else {
        hamburgerButton.setAttribute("aria-expanded", "false");
        primaryNav.setAttribute("data-visible", "false");
    }
}); 


const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => {
            t.classList.remove("active");
        })
        tab.classList.add("active");
        hamburgerButton.setAttribute("aria-expanded", "false");
        primaryNav.setAttribute("data-visible", "false");
    });
});

document.addEventListener('click', e => {
    if (!e.target.closest('.primary-navigation') && !e.target.closest('.hamburger-bttn')) {
        hamburgerButton.setAttribute("aria-expanded", "false");
        primaryNav.setAttribute("data-visible", "false");
    }
});