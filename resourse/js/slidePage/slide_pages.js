$(document).ready(function(){
    console.log('slide connect');
});
if($(window).width()>700){
    console.log('work slide');
    $(".main").onepage_scroll({
        sectionContainer: "section", // контейнер, к которому будет применяться скролл
        easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
        animationTime: 1000, // время анимации
        pagination: false, // скрыть или отобразить пагинатор
        updateURL: false // обновлять URL или нет
    });
}

