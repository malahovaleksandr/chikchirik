$(document).ready(function(){
 console.log('connect slide blog2page');
    var arrowRight=$('.blogPage2_arrow-right'),//стрелочка вправо
        arrowLeft=$('.blogPage2_arrow-left'),//стрелочка влево

        allCloud=$('.blog2page_content_absoluteBlock'),//все облака
        cont=1;//порядковый номер

    arrowRight.on('click', function () {
        var center = cont - 1,
            left = cont - 2,
            leftOut = cont - 3,
            RightOut = cont + 1;

        if (cont < 0) {
            cont = allCloud.length - 1;
        }//обнуляем коефициент t когда выше кол-ва облаков

        if (center == -1) {
            center = allCloud.length - 1;
        }

        if (left == -1) {
            left = allCloud.length - 1;
        }//редактируем коефициент чтоб не был выше чем колтчество облачков
        if (left == -2) {
            left = allCloud.length - 2;
        }

        if (leftOut == -1) {
            leftOut = allCloud.length - 1;
        }
        if (leftOut == -2) {
            leftOut = allCloud.length - 2;
        }
        if (leftOut == -3) {
            leftOut = allCloud.length - 3;
        }

        if (RightOut == allCloud.length) {
            RightOut = 0;
        }
        if (RightOut == allCloud.length + 1) {
            RightOut = 1;
        }


        if ($(window).width() > 768) {
            console.log('разрешение больше 768');
            allCloud.eq(cont).css({'left': '75%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(RightOut).css({'left': '200%', 'opacity': 0});
            allCloud.eq(center).css({'left': '50%', 'opacity': 1});
            allCloud.eq(left).css({'left': '25%', 'opacity': 1});
            allCloud.eq(leftOut).css({'left': '-100%', 'opacity': 0});
        } else {
            console.log('разрешение меньше 768');
            allCloud.eq(cont).css({'top': '100%', 'left': '50%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(RightOut).css({'top': '200%', 'left': '50%', 'opacity': 0});
            allCloud.eq(center).css({'top': '50%', 'left': '50%', 'opacity': 1});
            allCloud.eq(left).css({'top': '0', 'left': '50%', 'opacity': 1});
            allCloud.eq(leftOut).css({'top': '-100%', 'left': '50%', 'opacity': 0});
        }

        console.log('движение вправо leftOut: ' + leftOut + ' left: ' + left + ' center: ' + center + ' cont: ' + cont + ' RightOut: ' + RightOut);

        cont--;
    });

    arrowLeft.on('click', function () {
        if (cont == allCloud.length) {
            cont = 0;
        }
        var rightOut1 = cont + 3,
            right1 = cont + 2,
            center1 = cont + 1,
            left1 = cont - 1,
            leftOut1 = cont - 2;

        if (left1 == -1) {
            left1 = allCloud.length - 1;
        }

        if (leftOut1 == -1) {
            leftOut1 = allCloud.length - 1;
        }
        if (leftOut1 == -2) {
            leftOut1 = allCloud.length - 2;
        }

        if (center1 == allCloud.length) {
            center1 = 0;
        }

        if (right1 == allCloud.length) {
            right1 = 0;
        }
        if (right1 == allCloud.length + 1) {
            right1 = 1;
        }
        if (right1 == allCloud.length + 2) {
            right1 = 2;
        }

        if (rightOut1 == allCloud.length) {
            rightOut1 = 0;
        }
        if (rightOut1 == allCloud.length + 1) {
            rightOut1 = 1;
        }
        if (rightOut1 == allCloud.length + 2) {
            rightOut1 = 2;
        }
        if (rightOut1 == allCloud.length + 3) {
            rightOut1 = 3;
        }


        if ($(window).width() > 768) {
            console.log('разрешение меньше 768');
            allCloud.eq(cont).css({'left': '25%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(left1).css({'left': '-100%', 'opacity': 0});
            allCloud.eq(center1).css({'left': '50%', 'opacity': 1});
            allCloud.eq(right1).css({'left': '75%', 'opacity': 1});
            allCloud.eq(rightOut1).css({'left': '100%', 'opacity': 0});
        } else {
            console.log('разрешение меньше 768');
            allCloud.eq(cont).css({'top': '0', 'left': '50%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(left1).css({'top': '-100%', 'left': '50%', 'opacity': 0});
            allCloud.eq(center1).css({'top': '50%', 'left': '50%', 'opacity': 1});
            allCloud.eq(right1).css({'top': '100%', 'left': '50%', 'opacity': 1});
            allCloud.eq(rightOut1).css({'top': '100%', 'left': '50%', 'opacity': 0});
        }

        console.log('движение влево leftOut1: ' + leftOut1 + ' left1: ' + left1 + ' t: ' + cont + ' center1: ' + center1 + ' right1: ' + right1 + ' rightOut1: ' + rightOut1);

        cont++;
    });
});

