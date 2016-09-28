$(document).ready(function(){

    var page1Height=$('#1').offset().top,//положение первой страницы
        page2Height=$('#2').offset().top,//положение второй страницы от верха
        page3Height=$('#3').offset().top,
        page4Height=$('#4').offset().top,

        desktop1=$('#des1'),
        desktop2=$('#des2'),
        desktop3=$('#des3'),
        desktop4=$('#des4');

    desktop1.on('click',function(){
        $("html, body").animate({scrollTop: page1Height}, 1000);
        console.log('move to page1');
    });
    desktop2.on('click',function(){
        $("html, body").animate({scrollTop: page2Height}, 1000);
        console.log('move to page2');
    });
    desktop3.on('click',function(){
        $("html, body").animate({scrollTop: page3Height}, 1000);
        console.log('move to page3');
    });
    desktop4.on('click',function(){
        $("html, body").animate({scrollTop: page4Height}, 1000);
        console.log('move to page4');
    });


});