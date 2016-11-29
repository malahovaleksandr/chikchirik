$(document).ready(function(){

    var cashCurier=$('.js_cashCurier'),//радиобатон наличными курьеру
        codPay=$('.js_codPay'),//радиобатон наложженым платежем
        payCard=$('.js_payCard'),//радиобатон оплата картой
        curierKiev=$('.js_deliveryCurierKiev') ,// вся строка по доставка курьер по киеву
        newPost=$('.js_deliveryNewPost') ,//вся строка по доставка новой почтой
        pickUp=$('.js_pickUp'),//вся строка по самовывоз
        inputCurierKiev=$('.js_input_deliveryCurierKiev') ,// инпут доставка курьер по киеву
        inputNewPost=$('.js_input_deliveryNewPost') ,//инпут доставка новой почтой
        inputPickUp=$('.js_input_pickUp');//инпут самовывоз

        //выбираем оплатить курьеру
    cashCurier.on('click',function(){
        //отключаем инпуты
        newPost.css('opacity','0.6');
        inputNewPost.prop('disabled',true);

        //включаем инпуты
        inputNewPost.attr('checked',false);
        inputCurierKiev.prop('disabled',false);
        inputPickUp.prop('disabled',false);
        curierKiev.css('opacity',1);
        pickUp.css('opacity',1);
    });
    //выбираем наложенным платежем
    codPay.on('click',function(){
        //отключаем инпуты
        curierKiev.css('opacity','0.6');
        pickUp.css('opacity','0.6');
        inputCurierKiev.prop('disabled',true);
        inputPickUp.prop('disabled',true);
        //включаем инпуты
        newPost.css('opacity',1);
        inputNewPost.prop('disabled',false);
        inputNewPost.prop('checked',true);
        //отключаем инпуты другие
        inputCurierKiev.attr('checked',false);
        inputPickUp.attr('checked',false);
    });
        //выбираем оплата картой
    payCard.on('click',function(){


        //включаем инпуты
        inputNewPost.prop('disabled',false);
        inputCurierKiev.prop('disabled',false);
        inputPickUp.prop('disabled',false);
        curierKiev.css('opacity',1);
        pickUp.css('opacity',1);
        newPost.css('opacity',1);
    });
});