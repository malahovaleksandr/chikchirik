$(document).ready(function(){

    var page1Height=$('#1').offset().top,//положение первой страницы
        page2Height=$('#2').offset().top,//положение второй страницы от верха
        page3Height=$('#3').offset().top,
        page4Height=$('#4').offset().top,
        page5Height=$('#5').offset().top,
        lastScrollTop = 0,
        windowHeight=$(window).height();//высота экрана при которой будет работать перелистывание

    if(windowHeight>660){
        $(window).scroll(function(){
            var st = $(this).scrollTop();

            if (st > lastScrollTop){//вниз прокрутка
               // console.log('вниз');
                if(lastScrollTop==page1Height){
                    $("html, body").animate({scrollTop: page2Height}, 1000);
                    console.log('сработал вниз на страницу 2');
                }
                if(lastScrollTop==page2Height){
                    $("html, body").animate({scrollTop: page3Height}, 1000);
                    console.log('сработал вниз на страницу 3');
                }
                if(lastScrollTop==page3Height){
                    $("html, body").animate({scrollTop: page4Height}, 1000);
                    console.log('сработал вниз на страницу 4');
                }
                if(lastScrollTop==page4Height){
                    $("html, body").animate({scrollTop: page5Height}, 1000);
                    console.log('сработал вниз на страницу 5');
                }

            } else {//вверх
               // console.log('вверх');
                if(lastScrollTop==page5Height){
                    $("html, body").animate({scrollTop: page4Height}, 1000);
                    console.log('сработал вверх на страницу 4');
                }
                if(lastScrollTop==page4Height){
                    $("html, body").animate({scrollTop: page3Height}, 1000);
                    console.log('сработал вверх на страницу 3');
                }
                if(lastScrollTop==page3Height){
                    $("html, body").animate({scrollTop: page2Height}, 1000);
                    console.log('сработал вверх на страницу 2');
                }
                if(lastScrollTop==page2Height){
                    $("html, body").animate({scrollTop: page1Height}, 1000);
                    console.log('сработал вверх на страницу 1');
                }
            }
            lastScrollTop = st;
        });
    } else {
        console.log('маленький экран');
    }





});