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
$(function(){
    console.log('privet');
  var blockOrders=$('.wrapOrders'),//блок где будут выводиться заказы в конце его
      buttonShow=$('.js_showSession'),//кнопка Показать
      countColumns=$('.js_countColums');//кол-во строк по сколько показывать

    function ShowOrders(count) {
        console.log('change');
        $.ajax({
            type: "POST",
            url: "../php/returnOrder.php",
            data: {
                count: count
            },
            success: function (data) {
                var listOrders = jQuery.parseJSON(data);
                for(var i=0;i<listOrders.length;i++){
                    blockOrders.append('<div class="tableOrders js_oldOrder">' +
                        '<div class="tableOrders_cell ceil1">'+listOrders[i]['id']+'</div>' +
                        '<div class="tableOrders_cell ceil2">'+listOrders[i]['name']+'</div>' +
                        '<div class=\"tableOrders_cell ceil3\">'+listOrders[i]['email']+'</div>' +
                        ' <div class=\"tableOrders_cell ceil4\">'+listOrders[i]['telephone']+'</div>' +
                        '<div class=\"tableOrders_cell ceil5\">'+listOrders[i]['typePay']+'</div>' +
                        '<div class=\"tableOrders_cell ceil6\">'+listOrders[i]['typeDelivery']+'</div>' +
                        '<div class=\"tableOrders_cell ceil7\">'+listOrders[i]['dateOrder']+'</div>' +
                        '<div class=\"tableOrders_cell ceil8\">'+listOrders[i]['status']+'</div>' +
                        '<select name=\"selectOrder\" class=\"selectOrder\">' +
                        ' <option value=\"wait send\">Ожидает отправки</option>' +
                        ' <option value=\"sent alredy\">Отправлен</option> </select></div>');
                }
            }
        });
    }
  
    buttonShow.on('click',function() {
        $(document).find('.js_oldOrder').remove();
        ShowOrders(countColumns.val());
    });
    if(ord == 1) ShowOrders(5);

});
$(function() {
    var newStatus=$(document).find('.selectOrder'); //новый статус заказа

    console.log('change2222');
    $(document).on('change click','.selectOrder',function(){
        var ths=$(this),//
            newStatus=ths.val(),//новый статус заказа
            idThis=ths.siblings('.ceil1').text(),//id заказа у которго изменили статус
            status=ths.siblings('.ceil8');//ячейка со статусом заказа
        console.log('change');
        if(newStatus=='wait send'){ newStatus='ожидает отправки ';    }
        if(newStatus=='sent alredy'){newStatus='отправлен';     }

        $.ajax({
            type: "POST",
            url: "../php/changeStatus.php",
            data: {
                status: newStatus,
                id: idThis
            },
            success: function () {
                status.text(newStatus);
            }
        });
    });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrTG9naW4uanMiLCJzaG93QWxsT3JkZXJzLmpzIiwidXBkYXRlT3JkZXIuanMiXSwibmFtZXMiOlsiJCIsImVudGVyQXV0aG9yaXphdGlvbkJ1dHRvbiIsImF1dGhMb2dpbiIsImF1dGhQYXNzIiwiZXhpdFNlc3Npb24iLCJvbiIsImxvZ2luIiwidmFsIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwibXNnIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImV4IiwiU2hvd09yZGVycyIsImNvdW50IiwibGlzdE9yZGVycyIsImpRdWVyeSIsInBhcnNlSlNPTiIsImkiLCJibG9ja09yZGVycyIsImFwcGVuZCIsImJ1dHRvblNob3ciLCJjb3VudENvbHVtbnMiLCJkb2N1bWVudCIsImZpbmQiLCJyZW1vdmUiLCJvcmQiLCJ0aHMiLCJ0aGlzIiwibmV3U3RhdHVzIiwiaWRUaGlzIiwic2libGluZ3MiLCJ0ZXh0Iiwic3RhdHVzIiwiaWQiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFBLFdBQ0EsR0FBQUMsR0FBQUQsRUFBQSxnQ0FDQUUsRUFBQUYsRUFBQSxrQkFDQUcsRUFBQUgsRUFBQSxzQkFDQUksRUFBQUosRUFBQSxrQkFHQUMsR0FBQUksR0FBQSxTQUFBLFdBQ0EsR0FBQUMsR0FBQUosRUFBQUssTUFDQUMsRUFBQUwsRUFBQUksS0FDQUQsR0FBQUcsT0FBQSxHQUFBRCxFQUFBQyxPQUFBLEVBQ0FULEVBQUFVLE1BQ0FDLEtBQUEsT0FDQUMsSUFBQSwyQkFDQUMsTUFDQVAsTUFBQUEsRUFDQUUsU0FBQUEsR0FFQU0sUUFBQSxTQUFBQyxHQUVBLGtCQUFBQSxJQUNBQyxRQUFBQyxJQUFBLFNBQ0FmLEVBQUFLLElBQUEsSUFDQUosRUFBQUksSUFBQSxJQUNBVyxPQUFBQyxTQUFBQyxLQUFBLGlCQUlBSixRQUFBQyxJQUFBLGlCQUdBYixFQUFBQyxHQUFBLFNBQUEsV0FFQUwsRUFBQVUsTUFDQUMsS0FBQSxPQUNBQyxJQUFBLDJCQUNBQyxNQUNBVCxZQUFBLFNBRUFVLFFBQUEsU0FBQU8sR0FDQUwsUUFBQUMsSUFBQUksR0FDQSxhQUFBQSxJQUNBSCxPQUFBQyxTQUFBQyxLQUFBLDRCQzFDQXBCLEVBQUEsV0FNQSxRQUFBc0IsR0FBQUMsR0FDQVAsUUFBQUMsSUFBQSxVQUNBakIsRUFBQVUsTUFDQUMsS0FBQSxPQUNBQyxJQUFBLHlCQUNBQyxNQUNBVSxNQUFBQSxHQUVBVCxRQUFBLFNBQUFELEdBRUEsSUFBQSxHQURBVyxHQUFBQyxPQUFBQyxVQUFBYixHQUNBYyxFQUFBLEVBQUFBLEVBQUFILEVBQUFmLE9BQUFrQixJQUNBQyxFQUFBQyxPQUFBLDRFQUNBTCxFQUFBRyxHQUFBLEdBQUEsNkNBQ0FILEVBQUFHLEdBQUEsS0FBQSw2Q0FDQUgsRUFBQUcsR0FBQSxNQUFBLDhDQUNBSCxFQUFBRyxHQUFBLFVBQUEsNkNBQ0FILEVBQUFHLEdBQUEsUUFBQSw2Q0FDQUgsRUFBQUcsR0FBQSxhQUFBLDZDQUNBSCxFQUFBRyxHQUFBLFVBQUEsNkNBQ0FILEVBQUFHLEdBQUEsT0FBQSwrS0F4QkFYLFFBQUFDLElBQUEsU0FDQSxJQUFBVyxHQUFBNUIsRUFBQSxlQUNBOEIsRUFBQTlCLEVBQUEsbUJBQ0ErQixFQUFBL0IsRUFBQSxrQkE4QkE4QixHQUFBekIsR0FBQSxRQUFBLFdBQ0FMLEVBQUFnQyxVQUFBQyxLQUFBLGdCQUFBQyxTQUNBWixFQUFBUyxFQUFBeEIsU0FFQSxHQUFBNEIsS0FBQWIsRUFBQSxLQ3RDQXRCLEVBQUEsV0FDQUEsRUFBQWdDLFVBQUFDLEtBQUEsZUFFQWpCLFNBQUFDLElBQUEsY0FDQWpCLEVBQUFnQyxVQUFBM0IsR0FBQSxlQUFBLGVBQUEsV0FDQSxHQUFBK0IsR0FBQXBDLEVBQUFxQyxNQUNBQyxFQUFBRixFQUFBN0IsTUFDQWdDLEVBQUFILEVBQUFJLFNBQUEsVUFBQUMsT0FDQUMsRUFBQU4sRUFBQUksU0FBQSxTQUNBeEIsU0FBQUMsSUFBQSxVQUNBLGFBQUFxQixJQUFBQSxFQUFBLHFCQUNBLGVBQUFBLElBQUFBLEVBQUEsYUFFQXRDLEVBQUFVLE1BQ0FDLEtBQUEsT0FDQUMsSUFBQSwwQkFDQUMsTUFDQTZCLE9BQUFKLEVBQ0FLLEdBQUFKLEdBRUF6QixRQUFBLFdBQ0E0QixFQUFBRCxLQUFBSCIsImZpbGUiOiJhdXRob3JpemF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gICAgdmFyIGVudGVyQXV0aG9yaXphdGlvbkJ1dHRvbj0kKCcuanNfZW50ZXJBdXRob3JpemF0aW9uQnV0dG9uJyksLy/QutC90L7Qv9C60LAg0LTQu9GPINCw0LLRgtC+0YDQuNC30LDRhtC40LhcclxuICAgICAgIGF1dGhMb2dpbj0kKCcuanNfaW5wdXRMb2dpbicpLC8v0L/QvtC70LUg0LTQu9GPINCy0LLQvtC00LAg0LvQvtCz0LjQvdCwXHJcbiAgICAgICAgYXV0aFBhc3M9JCgnLmpzX2lucHV0UGFzc0FkbWluJyksLy/Qv9C+0LvQtSDQtNC70Y8g0LLQstC+0LTQsCDQu9C+0LPQuNC90LBcclxuICAgICAgICBleGl0U2Vzc2lvbj0kKCcuanNfZXhpdFNlc3Npb24nKTsvL9C60L3QvtC/0LrQsCDQtNC70Y8g0LLRi9GF0L7QtNCwINC40Lcg0YHQtdGB0YHQuNC4XHJcblxyXG5cclxuICAgIGVudGVyQXV0aG9yaXphdGlvbkJ1dHRvbi5vbignY2xpY2sgJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBsb2dpbj1hdXRoTG9naW4udmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkPWF1dGhQYXNzLnZhbCgpO1xyXG4gICAgICAgIGlmKGxvZ2luLmxlbmd0aD40ICYmIHBhc3N3b3JkLmxlbmd0aD40KXtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4uL3BocC9hdXRob3JpemF0aW9uLnBocFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luOmxvZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24obXNnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1zZz09J2F1dGhvcml6YWlvbk9LJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZ29vbyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aExvZ2luLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhQYXNzLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSdvcmRlcnMucGhwJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7Y29uc29sZS5sb2coJ9C90LUg0LfQsNC/0L7Qu9C90LjQuycpO31cclxuICAgIH0pO1xyXG4gICAgLy/QpNCj0J3QmtCm0JjQryDQp9Ci0J7QkSDQoNCQ0JfQm9Ce0JPQmNCd0JjQotCs0KHQrywg0J7Qp9CY0KHQotCY0KLQrCDQodCV0KHQodCY0K5cclxuICAgIGV4aXRTZXNzaW9uLm9uKCdjbGljayAnLGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ9C/0L7QtNC60LvRjtGH0LjQuycpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiLi4vcGhwL2F1dGhvcml6YXRpb24ucGhwXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGV4aXRTZXNzaW9uOidleGl0OSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZXgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICAgICAgICAgIGlmKGV4PT0nZXhpdEFkbWluJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9J2F1dGhvcml6YXRpb24ucGhwJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKCdwcml2ZXQnKTtcclxuICB2YXIgYmxvY2tPcmRlcnM9JCgnLndyYXBPcmRlcnMnKSwvL9Cx0LvQvtC6INCz0LTQtSDQsdGD0LTRg9GCINCy0YvQstC+0LTQuNGC0YzRgdGPINC30LDQutCw0LfRiyDQsiDQutC+0L3RhtC1INC10LPQvlxyXG4gICAgICBidXR0b25TaG93PSQoJy5qc19zaG93U2Vzc2lvbicpLC8v0LrQvdC+0L/QutCwINCf0L7QutCw0LfQsNGC0YxcclxuICAgICAgY291bnRDb2x1bW5zPSQoJy5qc19jb3VudENvbHVtcycpOy8v0LrQvtC7LdCy0L4g0YHRgtGA0L7QuiDQv9C+INGB0LrQvtC70YzQutC+INC/0L7QutCw0LfRi9Cy0LDRgtGMXHJcblxyXG4gICAgZnVuY3Rpb24gU2hvd09yZGVycyhjb3VudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UnKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi4uL3BocC9yZXR1cm5PcmRlci5waHBcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IGNvdW50XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdE9yZGVycyA9IGpRdWVyeS5wYXJzZUpTT04oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPGxpc3RPcmRlcnMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tPcmRlcnMuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidGFibGVPcmRlcnMganNfb2xkT3JkZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0YWJsZU9yZGVyc19jZWxsIGNlaWwxXCI+JytsaXN0T3JkZXJzW2ldWydpZCddKyc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0YWJsZU9yZGVyc19jZWxsIGNlaWwyXCI+JytsaXN0T3JkZXJzW2ldWyduYW1lJ10rJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cXFwidGFibGVPcmRlcnNfY2VsbCBjZWlsM1xcXCI+JytsaXN0T3JkZXJzW2ldWydlbWFpbCddKyc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyA8ZGl2IGNsYXNzPVxcXCJ0YWJsZU9yZGVyc19jZWxsIGNlaWw0XFxcIj4nK2xpc3RPcmRlcnNbaV1bJ3RlbGVwaG9uZSddKyc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XFxcInRhYmxlT3JkZXJzX2NlbGwgY2VpbDVcXFwiPicrbGlzdE9yZGVyc1tpXVsndHlwZVBheSddKyc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XFxcInRhYmxlT3JkZXJzX2NlbGwgY2VpbDZcXFwiPicrbGlzdE9yZGVyc1tpXVsndHlwZURlbGl2ZXJ5J10rJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cXFwidGFibGVPcmRlcnNfY2VsbCBjZWlsN1xcXCI+JytsaXN0T3JkZXJzW2ldWydkYXRlT3JkZXInXSsnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVxcXCJ0YWJsZU9yZGVyc19jZWxsIGNlaWw4XFxcIj4nK2xpc3RPcmRlcnNbaV1bJ3N0YXR1cyddKyc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxzZWxlY3QgbmFtZT1cXFwic2VsZWN0T3JkZXJcXFwiIGNsYXNzPVxcXCJzZWxlY3RPcmRlclxcXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcgPG9wdGlvbiB2YWx1ZT1cXFwid2FpdCBzZW5kXFxcIj7QntC20LjQtNCw0LXRgiDQvtGC0L/RgNCw0LLQutC4PC9vcHRpb24+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcgPG9wdGlvbiB2YWx1ZT1cXFwic2VudCBhbHJlZHlcXFwiPtCe0YLQv9GA0LDQstC70LXQvTwvb3B0aW9uPiA8L3NlbGVjdD48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYnV0dG9uU2hvdy5vbignY2xpY2snLGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5qc19vbGRPcmRlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgIFNob3dPcmRlcnMoY291bnRDb2x1bW5zLnZhbCgpKTtcclxuICAgIH0pO1xyXG4gICAgaWYob3JkID09IDEpIFNob3dPcmRlcnMoNSk7XHJcblxyXG59KTsiLCIkKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG5ld1N0YXR1cz0kKGRvY3VtZW50KS5maW5kKCcuc2VsZWN0T3JkZXInKTsgLy/QvdC+0LLRi9C5INGB0YLQsNGC0YPRgSDQt9Cw0LrQsNC30LBcclxuXHJcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlMjIyMicpO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZSBjbGljaycsJy5zZWxlY3RPcmRlcicsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGhzPSQodGhpcyksLy9cclxuICAgICAgICAgICAgbmV3U3RhdHVzPXRocy52YWwoKSwvL9C90L7QstGL0Lkg0YHRgtCw0YLRg9GBINC30LDQutCw0LfQsFxyXG4gICAgICAgICAgICBpZFRoaXM9dGhzLnNpYmxpbmdzKCcuY2VpbDEnKS50ZXh0KCksLy9pZCDQt9Cw0LrQsNC30LAg0YMg0LrQvtGC0L7RgNCz0L4g0LjQt9C80LXQvdC40LvQuCDRgdGC0LDRgtGD0YFcclxuICAgICAgICAgICAgc3RhdHVzPXRocy5zaWJsaW5ncygnLmNlaWw4Jyk7Ly/Rj9GH0LXQudC60LAg0YHQviDRgdGC0LDRgtGD0YHQvtC8INC30LDQutCw0LfQsFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UnKTtcclxuICAgICAgICBpZihuZXdTdGF0dXM9PSd3YWl0IHNlbmQnKXsgbmV3U3RhdHVzPSfQvtC20LjQtNCw0LXRgiDQvtGC0L/RgNCw0LLQutC4ICc7ICAgIH1cclxuICAgICAgICBpZihuZXdTdGF0dXM9PSdzZW50IGFscmVkeScpe25ld1N0YXR1cz0n0L7RgtC/0YDQsNCy0LvQtdC9JzsgICAgIH1cclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIuLi9waHAvY2hhbmdlU3RhdHVzLnBocFwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IG5ld1N0YXR1cyxcclxuICAgICAgICAgICAgICAgIGlkOiBpZFRoaXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzLnRleHQobmV3U3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KTsiXX0=
