 console.log('скрипт main.js в работе')
const burgerMenu = document.querySelector('.burger-menu')
const burgerButton = document.querySelector('.burger-button')


if (burgerMenu && burgerButton) {
    burgerButton.addEventListener('click', ()=>{
        burgerButton.classList.toggle('active')

        if (burgerButton.classList.contains('active')) {
            burgerMenu.classList.add('active')
        } else {
            burgerMenu.classList.remove('active')            
        }
    })
}

const swiperMain = new Swiper(".support-section__swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 80,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1240: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 80,
        },
        850: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 80,
        }
    }
});

const swiperNews = new Swiper(".news-section__swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 80,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1240: {
            slidesPerView: 3,
            centeredSlides: true,
        },
        850: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    }
});

const swiperPartners = new Swiper(".partners-section__swiper", {
    slidesPerView: "auto",
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});


const supportCont = document.querySelector('#support-tabs')

if (supportCont) {
    const supportTabButtons = Array.from(supportCont.children)
    const supportTabItems = Array.from(document.querySelector('.tabs-sec').children)
    
    supportTabButtons.forEach(el=>{
        el.addEventListener('click', ()=>{
			 console.log(el);//Выводим нажимаемую кнопку
         console.log(el.id);//Выводим id нажимаемой кнопки
			// Ниже условие, по которому нажимаемая кнопка становится активной
            if (!el.classList.contains('tab-button--active')) {
                const active = document.querySelector('.tab-button--active')
                const tabIndex = supportTabButtons.indexOf(el)
				

                if (active) { active.classList.remove('tab-button--active') }
                el.classList.add('tab-button--active')
				try{
					supportTabItems.forEach(tab => { tab.style.display = "none" })
                supportTabItems[tabIndex].style.display = "flex"
				} catch (error){'console.error("Нет содержимого в закладке")'}

                
            } 			

            
              //Изм 1  НИЖЕ - УСЛОВИЕ ДЛЯ ПЕРЕХОДОВ НА ДРУГУЮ СТРАНИЦУ ПРИ НАЖАТИИ НА КНОПКУ С ОПРЕДЕЛЕННЫМ id 
                if (el.id === 'donations') { 
					 document.location='https://vmeste33.ru/postupleniya/'
				};
			    if (el.id === 'expenses') {
					 document.location='https://vmeste33.ru/rashody/'
				};
			     if (el.id === 'monthly_reports') { 
					 document.location='https://vmeste33.ru/ezhemesyachnye-otchety/'
				 };
			    if (el.id === 'yearly_reports') { 
					 document.location='https://vmeste33.ru/godovoy-otchet/'
				 };
                    
        })
    })
    
}


document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.documents__tab-button');
  
  const reportSections = document.querySelectorAll('.documents__flex-container');

  tabButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
        
      const year = this.getAttribute('data-year');

      // Удаляем активный класс у всех
      tabButtons.forEach(btn => btn.classList.remove('documents__tab-button--active'));
      this.classList.add('documents__tab-button--active');

      // Показываем нужную группу отчетов
      reportSections.forEach(section => {
        if (section.getAttribute('data-year') === year) {
          section.style.display = 'flex';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
});

// Код для работы аккордеона месячных отчетов - НАЧАЛО

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
      // Изм 20251102-1 начало - создание новой переменной под содержимое отчета
      const reportLastContent = document.createElement("div");
      reportLastContent.className = "report_last_content";
        // Изм 20251102-1 окончание

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
      // Изм
      reportsList.appendChild(reportLastContent);
      reportLastContent.appendChild(document.querySelector('.content_report'))

      const reportContentDelete =  yearContent.querySelectorAll('.content_report');
        reportContentDelete.forEach(e => {
            e.remove()
        })
    });
});

// Код для работы аккордеона месячных отчетов - ОКОНЧАНИЕ
// Начало - выводим содержимое последнеего отчета в правую часть

// Окончание - выводим содержимое последнеего отчета в правую часть