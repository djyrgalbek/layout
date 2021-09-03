/* Simulation API */

// Data of the gallery
const galery = [
        {
            id: 0,
            name: "pic1.png"
        },

        {
            id: 1,
            name: "pic2.png"
        },

        {
            id: 2,
            name: "pic3.png"
        },

        {
            id: 3,
            name: "pic4.png"
        },

        {
            id: 4,
            name: "pic2.png"
        },

        {
            id: 5,
            name: "pic1.png"
        },

        {
            id: 6,
            name: "pic2.png"
        },

        {
            id: 7,
            name: "pic3.png"
        },

        {
            id: 8,
            name: "pic4.png"
        },

        {
            id: 9,
            name: "pic1.png"
        },

        {
            id: 10,
            name: "pic3.png"
        },

        {
            id: 11,
            name: "pic1.png"
        }
    ]

// These reviews 

let reviews = [
        {
            name: "Валерия Антонова",
            prof: "Арт-директор",
            image: "user1.png",
            short_text: "Супер! Я бы заказал съемку снова!",
            text: "Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!",
            date: "27 Апреля, 2019г.",
            assessment: 0
        },

        {
            name: "Виталий Петров",
            prof: "Фотограф",
            image: "user2.png",
            short_text: "Супер! Я бы заказал съемку снова!",
            text: "Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная. Спасибо!",
            date: "19 Апреля, 2019г.",
            assessment: 3
        },

        {
            name: "Джим Керри",
            prof: "Фотограф",
            image: "user3.png",
            short_text: "Супер! Я бы заказал съемку снова!",
            text: "Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!",
            date: "11 Апреля, 2019г.",
            assessment: 5
        },

        {
            name: "Валерия Антонова",
            prof: "Арт-директор",
            image: "user1.png",
            short_text: "Супер! Я бы заказал съемку снова!",
            text: "Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!",
            date: "27 Апреля, 2019г.",
            assessment: 1
        },

        {
            name: "Виталий Петров",
            prof: "Фотограф",
            image: "user2.png",
            short_text: "Супер! Я бы заказал съемку снова!",
            text: "Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная. Спасибо!",
            date: "19 Апреля, 2019г.",
            assessment: 4
        },

        {
            name: "Джим Керри",
            prof: "Фотограф",
            image: "user3.png",
            short_text: "Супер! Я бы заказал съемку снова!",
            text: "Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!",
            date: "11 Апреля, 2019г.",
            assessment: 5
        },

        {
            name: "Валерия Антонова",
            prof: "Арт-директор",
            image: "user1.png",
            short_text: "Супер! Я бы заказал съемку снова!",
            text: "Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!",
            date: "27 Апреля, 2019г.",
            assessment: 2
        },

        {
            name: "Виталий Петров",
            prof: "Фотограф",
            image: "user2.png",
            short_text: "Супер! Я бы заказал съемку снова!",
            text: "Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная. Спасибо!",
            date: "19 Апреля, 2019г.",
            assessment: 20
        },

        {
            name: "Джим Керри",
            prof: "Фотограф",
            image: "user3.png",
            short_text: "Супер! Я бы заказал съемку снова!",
            text: "Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!",
            date: "11 Апреля, 2019г.",
            assessment: 5
        },
    ];

// Initialize data
    
$(document).ready(
    function () {
        $('.video__image:eq(0)').on('click', playVideo);
        $('.reviews__count').text( '(' + getCountReviews() + ')');
        $('.gallery_btn_show_elem:eq(0)').on('click', getAllPhotoInGalery);
        $('.gallery_btn_show_elem:eq(1)').on('click', hiddenPartGalery);
        $('.about_us_review__btn').on('click', showAndHiddenText);
        $('#reservations').on('click', function () {
            $('.shadow:eq(0)').toggle();
        });

        $('#close').on('click', function () {
            $('.shadow:eq(0)').toggle();
        });

        $('#reviews__btn-show').on('click', function () {
            getReviews(3, reviews.length);
            $(this).toggle();
            $('#reviews__btn-hide').toggle();
        })

        $('#reviews__btn-hide').on('click', function() {
            hideReviews();
            $(this).toggle();
            $('#reviews__btn-show').toggle();
        });

        getGalery();
        getReviews(0, 3);
    }
);

// Function for display and video playback

function playVideo () {
    let img = $('.video__image:eq(0)');
    let ifr = $('.iframe:eq(0)');

    ifr.css( 'height', img.css('height') );
    img.css('display', 'none');
    ifr.css('display', 'block');
}

// A function to return the gallery to the tag class .galery__list

function getGalery () {
    let out = '';

    for (let i = 0; i < 8; i++) {
        out += '<li class="galery__item">';
        out += '<img src="image/' + galery[i].name + '" alt="' + galery[i].name + '" class="galery__img">';
        out += '</li>';
    }

    $('.galery__list').eq(0).html(out);
} 

// Function to display all photos in the gallery

function getAllPhotoInGalery () {
    let out = '';

    for (let i = 8; i < galery.length; i++) {
        out += '<li class="galery__item">';
        out += '<img src="image/' + galery[i].name + '" alt="' + galery[i].name + '" class="galery__img">';
        out += '</li>';
    }

    document.getElementsByClassName('galery__list')[0].insertAdjacentHTML('beforeend', out);
    customerButtonGallery(true);
}

// Function to hide / show button for the gallery show all pictures

function customerButtonGallery (arg) {
    let btn = $('.gallery_btn_show_elem');

    if (arg == true) {
        btn.eq(0).removeClass('active');
        btn.eq(0).addClass('hidden');
        btn.eq(1).removeClass('hidden');
        btn.eq(1).addClass('active');
    } else {
        btn.eq(0).removeClass('hidden');
        btn.eq(0).addClass('active');
        btn.eq(1).removeClass('active');
        btn.eq(1).addClass('hidden');
    }
}

// Function to hide unwanted photos in the gallery

function hiddenPartGalery () {
    let photos = $('.galery__item');

    for(let i = 8; i < photos.length; i++) {
        photos.eq(i).remove();
    }

    customerButtonGallery(false);
}

// Function to show / hide the button read more

function showAndHiddenText () {
    $(this).parent().find('.about_us_review__text-short').toggle();
    $(this).parent().find('.about_us_review__text-full').toggle();

    let text = $(this);

    if (text.text() == "Читать еще") {
        text.html('Скрыть<span class="arrow-up"></span>');
    } else {
        text.html('Читать еще<span class="arrow-down"></span>');
    }
}

// Function to return reviews in a block reviews

function getReviews (a, b) {
    let out = '';

    for (let i = a; i < b; i++) {
        out += '<section class="reviews__container">';
        out += '<div class="reviews__wrapper-1">';
        out += '<img src="image/reviews/' + reviews[i].image + '" alt="' + reviews[i].name + '" class="reviews__img">';
        out += '<div class="reviews__box">';
        out += '<p class="reviews__name">' + reviews[i].name + '</p>';
        out += '<p class="reviews__prof">' + reviews[i].prof + '</p>';

        out += '<div class="achievements reviews__achievements">';
        out += getAssessment( reviews[i].assessment );

        out += '<span class="reviews__text-1 checkbox" id="rt1">' + reviews[i].short_text + '</span>';
        out += '</div>';
        out += '</div>';
        out += '</div>';

        out += '<div class="reviews__wrapper-2">';
        out += '<span class="reviews__text-1 checkbox" id="rt2">' + reviews[i].short_text + '</span>';
        out += '<article class="reviews__text-2">' + reviews[i].text + '</article>';

        out += '<date class="reviews__text-1">' + reviews[i].date + '</date>';
        out += '</div>';
        out += '</section>';
    }

    document.getElementById('reviews').insertAdjacentHTML('afterend', out);
}

// The function returns the number of ratings (stars)

function getAssessment (assessment) {
    let out = '';

    if (assessment > 0) {
        assessment = (assessment > 5) ? 5 : assessment;

        out += '<ul class="achievements__list">';

        for (i = 0; i < assessment; i++) {
            out += '<li class="achievements__item"></li>';
        }
    
        out += '</ul>';

        return out;
    } 

    return '<span class="empty">оценки нет</span>';
}

// Function to retrieve the number of reviews 

function getCountReviews () {
    return reviews.length;
}

// Function to hide unnecessary reviews

function hideReviews () {
    let rews = $('.reviews__container');
    
    for (let i = 3; i < rews.length; i++) {
        rews.eq(i).remove();
    }
}

// Function for booking a place (causes a modal window)
function toBookAPlace () {
    isDisplayBlock('.shadow:eq(0)');
}


