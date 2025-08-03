console.log("main-duble.js в работе");
const sections = document.querySelectorAll(".months-section");
console.log(sections);
sections.forEach((section) => {
  const nameReport = section.querySelector("h2").textContent;
  const nameButton = nameReport.slice(0, 4);
  console.log(nameButton);

  const YearButton = document.createElement("button");
});
const accordionContainer = document.querySelector("#accordion-container");

// Перебор массива элементов с классом ccordion:
const acc = document.querySelectorAll(".accordion");
// var i;

acc.forEach((acc_element) => {
  acc_element.addEventListener("click", function (e) {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
// На каждый элемент с классом accordion добавляется действие по клику:
