$(function(){
    var enterAuthorizationButton=$('.js_enterAuthorizationButton'),//кнопка для авторизации
       authLogin=$('.js_inputLogin'),//поле для ввода логина
        authPass=$('.js_inputPassAdmin'),//поле для ввода логина
        exitSession=$('.js_exitSession');//кнопка для выхода из сессии


    enterAuthorizationButton.on('click ',function(){
        var login=authLogin.val(),
            password=authPass.val();
        if(login.length>4 && password.length>4){
            $.ajax({
                type: "POST",
                url: "../php/authorization.php",
                data: {
                    login:login,
                    password:password
                },
                success: function(msg) {

                    if(msg=='authorizaionOK'){
                        console.log( 'gooo!');
                        authLogin.val('');
                        authPass.val('');
                        window.location.href='orders.php';
                    }
                }
            });
        } else {console.log('не заполнил');}
    });
    //ФУНКЦИЯ ЧТОБ РАЗЛОГИНИТЬСЯ, ОЧИСТИТЬ СЕССИЮ
    exitSession.on('click ',function() {
        //console.log('подключил');
        $.ajax({
            type: "POST",
            url: "../php/authorization.php",
            data: {
                exitSession:'exit9'
            },
            success: function(ex) {
                console.log(ex);
                if(ex=='exitAdmin'){
                    window.location.href='authorization.php';
                }
            }
        });
    });
});