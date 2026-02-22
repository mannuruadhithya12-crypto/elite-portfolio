// TYPING ANIMATION
const typingText = "AI & Full Stack Developer";
const typingElement = document.getElementById("typing");
let charIndex = 0;

function type() {
    if (charIndex < typingText.length) {
        typingElement.textContent += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    }
}

window.addEventListener("load", () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    type();
    reveal();
});

// SCROLL REVEAL
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

// NAVBAR SCROLL EFFECT
function handleNavbarScroll() {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

// PROJECT FILTERING
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove("active"));
        // Add active class to clicked button
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        projectCards.forEach(card => {
            if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                card.style.display = "block";
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                }, 10);
            } else {
                card.style.opacity = "0";
                card.style.transform = "scale(0.8)";
                setTimeout(() => {
                    card.style.display = "none";
                }, 400);
            }
        });
    });
});

// INITIALIZE
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", handleNavbarScroll);
window.addEventListener("load", () => {
    type();
    reveal();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
