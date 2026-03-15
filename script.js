document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    window.addEventListener("scroll", () => {
        if (!nav) {
            return;
        }
        nav.classList.toggle("scrolled", window.scrollY > 12);
    });

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const expanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!expanded));
            navMenu.classList.toggle("is-open");
        });

        document.addEventListener("click", (event) => {
            if (window.innerWidth > 900) {
                return;
            }
            const target = event.target;
            if (!(target instanceof Node)) {
                return;
            }
            if (!navMenu.contains(target) && !menuToggle.contains(target)) {
                navMenu.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }
});
