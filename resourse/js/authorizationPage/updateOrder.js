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