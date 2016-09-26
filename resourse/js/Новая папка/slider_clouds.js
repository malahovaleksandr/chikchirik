

var arrowRight=$('.page3_arrow-right'),//стрелочка вправо
    arrowLeft=$('.page3_arrow-left'),//стрелочка влево

    allCloud=$('.page3_content_absoluteBlock'),//все облака
    conteiner=$('.page3_content'),//контейнер где лежат все облака
    i=0;//счетчик для облаков


arrowRight.on('click',function(){
    console.log('ssd');

    allCloud.eq(i)
        .animate({fontSize:"48px" }, 1500 );
    //     top:'-50%',
    //     opacity:0,
    //     left:'-50%'
    // },500
    //     ,function(){
    //     $(this).css({opacity:1,left:'50%'});
    // }
    // );


});