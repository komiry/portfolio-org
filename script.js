const pages = document.querySelectorAll(".page");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const pageTitle = document.getElementById("page-title");
const lightMode = document.getElementById("sun");
const body = document.querySelector("body");

// let typed = new Typed("#myname", {
//   strings: ["LEMUEL INCISO"],
//   typeSpeed: 70,
//   backSpeed: 110,
//   loop: false,

//   showCursor: false,
//   startDelay: 100,
// });

// new TypeIt("#myname", {
//   strings: "NICE TO MEET YOU!",
//   speed: 75,
//   afterComplete: function (instance) {
//     instance.destroy();
//   },
// }).go();

new TypeIt("#myname", {
  speed: 90,
  afterComplete: function (instance) {
    instance.destroy();
  },
})
  .type("NICE TO MEET YOU!", { delay: 300 })
  .pause(1000)
  .delete(17)
  .pause(1000)
  .type("LENUEL", { delay: 300 })
  .move(-3)
  .delete(1)
  .type("M")
  .move(null, { to: "END" })
  .type(" INCISO")
  .go();

new TypeIt("#hey", {
  speed: 75,
  afterComplete: function (instance) {
    instance.destroy();
  },
})
  .pause(4000)
  .type(" — I'm")
  .go();

lightMode.addEventListener("click", function () {
  lightMode.className =
    lightMode.className === "bi bi-brightness-high"
      ? "bi bi-moon"
      : "bi bi-brightness-high";
  body.className = body.className === "dark" ? "light" : "dark";
});

let currentPage = 0;

showPage(currentPage);

prevButton.addEventListener("click", showPreviousPage);
nextButton.addEventListener("click", showNextPage);

function showPage(index) {
  pages.forEach((page, pageIndex) => {
    page.style.display = pageIndex === index ? "flex" : "none";
  });

  const pageTitleText = pages[index].classList[0]; // Assumes the second class is the page title
  pageTitle.textContent = pageTitleText;
}

function showPreviousPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

function showNextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}
