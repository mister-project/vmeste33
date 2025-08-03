// Маппинг месяцев для преобразования формата
const monthNames = {
  "01": "Январь",
  "02": "Февраль",
  "03": "Март",
  "04": "Апрель",
  "05": "Май",
  "06": "Июнь",
  "07": "Июль",
  "08": "Август",
  "09": "Сентябрь",
  10: "Октябрь",
  11: "Ноябрь",
  12: "Декабрь",
};

// Функция для создания аккордеона
document.addEventListener("DOMContentLoaded", () => {
  const reportsList = document.querySelector(".reports-list");
  const sections = document.querySelectorAll(".months-section");

  // Объект для группировки по годам
  const years = {};

  // Группировка секций по годам
  sections.forEach((section) => {
    const header = section.querySelector("h2").textContent;
    const [year, month] = header.split("-");
    if (!years[year]) {
      years[year] = [];
    }
    years[year].push(section);
  });

  // Очистка исходного списка
  reportsList.innerHTML = "";

  // Создание аккордеона для каждого года
  Object.keys(years)
    .sort()
    .reverse()
    .forEach((year) => {
      const yearDiv = document.createElement("div");
      yearDiv.className = "year-section";

      const yearButton = document.createElement("button");
      yearButton.className = "year-button";
      yearButton.textContent = year;

      const yearContent = document.createElement("div");
      yearContent.className = "year-content";
      yearContent.style.display = "none"; // Скрыто по умолчанию

      // Обработка секций для каждого года
      years[year].forEach((section) => {
        const header = section.querySelector("h2").textContent;
        const [, month] = header.split("-");
        const monthName = monthNames[month.replace(" г.", "")];
        section.innerHTML = `<hr> ${section.innerHTML}`;

        section.querySelector("h2").textContent = `${monthName} ${year}`;
        yearContent.appendChild(section);
      });

      // Обработчик клика для кнопки года
      yearButton.addEventListener("click", () => {
        const isOpen = yearContent.style.display === "block";
        yearContent.style.display = isOpen ? "none" : "block";
        yearButton.classList.toggle("active", !isOpen);
      });

      yearDiv.appendChild(yearButton);
      yearDiv.appendChild(yearContent);
      reportsList.appendChild(yearDiv);
    });
});
