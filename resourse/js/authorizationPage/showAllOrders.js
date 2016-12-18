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