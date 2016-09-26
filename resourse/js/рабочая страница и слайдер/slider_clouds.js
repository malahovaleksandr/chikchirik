

var arrowRight=$('.page3_arrow-right'),//стрелочка вправо
    arrowLeft=$('.page3_arrow-left'),//стрелочка влево

    allCloud=$('.page3_content_absoluteBlock'),//все облака
    conteiner=$('.page3_content'),//контейнер где лежат все облака
    i=1;//порядковый номер

        arrowRight.on('click',function(){
            console.log('right');
            i++;
            console.log('номер: '+i);
            if(i==allCloud.length) {
                i=0;
                console.log('обнулили i');
            }
            if(i==allCloud.length+1) {
                i=1;
                console.log('обнулили i');
            }
            var center=i+1,
                right=i+2,
                rightOut=i+3, 
                leftOut=i+4;

            if(i==allCloud.length-1) {i=0; }
            if(center==allCloud.length-1) {center=0; }
            if(right==allCloud.length-1) {right=0; }
            if(rightOut==allCloud.length-1) {rightOut=0; }
            if(leftOut==allCloud.length-1) {leftOut=0; }


            conteiner.find('.cloud_absolute_left').removeClass('cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
            conteiner.find('.cloud_absolute_center').removeClass('cloud_absolute_center');
            conteiner.find('.cloud_absolute_right').removeClass('cloud_absolute_right');
            conteiner.find('.cloud_absolute_out_right').removeClass('cloud_absolute_out_right');
            conteiner.find('.cloud_absolute_out_left').removeClass('cloud_absolute_out_left');

            allCloud.eq(i).addClass('cloud_absolute_left');//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(center).addClass('cloud_absolute_center');
            allCloud.eq(right).addClass('cloud_absolute_right');
            allCloud.eq(rightOut).addClass('cloud_absolute_out_left');
            allCloud.eq(leftOut).addClass('cloud_absolute_out_right');


        });

        arrowLeft.on('click',function(){
            console.log('left');
            console.log('номер: '+i);
            i--;
            if(i<0) {
                i=allCloud.length;
                console.log('повысили i');
            }
            var center=i-1,
                right=i-2,
                rightOut=i-3,
                leftOut=i-4;

            if(i==allCloud.length) {i=allCloud.length; }
            if(center==allCloud.length) {center=allCloud.length; }
            if(right==allCloud.length) {right=allCloud.length; }
            if(rightOut==allCloud.length) {rightOut=allCloud.length; }
            if(leftOut==allCloud.length) {leftOut=allCloud.length; }
            
            conteiner.find('.cloud_absolute_left').removeClass('cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
            conteiner.find('.cloud_absolute_center').removeClass('cloud_absolute_center');
            conteiner.find('.cloud_absolute_right').removeClass('cloud_absolute_right');
            conteiner.find('.cloud_absolute_out_right').removeClass('cloud_absolute_out_right');
            conteiner.find('.cloud_absolute_out_left').removeClass('cloud_absolute_out_left');

            allCloud.eq(i).addClass('cloud_absolute_right');//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(center).addClass('cloud_absolute_center');
            allCloud.eq(right).addClass('cloud_absolute_left');
            allCloud.eq(rightOut).addClass('cloud_absolute_out_right');
            allCloud.eq(leftOut).addClass('cloud_absolute_out_left');


        });