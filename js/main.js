$(function() {
    $('.top__slider').slick({
        dots: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    dots: false,
                }
            }
        ],

    });

    $('.reviews__slider').slick({
        slidesToShow: 4,
        dots: true,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],

    })

    $('.burger').on('click', function (){
        $('.menu__list').toggleClass('menu__list-active')
    })
})