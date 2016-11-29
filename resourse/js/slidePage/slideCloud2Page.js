$(document).ready(function(){
 console.log('connect slide blog2page');
    var arrowRight=$('.blogPage2_arrow-right'),//стрелочка вправо
        arrowLeft=$('.blogPage2_arrow-left'),//стрелочка влево

        allCloud=$('.blog2page_content_absoluteBlock'),//все облака
        conteiner=$('.page3_content'),//контейнер где лежат все облака
        cont=1;//порядковый номер

    arrowRight.on('click',function(){
       
        var center=cont+1,
            right=cont+2;

        if(cont==allCloud.length) {cont=0; }//обнуляем коефициент t когда выше кол-ва облаков
        if(center==allCloud.length) {center=0; }//редактируем коефициент чтоб не был выше чем колтчество облачков
        if(center==allCloud.length+1) {center=1; }
        if(right==allCloud.length) {right=0; }
        if(right==allCloud.length+1) {right=1;}
        if(right==allCloud.length+2) {right=2; }

        conteiner.find('.blog2page_cloud_absolute_left').removeClass('blog2page_cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
        conteiner.find('.blog2page_cloud_absolute_center').removeClass('blog2page_cloud_absolute_center');
        conteiner.find('.blog2page_cloud_absolute_right').removeClass('blog2page_cloud_absolute_right');

        allCloud.eq(cont).addClass('blog2page_cloud_absolute_left');//добавляем класс который переместит облако в нужное новое положение
        allCloud.eq(center).addClass('blog2page_cloud_absolute_center');
        allCloud.eq(right).addClass('blog2page_cloud_absolute_right');

        cont++;
    });

    arrowLeft.on('click',function(){
        console.log('click left');

        var center=cont-1,
            left=cont-2;
        if(cont<0) {cont=allCloud.length-1; }

        if(center==-1) {center=allCloud.length-1; }
        if(center==-2) {center=allCloud.length-2; }

        if(left==-1) {left=allCloud.length-1; }
        if(left==-2) {left=allCloud.length-2; }
        if(left==-3) {left=allCloud.length-3; }

        conteiner.find('.blog2page_cloud_absolute_left').removeClass('blog2page_cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
        conteiner.find('.blog2page_cloud_absolute_center').removeClass('blog2page_cloud_absolute_center');
        conteiner.find('.blog2page_cloud_absolute_right').removeClass('blog2page_cloud_absolute_right');

        allCloud.eq(cont).addClass('blog2page_cloud_absolute_right');//добавляем класс который переместит облако в нужное новое положение
        allCloud.eq(center).addClass('blog2page_cloud_absolute_center');
        allCloud.eq(left).addClass('blog2page_cloud_absolute_left');

        cont--;
    });
});

