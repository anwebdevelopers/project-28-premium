$(function() {

    //Меню
    $('.header__nav-btn').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').html('<span></span>Закрыть');
            $('.header__nav').fadeIn(500);
        } else {
            $(this).removeClass('active').html('<span></span>Меню');
            $('.header__nav').fadeOut(500);
        }
    });
    $('.header__nav a').click(function() {
        $('.header__nav-btn').removeClass('active').html('<span></span>Меню');
        $('.header__nav').fadeOut(500);
    });


    //Сокрытие жюри

    (function() {
        var heightBox = $('.jury__box').height();
        var heightItem = $('.jury__item').height();
        $('.jury__box').addClass('close').css({
            'max-height': heightItem
        });
        $(window).resize(function() {
            if($('.jury__box').hasClass('close')) {
                heightItem = $('.jury__item').height();
                $('.jury__box').removeAttr('style');
                heightBox = $('.jury__box').height();
                $('.jury__box').addClass('close').css({
                    'max-height': heightItem
                }); 
            } else {
                heightItem = $('.jury__item').height();
                $('.jury__box').removeAttr('style');
                heightBox = $('.jury__box').height();
                $('.jury__box').css({
                    'max-height': heightBox
                });
            }
            return heightItem, heightBox
        });
        $('.jury__button-show').click(function() {
            if ($('.jury__box').hasClass('close')) {
                $(this).text('Скрыть всех');
                $('.jury__box').animate({
                    'max-height': heightBox
                }, 1000).removeClass('close');
            } else {
                $(this).text('Показать всех');
                $('.jury__box').animate({
                    'max-height': heightItem
                }, 1000).addClass('close');
            }
        });
    })();


    //popup

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    //Адаптивный слайдер о форуме
    $('.about__slider').owlCarousel({
        //loop: true,
        nav: true,
        navText: '',
        items: 1,
        autoHeight :true,
        //autoplayTimeout: 10000,
        smartSpeed: 1200,
        //autoplay: true
    });

    //Нумерация дотов в слайдере
    $('.owl-dot').each(function() {
        if (($(this).index() + 1) <= 9 ) {
            $(this).text('0' + ($(this).index() + 1));
        } else {
            $(this).text($(this).index() + 1);
        }
    });


    //Табы программы форума
    $('.tabs__buttons').on('click', '.tabs__button-item:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs__box').find('.tabs__section').removeClass('active').eq($(this).index()).addClass('active');
    });


    //Выравнивание блоков по высоте

    $(".stage__item-title").equalHeights();
    $(".parthners__item-text").equalHeights();
    $(".contacts__item-name").equalHeights();
    $(".top__item-logo").equalHeights();
    $(".top__item-title").equalHeights();
    $(".top__item-text").equalHeights();


    // Плавный скролл

    //$("a[href*='#']").mPageScroll2id();
    $("a[href='#about']").mPageScroll2id();
    $("a[href='#stage']").mPageScroll2id();
    $("a[href='#participation']").mPageScroll2id();
    $("a[href='#tasks']").mPageScroll2id();
    $("a[href='#invited']").mPageScroll2id();
    $("a[href='#nominations']").mPageScroll2id();
    $("a[href='#jury']").mPageScroll2id();
    $("a[href='#parthners']").mPageScroll2id();
    $("a[href='#contacts']").mPageScroll2id();
    $("a[href='#header']").mPageScroll2id();


    //Передача клика на табы
    $("a[href='#participation']").click(function() {
        $('#participation').trigger( "click" );
    });
    $("a[href='#tasks']").click(function() {
        $('#tasks').trigger( "click" );
    })
    $("a[href='#invited']").click(function() {
        $('#invited').trigger( "click" );
    })

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

    //Прелоадер
    $(document).ready(function() {
        $("#preloader__img").fadeOut(200);
        $("#preloader").fadeOut(300);
    });

});
