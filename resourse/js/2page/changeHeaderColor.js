$(document).ready(function(){
    console.log('changhe header');//подключения меню на весь экран зеленое

    //переменные для перемены фона хэдер
    var    footer=$('.footer'),//блок футера
        header=$('.header'),//блок хедер
        headerLogo=$('.header_logo'),//картинка логотипа
        headButton=$('.header__coins_button'),//кнопка купить в шапке
        heightHeader=header.height(),
        topPage2=$('#2').offset().top-heightHeader;//начало верха второй страницы минус высота хедера

    $(document).on('scroll',function() {//функция для смены цвета хедер при скролле страниц
        var scrollTop = $(window).scrollTop();
        //эти условия срабатывают когда прокрутка опускается до нужного блока и беруться параметры из БД и применяются к нужному кружку
        if (scrollTop < topPage2) {//при прокрутке меняем цвет header и footer
            header.css('background', '#4AB7C7');
            headerLogo.attr('src', '../image/logovector.png');
            headButton.removeClass('color_blue');
        }
        if (scrollTop >= topPage2) {//при прокрутке меняем цвет header и footer
            header.css('background', '#eda223');
            headerLogo.attr('src', '../image/logoWhite.png');
            headButton.addClass('color_blue');
        }   
    });

});








