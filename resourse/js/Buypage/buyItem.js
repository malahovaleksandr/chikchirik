$(document).ready(function(){
    //Валидация email----------------------------------------------
    var inputEmail=$('.js_inputEmail'),
        validIcon=$('.validateIcon'),
        testEmail;//переменная для проверки заполнения поля эиейл
        inputEmail.on('keyup click change',function(){
            var email = inputEmail.val();
            if(email != 0) {
                if(isValidEmailAddress(email)){
                    validIcon.css({"background-image": "url('../image/validyes.png')"     });
                     testEmail=1;
                    writeData.css('opacity',0);
                    setTimeout(function(){validIcon.css('opacity',0)},3000);
                    //console.log('email ready');
                } else {
                    validIcon.css({"background-image": "url('../image/validno.png')"});
                     testEmail=0;
                    //writeData.css('opacity',1);
                }
            } else {
                validIcon.css({  "background-image": "none"});
                 testEmail=0;
                //writeData.css('opacity',1);
            }
        });

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}
//------------------------------------------------
   var buttonBuy=$('.js_buttonBuy'),
       inputName=$('.js_inputName'),
       inputTelephone=$('.js_phoneNumber'),
       writeData=$('.writeData'),//строка которое напоминает заплнить все поля
       blockThanks=$('.js_block_thanks');//блок с надписью Благодарим за покупку

    buttonBuy.on('click',function(){
        var testTel,
            testName;

        //проверка заполнения поля телефона
        if(inputTelephone.val()) {testTel=1;
        }else {testTel=0;}
        if(inputName.val()) {testName=1;
        }else {testName=0;writeData.css('opacity',1);}
        //проврка ,что все поля заполненны и следующие действия
        if(testName==1 && testTel==1 && testEmail==1 ){
            writeData.css('opacity',0);
            var typepay=$('input[name="typePay"]:checked').val();
                typeDelivery=$('input[name="typeDelivery"]:checked').val();
            //если выбрали оплата картой условия такие
            if(typepay=='card') {
                //location.href =' https://www.liqpay.com/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTQzODk5MzQ0MTg3IiwiYW1vdW50IjoiMSIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQntC%2F0LvQsNGC0LAg0LTQtdGC0YHQutC%2B0Lkg0LrQvtGA0L7QsdC60Lgg0KfQuNC60YfQuNGA0LjQuiIsInR5cGUiOiJidXkiLCJzZXJ2ZXJfdXJsIjoiaHR0cDovL3BybzEwMHNtYXJ0LmVzeS5lcy9waHAvcGF5Q2FyZFNhbmRNYWlsRGF0YUNsaWVudC5waHAiLCJsYW5ndWFnZSI6InJ1In0%3D&signature=q7bUkveZjrVmLJc5g%2Bo3OaVeoSw%3D&sender_last_name=alewko&sender_postal_code=8999777888555';
                location.href = 'https://www.liqpay.com/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTQzODk5MzQ0MTg3IiwiYW1vdW50IjoiNTQ5IiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCe0L%2FQu9Cw0YLQsCDQtNC10YLRgdC60L7QuSDQutC%2B0YDQvtCx0LrQuCDQp9C40LrRh9C40YDQuNC6IiwidHlwZSI6ImJ1eSIsInNhbmRib3giOiIxIiwic2VydmVyX3VybCI6Imh0dHA6Ly9jaGlrY2hpcmlrLmNvbS51YS8iLCJsYW5ndWFnZSI6InJ1In0%3D&signature=6BN2AQJrvLosXim5%2BtygxBdJ1Hc%3D';
            }
                $.ajax({
                    type: "POST",
                    url: "../php/sandMail.php",
                    data: {
                        nameClient:inputName.val(),
                        telClient:inputTelephone.val(),
                        mailClient:inputEmail.val(),
                        typePuy:typepay,
                        typeDelivery:typeDelivery
                    },
                    success: function(msg) {
                        //console.log("Прибыли данные: " + msg);
                        inputEmail.val('');
                        inputTelephone.val('');
                        inputName.val('');
                    }
                });
            setTimeout(function(){blockThanks.css({
                left: '50%',
                opacity: 1
            })},1000);
            //blockThanks.css('opacity','1');
            console.log('test');
            setTimeout(function(){blockThanks.css({

                opacity: 0
            })},3000,function(){blockThanks.css('left','-100%')});
            //setTimeout(function(){blockThanks.css('left','-100%')},2000);
            //blockThanks.css('opacity','0');



        } else{writeData.css('opacity',1);}
    });
});








