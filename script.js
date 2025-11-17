// ===============================
// PREMIUMWEB - MAIN SCRIPT
// ===============================

// Mobile Menu Toggle
const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
    } else {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
    }
});

// Smooth Scroll for Internal Links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId.length > 1) {
            event.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Scroll Reveal (Simple Version)
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerPoint) {
            el.classList.add('opacity-100', 'translate-y-0');
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
