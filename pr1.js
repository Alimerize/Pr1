var showButton = document.querySelector('#block__link-list__show-button'); //кнопка Показать всё/Скрыть всё
var showButtonImg = document.querySelector('#block__link-list__show-button__img'); //иконка рядом с кнопкой^
var linkListItem = document.querySelectorAll('.block__link-list__li-hidden'); //скрытые элементы
var isVisible = false; //проверка отображения


const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 2, // Количество слайдов, отображаемых одновременно
    navigation: {
        nextEl: '.swiper-button-next', // Кнопка "Следующий"
        prevEl: '.swiper-button-prev', // Кнопка "Предыдущий"
    },
    pagination: {
        el: '.swiper-pagination', // Элемент для пагинации
        clickable: true, // Возможность клика по пагинации
    },
    breakpoints: {
        120: {
            slidesPerView: 2,
            spaceBetween: 160, // 20px между слайдами на экранах шириной 640px и более
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 50, // 40px между слайдами на экранах шириной 1024px и более
        },
    },
});

const swiperContainer = document.querySelector('.swiper');

function checkWidth() {
    if (window.innerWidth > 798) {
        swiperContainer.style.display = 'none'; // Скрыть Swiper
    } else {
        swiperContainer.style.display = 'block'; // Показать Swiper
    }
}
// Проверка ширины при загрузке страницы
checkWidth();

// Проверка ширины при изменении размера окна
window.addEventListener('resize', checkWidth);

function checkScreenSize() {
    const li7 = document.querySelector('.block__link-list__li-7');
    const li8 = document.querySelector('.block__link-list__li-8');

    if (window.innerWidth > 1120) {
        if (li7) li7.classList.remove('hidden');
        if (li8) li8.classList.remove('hidden');
    } else {
        if (li7) li7.classList.add('hidden');
        if (li8) li8.classList.add('hidden');
    }
}

// Проверяем размер экрана при загрузке страницы
checkScreenSize();

// Добавляем обработчик события для изменения размера окна
window.addEventListener('resize', checkScreenSize);


showButton.addEventListener('click', function() {
    isVisible = !isVisible;
    console.log(linkListItem);
    linkListItem.forEach(function(item) {
        item.style.display = isVisible ? 'block' : 'none'; // Показываем или скрываем элементы
    });
    showButton.textContent = isVisible ? 'Скрыть всё' : 'Показать всё'; 
    showButtonImg.src = isVisible ? '../Pr1/img/expandup.svg' : '../Pr1/img/expand.svg';
    checkScreenSize();
}) 


