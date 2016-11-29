

var arrowRight=$('.page3_arrow-right'),//стрелочка вправо
    arrowLeft=$('.page3_arrow-left'),//стрелочка влево

    dottedLeft=$('.page3_dotatedLeft'),//пунктир полосы
    dottedRight=$('.page3_dotatedRight'),
    dottedCenter=$('.page3_dotatedCenter'),

    allCloud=$('.page3_content_absoluteBlock'),//все облака
    conteiner=$('.page3_content'),//контейнер где лежат все облака
    t=1;//порядковый номер

        arrowRight.on('click',function(){
           var center=t-1,
                left=t-2,
                leftOut=t-3,
                RightOut=t+1;

            if(t<0) {t=allCloud.length-1; }//обнуляем коефициент t когда выше кол-ва облаков

            if(center==-1) {center=allCloud.length-1; }

            if(left==-1) {left=allCloud.length-1;}//редактируем коефициент чтоб не был выше чем колтчество облачков
            if(left==-2) {left=allCloud.length-2;}

            if(leftOut==-1) {leftOut=allCloud.length-1; }
            if(leftOut==-2) {leftOut=allCloud.length-2; }
            if(leftOut==-3) {leftOut=allCloud.length-3; }

            if(RightOut==allCloud.length) {RightOut=0; }
            if(RightOut==allCloud.length+1) {RightOut=1; }

            dottedLeft.animate({opacity:0},300);
            dottedRight.animate({opacity:0},300);
            dottedCenter.animate({opacity:0},300);

            if($(window).width()>768){
                console.log('разрешение больше 768');
                allCloud.eq(t).css({'left':'75%','opacity':1});//добавляем класс который переместит облако в нужное новое положение
                allCloud.eq(RightOut).css({'left':'200%','opacity':0});
                allCloud.eq(center).css({'left':'50%','opacity':1});
                allCloud.eq(left).css({'left':'25%','opacity':1});
                allCloud.eq(leftOut).css({'left':'-100%','opacity':0});
            } else {
                console.log('разрешение меньше 768');
                allCloud.eq(t).css({'top':'60%','left':'50%','opacity':1});//добавляем класс который переместит облако в нужное новое положение
                allCloud.eq(RightOut).css({'top':'200%','left':'50%','opacity':0});
                allCloud.eq(center).css({'top':'30%','left':'50%','opacity':1});
                allCloud.eq(left).css({'top':'0','left':'50%','opacity':1});
                allCloud.eq(leftOut).css({'top':'-100%','left':'50%','opacity':0});
            }

            console.log('движение вправо leftOut: '+leftOut+' left: '+left+' center: '+center+' t: '+t+' RightOut: '+RightOut);

            dottedLeft.animate({opacity:1},1000);
            dottedRight.animate({opacity:1},1000);
            dottedCenter.animate({opacity:1},1000);

             t--;
        });

        arrowLeft.on('click',function(){
            if(t==allCloud.length) {t=0; }
            var rightOut1=t+3,
                right1=t+2,
                center1=t+1,
                left1=t-1,
                leftOut1=t-2;

            if(left1==-1) {left1=allCloud.length-1;}

            if(leftOut1==-1) {leftOut1=allCloud.length-1; }
            if(leftOut1==-2) {leftOut1=allCloud.length-2; }

            if(center1==allCloud.length) {center1=0; }

            if(right1==allCloud.length) {right1=0; }
            if(right1==allCloud.length+1) {right1=1; }
            if(right1==allCloud.length+2) {right1=2; }

            if(rightOut1==allCloud.length) {rightOut1=0; }
            if(rightOut1==allCloud.length+1) {rightOut1=1; }
            if(rightOut1==allCloud.length+2) {rightOut1=2; }
            if(rightOut1==allCloud.length+3) {rightOut1=3; }

            dottedLeft.animate({opacity:0},300);
            dottedRight.animate({opacity:0},300);
            dottedCenter.animate({opacity:0},300);

            if($(window).width()>768){
                console.log('разрешение меньше 768');
                allCloud.eq(t).css({'left':'25%','opacity':1});//добавляем класс который переместит облако в нужное новое положение
                allCloud.eq(left1).css({'left':'-100%','opacity':0});
                allCloud.eq(center1).css({'left':'50%','opacity':1});
                allCloud.eq(right1).css({'left':'75%','opacity':1});
                allCloud.eq(rightOut1).css({'left':'100%','opacity':0});
            } else{
                console.log('разрешение меньше 768');
                allCloud.eq(t).css({'top':'0','left':'50%','opacity':1});//добавляем класс который переместит облако в нужное новое положение
                allCloud.eq(left1).css({'top':'-100%','left':'50%','opacity':0});
                allCloud.eq(center1).css({'top':'30%','left':'50%','opacity':1});
                allCloud.eq(right1).css({'top':'60%','left':'50%','opacity':1});
                allCloud.eq(rightOut1).css({'top':'100%','left':'50%','opacity':0});
            }

            console.log('движение влево leftOut1: '+leftOut1+' left1: '+left1+' t: '+t+' center1: '+center1+' right1: '+right1+' rightOut1: '+rightOut1);

            dottedLeft.animate({opacity:1},800);
            dottedRight.animate({opacity:1},800);
            dottedCenter.animate({opacity:1},800);

            t++;
        });