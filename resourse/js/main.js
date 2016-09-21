    $(document).ready(function(){
        console.log('подключен меню перелистывает ');
    });

    // desctop 4 при нажатии на меню появляется текст
    var itemMenu=$('.page4_menu-item'),//пункт меню
        textMenu=itemMenu.find('.page4_menu-text');//текст которыйдолжен появиться

    itemMenu.on('click',function(){
        var $this = $(this),
            page4=$this.parent('.content-desktop_page4'),//находим блок страницы
            activBlockText=page4.find('.page4_menu-text_activ'),//находим существующий активный клас у текста
            activBlockTitle=page4.find('.page4_menu-title_activ');//находим существующий активный клас у титула

            activBlockTitle.removeClass('page4_menu-title_activ');// удаляем у титула существующий активный класс
            activBlockText.removeClass('page4_menu-text_activ');// удаляем у текста существующий активный класс
        $this.find('.page4_menu-text').addClass('page4_menu-text_activ');// добавляем тексту автиквный класс элементу на который нажали
        $this.find('.page4_menu-title').addClass('page4_menu-title_activ');// добавляем титулу автиквный класс элементу на который нажали

    });