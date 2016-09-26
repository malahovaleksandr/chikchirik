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
        updateURL: false, // обновлять URL или нет
         
       loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
       keyboard: true,                  // You can activate the keyboard controls
       responsiveFallback: 700,        // You can fallback to normal page scroll by defining the width of the browser in which
                                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                        // the browser's width is less than 600, the fallback will kick in.
       direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".

    });
}

