$(document).ready(function(){

    var page1Height=$('#1').offset().top,//положение первой страницы
        page2Height=$('#2').offset().top,//положение второй страницы от верха
        lastScrollTop = 0,
        windowHeight=$(window).height();//высота экрана при которой будет работать перелистывание

    if(windowHeight>660){
        $(window).scroll(function(){
            var st = $(this).scrollTop();
            if (st > lastScrollTop){//вниз прокрутка
                if(lastScrollTop==page1Height){
                    $("html, body").animate({scrollTop: page2Height}, 1000);
                }
            } else {//вверх
                if(lastScrollTop==page2Height){
                    $("html, body").animate({scrollTop: page1Height}, 1000);
                }
            }
            lastScrollTop = st;
        });
    } else {
        console.log('маленький экран');
    }

});