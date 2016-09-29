$(document).ready(function(){
    console.log('con slide11');
    var arrowRight=$('.blogPage2_arrow-right'),//стрелочка вправо
        arrowLeft=$('.blogPage2_arrow-left'),//стрелочка влево

        allCloud=$('.page3_content_absoluteBlock'),//все облака
        conteiner=$('.page3_content'),//контейнер где лежат все облака
        t=1;//порядковый номер
    console.log('номер: '+t);
    arrowRight.on('click',function(){
        console.log('номер: '+t);


        var center=t+1,
            right=t+2;
        console.log('center: '+center);
        console.log('right: '+right);

        if(t==allCloud.length) {t=0; }//обнуляем коефициент t когда выше кол-ва облаков
        if(center==allCloud.length) {center=0; console.log('center пронизил: '+t)}//редактируем коефициент чтоб не был выше чем колтчество облачков
        if(center==allCloud.length+1) {center=1; console.log('center пронизил: '+t)}
        if(right==allCloud.length) {right=0;console.log('right пронизил: '+t) }
        if(right==allCloud.length+1) {right=1;console.log('right пронизил: '+t) }
        if(right==allCloud.length+2) {right=2;console.log('right пронизил: '+t) }



        conteiner.find('.cloud_absolute_left').removeClass('cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
        conteiner.find('.cloud_absolute_center').removeClass('cloud_absolute_center');
        conteiner.find('.cloud_absolute_right').removeClass('cloud_absolute_right');

        allCloud.eq(t).addClass('cloud_absolute_left');//добавляем класс который переместит облако в нужное новое положение
        allCloud.eq(center).addClass('cloud_absolute_center');
        allCloud.eq(right).addClass('cloud_absolute_right');


        t++;

    });

    arrowLeft.on('click',function(){

        if(t<0) {t=allCloud.length-1; }
        var center=t-1,
            left=t-2;


        if(center==-1) {center=allCloud.length-1; console.log('center пронизил: '+center)}
        if(center==-2) {center=allCloud.length-2; console.log('center пронизил: '+center)}

        if(left==-1) {left=allCloud.length-1;console.log('left пронизил: '+left) }
        if(left==-2) {left=allCloud.length-2;console.log('left пронизил: '+left) }
        if(left==-3) {left=allCloud.length-3;console.log('left пронизил: '+left) }

        console.log('t: '+t);
        console.log('center: '+center);
        console.log('left: '+left);

        conteiner.find('.cloud_absolute_left').removeClass('cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
        conteiner.find('.cloud_absolute_center').removeClass('cloud_absolute_center');
        conteiner.find('.cloud_absolute_right').removeClass('cloud_absolute_right');

        allCloud.eq(t).addClass('cloud_absolute_right');//добавляем класс который переместит облако в нужное новое положение
        allCloud.eq(center).addClass('cloud_absolute_center');
        allCloud.eq(left).addClass('cloud_absolute_left');

        t--;


    });
});

