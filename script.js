<script src="script.js"></script>
// ========================================
// BIOTECHNOLOGY PORTFOLIO - JAVASCRIPT
// ========================================

// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to my biotechnology portfolio!");
});

// ========================================
// SMOOTH SCROLLING
// ========================================

document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ========================================
// CURRENT YEAR
// ========================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// ========================================
// CONTACT BUTTON
// ========================================

const contactButton = document.getElementById("contactButton");

if (contactButton) {
    contactButton.addEventListener("click", function () {
        alert("Thank you for visiting my biotechnology portfolio!");
    });
}

// ========================================
// PROJECT CARD ANIMATION
// ========================================

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-5px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log("Portfolio successfully loaded.");
console.log("Future Biotechnology Researcher | Genetics | Molecular Biology | CRISPR");
