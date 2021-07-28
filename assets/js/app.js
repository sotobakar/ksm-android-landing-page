const allSections = document.querySelectorAll(".section");
const navBar = document.querySelector("header");
const navBarItems = document.querySelector("#navbar-items");
const brandName = document.querySelector("#brand-name");
const pageSelected = document.querySelector(".page-selected");

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

// callback function to be run whenever threshold is crossed in one direction or the other
const callback = (entries, observer) => {
    const entry = entries[0];

    // toggle class depending on if content div intersects with viewport
    navBar.classList.toggle("bg-tertiary", !entry.isIntersecting);
    navBar.classList.toggle("shadow-md", !entry.isIntersecting);
    navBarItems.classList.toggle("text-black", !entry.isIntersecting);
    brandName.classList.toggle("text-website-primary", !entry.isIntersecting);
    pageSelected.classList.toggle(
        "text-website-primary",
        !entry.isIntersecting
    );
    pageSelected.classList.toggle(
        "border-website-primary",
        !entry.isIntersecting
    );
};

// options controls circumstances under which the observer's callback is invoked
const options = {
    // no root provided - by default browser viewport used to check target visibility
    // only detect if target element is fully visible or not
    threshold: [1],
};

const io = new IntersectionObserver(callback, options);

// observe content div
const target = document.querySelector("#banner-home");
if (target) {
    io.observe(target);
} else {
    // toggle class depending on if content div intersects with viewport
    navBar.classList.toggle("bg-white-1");
    navBar.classList.toggle("shadow-navbar");
    navBarItems.classList.toggle("text-black-3");
    brandName.classList.toggle("text-website-primary");
    pageSelected.classList.toggle("text-website-primary");
    pageSelected.classList.toggle("border-website-primary");
}
