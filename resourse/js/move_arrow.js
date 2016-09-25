$(document).ready(function(){
    console.log('connect move arrow');
    var arrowBlock= $('.desktop1_learn-more__arrow');


    function bigArrow (){

        arrowBlock.animate({
            marginBottom: "8px",
            width: "22px",
            opacity:1,
            height: '34px'
        },800);
        setTimeout(function(){
            smallArrow();
        }, 1000);

    }
    function smallArrow(){

        arrowBlock.animate({
            marginBottom: 0,
            width: "15px",
            opacity:0.5,
            height: '28px'
        },1000);
    }



    setInterval(bigArrow,2200);

});