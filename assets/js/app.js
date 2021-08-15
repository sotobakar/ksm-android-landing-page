const allSections = document.querySelectorAll(".section");
const navBar = document.querySelector("header");
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
    if(!mobileMenuItemsElement.classList.contains('h-36')) {
        navBar.classList.toggle("bg-gray-900", !entry.isIntersecting);
        navBar.classList.toggle("shadow-lg", !entry.isIntersecting);
    }
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
    navBar.classList.toggle("bg-gray-900");
    navBar.classList.toggle("shadow-lg");
}

const mobileMenuButtonElement = document.getElementById('mobile-menu-button');
const mobileMenuItemsElement = document.getElementById('mobile-menu-items');

mobileMenuButtonElement.addEventListener('click', () => {
    mobileMenuItemsElement.classList.toggle('h-36');
    navBar.classList.add('')
})

const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });