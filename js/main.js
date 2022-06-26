$(document).ready(function () {
    
    new WOW().init();

    $('.header__switch-theme').click(function () {
        $(this).toggleClass('switch-on');
        $('body').toggleClass('black');
        if ($('body').hasClass('black')) {
            $('#dark-theme').attr('href', 'css/style-dark.css');
            $('.offer__first').attr('src', 'img/header/camera-black.png');
            $('.offer__second').attr('src', 'img/header/comment-black.png');
            $('.results__img--1').attr('src', 'img/results/photo-black.png');
            $('.results__img--2').attr('src', 'img/results/video-black.png');
            $('.results__img--3').attr(
                'src',
                'img/results/portfolio-black.png'
            );
            $('.bg-1').attr('src', 'img/about/bg-black.webp');
            $('.bg-2').attr('srcset', 'img/about/bg-2-black.webp');
            $('.time__img').attr('src', 'img/time/man-black.png');
            $('.video__first').attr('src', 'img/video/mic-black.png');
            $('.video__second').attr('src', 'img/video/cup-black.png');
            $('.questions__first').attr('src', 'img/questions/lens-black.png');
            $('.footer__img').attr('src', 'img/footer/brains-black.svg');
        } else {
            $('#dark-theme').attr('href', '#');
            $('.offer__first').attr('src', 'img/header/camera.png');
            $('.offer__second').attr('src', 'img/header/comment.png');
            $('.results__img--1').attr('src', 'img/results/photo.png');
            $('.results__img--2').attr('src', 'img/results/video.png');
            $('.results__img--3').attr('src', 'img/results/portfolio.png');
            $('.bg-1').attr('src', 'img/about/bg.webp');
            $('.bg-2').attr('srcset', 'img/about/bg-2.webp');
            $('.time__img').attr('src', 'img/time/man.png');
            $('.video__first').attr('src', 'img/video/mic.png');
            $('.video__second').attr('src', 'img/video/cup.png');
            $('.questions__first').attr('src', 'img/questions/lens.png');
            $('.footer__img').attr('src', 'img/footer/brains.svg');
        }
    });

    $('.about__star--1').mouseenter(() => {
        $('.about__descr--1').css({ opacity: '1' });
    });
    $('.about__star--1').mouseleave(() => {
        $('.about__descr--1').css({ opacity: '0' });
    });

    $('.about__star--2').mouseenter(() => {
        $('.about__descr--2').css({ opacity: '1' });
    });
    $('.about__star--2').mouseleave(() => {
        $('.about__descr--2').css({ opacity: '0' });
    });

    $('.about__star--3').mouseenter(() => {
        $('.about__descr--3').css({ opacity: '1' });
    });
    $('.about__star--3').mouseleave(() => {
        $('.about__descr--3').css({ opacity: '0' });
    });

    $('.about__star--4').mouseenter(() => {
        $('.about__descr--4').css({ opacity: '1' });
    });
    $('.about__star--4').mouseleave(() => {
        $('.about__descr--4').css({ opacity: '0' });
    });

    $('.about__star--5').mouseenter(() => {
        $('.about__descr--5').css({ opacity: '1' });
    });
    $('.about__star--5').mouseleave(() => {
        $('.about__descr--5').css({ opacity: '0' });
    });

    $('.about__star--6').mouseenter(() => {
        $('.about__descr--6').css({ opacity: '1' });
    });
    $('.about__star--6').mouseleave(() => {
        $('.about__descr--6').css({ opacity: '0' });
    });

    $('.about__star--7').mouseenter(() => {
        $('.about__descr--7').css({ opacity: '1' });
    });
    $('.about__star--7').mouseleave(() => {
        $('.about__descr--7').css({ opacity: '0' });
    });

    $('.about__star--8').mouseenter(() => {
        $('.about__descr--8').css({ opacity: '1' });
    });
    $('.about__star--8').mouseleave(() => {
        $('.about__descr--8').css({ opacity: '0' });
    });

    let accordion = function () {
        $('.questions__accard-head').on('click', function () {
            $('.questions__accard-head').not(this).removeClass('active');
            $('.questions__accard-head')
                .not(this)
                .next('.questions__accard-body')
                .not(':animated')
                .slideUp({ duration: 200 });
            $(this).css({ 'pointer-events': 'none' });
            $(this).toggleClass('active');
            $(this)
                .next('.questions__accard-body')
                .not(':animated')
                .slideToggle({ duration: 200 });
            setTimeout(function () {
                $('.questions__accard-head').css({ 'pointer-events': 'auto' });
            }, 200);
        });
    };
    accordion();

    const w = window.screen.availWidth;
    if (w <= 1300) {
        $('.program__swiper').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }
    if (w <= 880) {
        $('.about__star--1').attr('coords', '70, 170, 20');
        $('.about__star--2').attr('coords', '10, 288, 20');
        $('.about__star--3').attr('coords', '11, 403, 20');
        $('.about__star--4').attr('coords', '70, 513, 20');
        $('.about__star--5').attr('coords', '468, 512, 20');
        $('.about__star--6').attr('coords', '526, 403, 20');
        $('.about__star--7').attr('coords', '526, 287, 20');
        $('.about__star--8').attr('coords', '474, 178, 20');
    }

    if (w <= 580) {
        $('.about__star--1').attr('coords', '43, 108, 20');
        $('.about__star--2').attr('coords', '6, 181, 20');
        $('.about__star--3').attr('coords', '6, 253, 20');
        $('.about__star--4').attr('coords', '44, 322, 20');
        $('.about__star--5').attr('coords', '291, 321, 20');
        $('.about__star--6').attr('coords', '330, 253, 20');
        $('.about__star--7').attr('coords', '329, 181, 20');
        $('.about__star--8').attr('coords', '297, 112, 20');
    }

    if (w <= 375) {
        $('.about__star--1').attr('coords', '36, 90, 30');
        $('.about__star--2').attr('coords', '3, 150, 30');
        $('.about__star--3').attr('coords', '4, 212, 30');
        $('.about__star--4').attr('coords', '36, 269, 30');
        $('.about__star--5').attr('coords', '243, 269, 30');
        $('.about__star--6').attr('coords', '275, 211, 30');
        $('.about__star--7').attr('coords', '275, 151, 30');
        $('.about__star--8').attr('coords', '248, 94, 30');
    }

    $('.program__link--1').click(function () {
        $('.overlay--1').fadeIn();
    });

    $('.program__link--2').click(function () {
        $('.overlay--2').fadeIn();
    });
    $('.program__link--3').click(function () {
        $('.overlay--3').fadeIn();
    });
    $('.program__link--4').click(function () {
        $('.overlay--4').fadeIn();
    });

    $('.program__link').click(function () {
        $('body').addClass('active');
        $('section').addClass('active');
    });

    $('.close-popup').click(function () {
        $('.overlay').fadeOut();
        $('body').removeClass('active');
        $('section').removeClass('active');
    });

    $('.bg-popup').click(function () {
        $('.overlay').fadeOut();
        $('body').removeClass('active');
        $('section').removeClass('active');
    });

    $('.popup__prize').click(function () {
        $('.overlay').fadeOut();
        $('body').removeClass('active');
        $('section').removeClass('active');
    });
});
