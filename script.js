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


    /*
       When changing pages,
       scroll the new page to the top.
    */

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
// FLOATING FLOWERS
// =========================

const flowers = [

    "🌸",
    "🌻"

];


function createFlower() {

    const flower =
        document.createElement("div");


    flower.classList.add("flower");


    /*
       Randomly choose
       🌸 or 🌻
    */

    flower.innerHTML =
        flowers[
            Math.floor(
                Math.random() * flowers.length
            )
        ];


    /*
       Random horizontal position
    */

    flower.style.left =
        Math.random() * 100 + "%";


    /*
       Random size
    */

    flower.style.fontSize =
        (Math.random() * 18 + 18) + "px";


    /*
       Random floating speed
    */

    flower.style.animationDuration =
        (Math.random() * 5 + 6) + "s";


    /*
       Add flower to background
    */

    document
        .querySelector(".flowers")
        .appendChild(flower);


    /*
       Remove after animation
    */

    setTimeout(() => {

        flower.remove();

    }, 12000);

}


// Create flowers every 600ms

setInterval(createFlower, 600);


// Create a few flowers immediately

for (let i = 0; i < 5; i++) {

    setTimeout(
        createFlower,
        i * 300
    );

}


// Show first page

showPage(0);
