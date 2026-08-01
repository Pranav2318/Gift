let currentPage = 0;

const pages = document.querySelectorAll(".page");


// =========================
// SHOW PAGE
// =========================

function showPage(index) {

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

    // Scroll the new page back to the top
    pages[index].scrollTop = 0;
}


// =========================
// NEXT PAGE
// =========================

function nextPage() {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage(currentPage);

    }

}


// =========================
// RESTART
// =========================

function restart() {

    currentPage = 0;

    showPage(currentPage);

}


// =========================
// FLOATING HEARTS
// =========================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        Math.random() > 0.5
            ? "❤️"
            : "💗";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";


    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";


    document
        .querySelector(".hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


// Create hearts
setInterval(createHeart, 500);


// Create a few hearts immediately
for (let i = 0; i < 5; i++) {
    setTimeout(createHeart, i * 300);
}


// Make sure first page is visible
showPage(0);