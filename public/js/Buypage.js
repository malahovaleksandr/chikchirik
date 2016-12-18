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
/*
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.1
 */
!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
    var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function(begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin,
                this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(),
                        range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin),
                        range.select());
                })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(),
                begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length),
            {
                begin: begin,
                end: end
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = $(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0;
            }
            return settings = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                completed: null
            }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length,
                firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {
                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])),
                null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
            }), this.trigger("unmask").each(function() {
                function tryFireCompleted() {
                    if (settings.completed) {
                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                        settings.completed.call(input);
                    }
                }
                function getPlaceholder(i) {
                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
                }
                function seekNext(pos) {
                    for (;++pos < len && !tests[pos]; ) ;
                    return pos;
                }
                function seekPrev(pos) {
                    for (;--pos >= 0 && !tests[pos]; ) ;
                    return pos;
                }
                function shiftL(begin, end) {
                    var i, j;
                    if (!(0 > begin)) {
                        for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
                            if (!(len > j && tests[i].test(buffer[j]))) break;
                            buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                        }
                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                    }
                }
                function shiftR(pos) {
                    var i, c, j, t;
                    for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
                        if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                        c = t;
                    }
                }
                function androidInputEvent() {
                    var curVal = input.val(), pos = input.caret();
                    if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                        if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    } else {
                        for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    }
                    tryFireCompleted();
                }
                function blurEvent() {
                    checkVal(), input.val() != focusText && input.change();
                }
                function keydownEvent(e) {
                    if (!input.prop("readonly")) {
                        var pos, begin, end, k = e.which || e.keyCode;
                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(),
                            begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1),
                            end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1),
                            e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText),
                            input.caret(0, checkVal()), e.preventDefault());
                    }
                }
                function keypressEvent(e) {
                    if (!input.prop("readonly")) {
                        var p, c, next, k = e.which || e.keyCode, pos = input.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)),
                                    p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                    var proxy = function() {
                                        $.proxy($.fn.caret, input, next)();
                                    };
                                    setTimeout(proxy, 0);
                                } else input.caret(next);
                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                            }
                            e.preventDefault();
                        }
                    }
                }
                function clearBuffer(start, end) {
                    var i;
                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
                }
                function writeBuffer() {
                    input.val(buffer.join(""));
                }
                function checkVal(allow) {
                    var i, c, pos, test = input.val(), lastMatch = -1;
                    for (i = 0, pos = 0; len > i; i++) if (tests[i]) {
                        for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1),
                                tests[i].test(c)) {
                            buffer[i] = c, lastMatch = i;
                            break;
                        }
                        if (pos > test.length) {
                            clearBuffer(i + 1, len);
                            break;
                        }
                    } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""),
                        clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))),
                        partialPosition ? i : firstNonMaskPos;
                }
                var input = $(this), buffer = $.map(mask.split(""), function(c, i) {
                    return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                }), defaultBuffer = buffer.join(""), focusText = input.val();
                input.data($.mask.dataName, function() {
                    return $.map(buffer, function(c, i) {
                        return tests[i] && c != getPlaceholder(i) ? c : null;
                    }).join("");
                }), input.one("unmask", function() {
                    input.off(".mask").removeData($.mask.dataName);
                }).on("focus.mask", function() {
                    if (!input.prop("readonly")) {
                        clearTimeout(caretTimeoutId);
                        var pos;
                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                            input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
                        }, 10);
                    }
                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                    input.prop("readonly") || setTimeout(function() {
                        var pos = checkVal(!0);
                        input.caret(pos), tryFireCompleted();
                    }, 0);
                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent),
                    checkVal();
            });
        }
    });
});

$(document).ready(function(){
//console.log('mask telephone');
    $(".js_phoneNumber").mask("+38(999) 999-9999");
}); 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eUl0ZW0uanMiLCJjaGVja19pbnB1dC5qcyIsIl9tYXNrRm9yUGhvbmUuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJpc1ZhbGlkRW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzIiwicGF0dGVybiIsIlJlZ0V4cCIsInRlc3QiLCJ0ZXN0RW1haWwiLCJpbnB1dEVtYWlsIiwidmFsaWRJY29uIiwib24iLCJlbWFpbCIsInZhbCIsImNzcyIsImJhY2tncm91bmQtaW1hZ2UiLCJ3cml0ZURhdGEiLCJzZXRUaW1lb3V0IiwiYnV0dG9uQnV5IiwiaW5wdXROYW1lIiwiaW5wdXRUZWxlcGhvbmUiLCJibG9ja1RoYW5rcyIsInRlc3RUZWwiLCJ0ZXN0TmFtZSIsInR5cGVwYXkiLCJ0eXBlRGVsaXZlcnkiLCJsb2NhdGlvbiIsImhyZWYiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJuYW1lQ2xpZW50IiwidGVsQ2xpZW50IiwibWFpbENsaWVudCIsInR5cGVQdXkiLCJzdWNjZXNzIiwibXNnIiwibGVmdCIsIm9wYWNpdHkiLCJjb25zb2xlIiwibG9nIiwiY2FzaEN1cmllciIsImNvZFBheSIsInBheUNhcmQiLCJjdXJpZXJLaWV2IiwibmV3UG9zdCIsInBpY2tVcCIsImlucHV0Q3VyaWVyS2lldiIsImlucHV0TmV3UG9zdCIsImlucHV0UGlja1VwIiwicHJvcCIsImF0dHIiLCJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJqUXVlcnkiLCJjYXJldFRpbWVvdXRJZCIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaVBob25lIiwiY2hyb21lIiwiYW5kcm9pZCIsIm1hc2siLCJkZWZpbml0aW9ucyIsIjkiLCJhIiwiKiIsImF1dG9jbGVhciIsImRhdGFOYW1lIiwicGxhY2Vob2xkZXIiLCJmbiIsImV4dGVuZCIsImNhcmV0IiwiYmVnaW4iLCJlbmQiLCJyYW5nZSIsInRoaXMiLCJsZW5ndGgiLCJpcyIsImVhY2giLCJzZXRTZWxlY3Rpb25SYW5nZSIsImNyZWF0ZVRleHRSYW5nZSIsImNvbGxhcHNlIiwibW92ZUVuZCIsIm1vdmVTdGFydCIsInNlbGVjdCIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2VsZWN0aW9uIiwiY3JlYXRlUmFuZ2UiLCJkdXBsaWNhdGUiLCJ0ZXh0IiwidW5tYXNrIiwidHJpZ2dlciIsInNldHRpbmdzIiwiaW5wdXQiLCJkZWZzIiwidGVzdHMiLCJwYXJ0aWFsUG9zaXRpb24iLCJmaXJzdE5vbk1hc2tQb3MiLCJsYXN0UmVxdWlyZWROb25NYXNrUG9zIiwibGVuIiwib2xkVmFsIiwiY29tcGxldGVkIiwic3BsaXQiLCJpIiwiYyIsInB1c2giLCJ0cnlGaXJlQ29tcGxldGVkIiwiYnVmZmVyIiwiZ2V0UGxhY2Vob2xkZXIiLCJjYWxsIiwiY2hhckF0Iiwic2Vla05leHQiLCJwb3MiLCJzZWVrUHJldiIsInNoaWZ0TCIsImoiLCJ3cml0ZUJ1ZmZlciIsIk1hdGgiLCJtYXgiLCJzaGlmdFIiLCJ0IiwiYW5kcm9pZElucHV0RXZlbnQiLCJjdXJWYWwiLCJjaGVja1ZhbCIsImJsdXJFdmVudCIsImZvY3VzVGV4dCIsImNoYW5nZSIsImtleWRvd25FdmVudCIsImUiLCJrIiwid2hpY2giLCJrZXlDb2RlIiwiY2xlYXJCdWZmZXIiLCJwcmV2ZW50RGVmYXVsdCIsImtleXByZXNzRXZlbnQiLCJwIiwibmV4dCIsImN0cmxLZXkiLCJhbHRLZXkiLCJtZXRhS2V5IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicHJveHkiLCJzdGFydCIsImpvaW4iLCJhbGxvdyIsImxhc3RNYXRjaCIsImRlZmF1bHRCdWZmZXIiLCJzdWJzdHJpbmciLCJtYXAiLCJvbmUiLCJvZmYiLCJyZW1vdmVEYXRhIiwiY2xlYXJUaW1lb3V0IiwiZ2V0IiwiYWN0aXZlRWxlbWVudCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFBQyxVQUFBQyxNQUFBLFdBMEJBLFFBQUFDLEdB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QUF2QyxJQUFBSixHQUFBcEQsRUFBQWdHLFFBQUEsSUFBQSxJQUFBakYsT0FBQWtCLEVBQUF2QixNQUFBLEVBQUEwQyxHQUFBbkIsRUFBQXZCLE1BQUEwQyxLQUNBLE9BRUEzRyxHQUFBLFlBQUF1SCxHQUFBdkgsR0FBQSxlQUFBMEgsR0FBQTFILEdBQUEsZ0JBQUFpSSxHQUFBakksR0FBQSx3QkFBQSxXQUNBd0YsRUFBQWhELEtBQUEsYUFBQWxDLFdBQUEsV0FDQSxHQUFBcUcsR0FBQVcsR0FBQSxFQUNBOUIsR0FBQXZCLE1BQUEwQyxHQUFBTixLQUNBLEtBQ0FoRCxHQUFBQyxHQUFBa0MsRUFBQTBELElBQUEsY0FBQWxKLEdBQUEsYUFBQW9ILEdBQ0FFLFdBTUFqSSxFQUFBQyxVQUFBQyxNQUFBLFdBRUFGLEVBQUEsbUJBQUFrRSxLQUFBIiwiZmlsZSI6IkJ1eXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgLy/QktCw0LvQuNC00LDRhtC40Y8gZW1haWwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgaW5wdXRFbWFpbD0kKCcuanNfaW5wdXRFbWFpbCcpLFxyXG4gICAgICAgIHZhbGlkSWNvbj0kKCcudmFsaWRhdGVJY29uJyksXHJcbiAgICAgICAgdGVzdEVtYWlsOy8v0L/QtdGA0LXQvNC10L3QvdCw0Y8g0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0LfQsNC/0L7Qu9C90LXQvdC40Y8g0L/QvtC70Y8g0Y3QuNC10LnQu1xyXG4gICAgICAgIGlucHV0RW1haWwub24oJ2tleXVwIGNsaWNrIGNoYW5nZScsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gaW5wdXRFbWFpbC52YWwoKTtcclxuICAgICAgICAgICAgaWYoZW1haWwgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNWYWxpZEVtYWlsQWRkcmVzcyhlbWFpbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkSWNvbi5jc3Moe1wiYmFja2dyb3VuZC1pbWFnZVwiOiBcInVybCgnLi4vaW1hZ2UvdmFsaWR5ZXMucG5nJylcIiAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRlc3RFbWFpbD0xO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlRGF0YS5jc3MoJ29wYWNpdHknLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YWxpZEljb24uY3NzKCdvcGFjaXR5JywwKX0sMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZW1haWwgcmVhZHknKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRJY29uLmNzcyh7XCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKCcuLi9pbWFnZS92YWxpZG5vLnBuZycpXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICAgdGVzdEVtYWlsPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy93cml0ZURhdGEuY3NzKCdvcGFjaXR5JywxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkSWNvbi5jc3MoeyAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwibm9uZVwifSk7XHJcbiAgICAgICAgICAgICAgICAgdGVzdEVtYWlsPTA7XHJcbiAgICAgICAgICAgICAgICAvL3dyaXRlRGF0YS5jc3MoJ29wYWNpdHknLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkRW1haWxBZGRyZXNzKGVtYWlsQWRkcmVzcykge1xyXG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKC9eKChcIltcXHctXFxzXStcIil8KFtcXHctXSsoPzpcXC5bXFx3LV0rKSopfChcIltcXHctXFxzXStcIikoW1xcdy1dKyg/OlxcLltcXHctXSspKikpKEAoKD86W1xcdy1dK1xcLikqXFx3W1xcdy1dezAsNjZ9KVxcLihbYS16XXsyLDZ9KD86XFwuW2Etel17Mn0pPykkKXwoQFxcWz8oKDI1WzAtNV1cXC58MlswLTRdWzAtOV1cXC58MVswLTldezJ9XFwufFswLTldezEsMn1cXC4pKSgoMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzAtOV17MSwyfSlcXC4pezJ9KDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFxdPyQpL2kpO1xyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChlbWFpbEFkZHJlc3MpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgIHZhciBidXR0b25CdXk9JCgnLmpzX2J1dHRvbkJ1eScpLFxyXG4gICAgICAgaW5wdXROYW1lPSQoJy5qc19pbnB1dE5hbWUnKSxcclxuICAgICAgIGlucHV0VGVsZXBob25lPSQoJy5qc19waG9uZU51bWJlcicpLFxyXG4gICAgICAgd3JpdGVEYXRhPSQoJy53cml0ZURhdGEnKSwvL9GB0YLRgNC+0LrQsCDQutC+0YLQvtGA0L7QtSDQvdCw0L/QvtC80LjQvdCw0LXRgiDQt9Cw0L/Qu9C90LjRgtGMINCy0YHQtSDQv9C+0LvRj1xyXG4gICAgICAgYmxvY2tUaGFua3M9JCgnLmpzX2Jsb2NrX3RoYW5rcycpOy8v0LHQu9C+0Log0YEg0L3QsNC00L/QuNGB0YzRjiDQkdC70LDQs9C+0LTQsNGA0LjQvCDQt9CwINC/0L7QutGD0L/QutGDXHJcblxyXG4gICAgYnV0dG9uQnV5Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGVzdFRlbCxcclxuICAgICAgICAgICAgdGVzdE5hbWU7XHJcblxyXG4gICAgICAgIC8v0L/RgNC+0LLQtdGA0LrQsCDQt9Cw0L/QvtC70L3QtdC90LjRjyDQv9C+0LvRjyDRgtC10LvQtdGE0L7QvdCwXHJcbiAgICAgICAgaWYoaW5wdXRUZWxlcGhvbmUudmFsKCkpIHt0ZXN0VGVsPTE7XHJcbiAgICAgICAgfWVsc2Uge3Rlc3RUZWw9MDt9XHJcbiAgICAgICAgaWYoaW5wdXROYW1lLnZhbCgpKSB7dGVzdE5hbWU9MTtcclxuICAgICAgICB9ZWxzZSB7dGVzdE5hbWU9MDt3cml0ZURhdGEuY3NzKCdvcGFjaXR5JywxKTt9XHJcbiAgICAgICAgLy/Qv9GA0L7QstGA0LrQsCAs0YfRgtC+INCy0YHQtSDQv9C+0LvRjyDQt9Cw0L/QvtC70L3QtdC90L3RiyDQuCDRgdC70LXQtNGD0Y7RidC40LUg0LTQtdC50YHRgtCy0LjRj1xyXG4gICAgICAgIGlmKHRlc3ROYW1lPT0xICYmIHRlc3RUZWw9PTEgJiYgdGVzdEVtYWlsPT0xICl7XHJcbiAgICAgICAgICAgIHdyaXRlRGF0YS5jc3MoJ29wYWNpdHknLDApO1xyXG4gICAgICAgICAgICB2YXIgdHlwZXBheT0kKCdpbnB1dFtuYW1lPVwidHlwZVBheVwiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0eXBlRGVsaXZlcnk9JCgnaW5wdXRbbmFtZT1cInR5cGVEZWxpdmVyeVwiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICAgICAgICAgIC8v0LXRgdC70Lgg0LLRi9Cx0YDQsNC70Lgg0L7Qv9C70LDRgtCwINC60LDRgNGC0L7QuSDRg9GB0LvQvtCy0LjRjyDRgtCw0LrQuNC1XHJcbiAgICAgICAgICAgIGlmKHR5cGVwYXk9PSdjYXJkJykge1xyXG4gICAgICAgICAgICAgICAgLy9sb2NhdGlvbi5ocmVmID0nIGh0dHBzOi8vd3d3LmxpcXBheS5jb20vYXBpLzMvY2hlY2tvdXQ/ZGF0YT1leUoyWlhKemFXOXVJam96TENKaFkzUnBiMjRpT2lKd1lYa2lMQ0p3ZFdKc2FXTmZhMlY1SWpvaWFUUXpPRGs1TXpRME1UZzNJaXdpWVcxdmRXNTBJam9pTVNJc0ltTjFjbkpsYm1ONUlqb2lWVUZJSWl3aVpHVnpZM0pwY0hScGIyNGlPaUxRbnRDJTJGMEx2UXNOR0MwTEFnMExUUXRkR0MwWUhRdXRDJTJCMExrZzBMclF2dEdBMEw3UXNkQzYwTGdnMEtmUXVOQzYwWWZRdU5HQTBMalF1aUlzSW5SNWNHVWlPaUppZFhraUxDSnpaWEoyWlhKZmRYSnNJam9pYUhSMGNEb3ZMM0J5YnpFd01ITnRZWEowTG1WemVTNWxjeTl3YUhBdmNHRjVRMkZ5WkZOaGJtUk5ZV2xzUkdGMFlVTnNhV1Z1ZEM1d2FIQWlMQ0pzWVc1bmRXRm5aU0k2SW5KMUluMCUzRCZzaWduYXR1cmU9cTdiVWt2ZVpqclZtTEpjNWclMkJvM09hVmVvU3clM0Qmc2VuZGVyX2xhc3RfbmFtZT1hbGV3a28mc2VuZGVyX3Bvc3RhbF9jb2RlPTg5OTk3Nzc4ODg1NTUnO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICdodHRwczovL3d3dy5saXFwYXkuY29tL2FwaS8zL2NoZWNrb3V0P2RhdGE9ZXlKMlpYSnphVzl1SWpvekxDSmhZM1JwYjI0aU9pSndZWGtpTENKd2RXSnNhV05mYTJWNUlqb2lhVFF6T0RrNU16UTBNVGczSWl3aVlXMXZkVzUwSWpvaU5UUTVJaXdpWTNWeWNtVnVZM2tpT2lKVlFVZ2lMQ0prWlhOamNtbHdkR2x2YmlJNkl0Q2UwTCUyRlF1OUN3MFlMUXNDRFF0TkMxMFlMUmdkQzYwTDdRdVNEUXV0QyUyQjBZRFF2dEN4MExyUXVDRFFwOUM0MExyUmg5QzQwWURRdU5DNklpd2lkSGx3WlNJNkltSjFlU0lzSW5OaGJtUmliM2dpT2lJeElpd2ljMlZ5ZG1WeVgzVnliQ0k2SW1oMGRIQTZMeTlqYUdsclkyaHBjbWxyTG1OdmJTNTFZUzhpTENKc1lXNW5kV0ZuWlNJNkluSjFJbjAlM0Qmc2lnbmF0dXJlPTZCTjJBUUpydkxvc1hpbTUlMkJ0eWd4QmRKMUhjJTNEJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLi4vcGhwL3NhbmRNYWlsLnBocFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUNsaWVudDppbnB1dE5hbWUudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbENsaWVudDppbnB1dFRlbGVwaG9uZS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbENsaWVudDppbnB1dEVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlUHV5OnR5cGVwYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVEZWxpdmVyeTp0eXBlRGVsaXZlcnlcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi0J/RgNC40LHRi9C70Lgg0LTQsNC90L3Ri9C1OiBcIiArIG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RW1haWwudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUZWxlcGhvbmUudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXROYW1lLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtibG9ja1RoYW5rcy5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0pfSwxMDAwKTtcclxuICAgICAgICAgICAgLy9ibG9ja1RoYW5rcy5jc3MoJ29wYWNpdHknLCcxJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtibG9ja1RoYW5rcy5jc3Moe1xyXG5cclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgfSl9LDMwMDAsZnVuY3Rpb24oKXtibG9ja1RoYW5rcy5jc3MoJ2xlZnQnLCctMTAwJScpfSk7XHJcbiAgICAgICAgICAgIC8vc2V0VGltZW91dChmdW5jdGlvbigpe2Jsb2NrVGhhbmtzLmNzcygnbGVmdCcsJy0xMDAlJyl9LDIwMDApO1xyXG4gICAgICAgICAgICAvL2Jsb2NrVGhhbmtzLmNzcygnb3BhY2l0eScsJzAnKTtcclxuXHJcblxyXG5cclxuICAgICAgICB9IGVsc2V7d3JpdGVEYXRhLmNzcygnb3BhY2l0eScsMSk7fVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGNhc2hDdXJpZXI9JCgnLmpzX2Nhc2hDdXJpZXInKSwvL9GA0LDQtNC40L7QsdCw0YLQvtC9INC90LDQu9C40YfQvdGL0LzQuCDQutGD0YDRjNC10YDRg1xyXG4gICAgICAgIGNvZFBheT0kKCcuanNfY29kUGF5JyksLy/RgNCw0LTQuNC+0LHQsNGC0L7QvSDQvdCw0LvQvtC20LbQtdC90YvQvCDQv9C70LDRgtC10LbQtdC8XHJcbiAgICAgICAgcGF5Q2FyZD0kKCcuanNfcGF5Q2FyZCcpLC8v0YDQsNC00LjQvtCx0LDRgtC+0L0g0L7Qv9C70LDRgtCwINC60LDRgNGC0L7QuVxyXG4gICAgICAgIGN1cmllcktpZXY9JCgnLmpzX2RlbGl2ZXJ5Q3VyaWVyS2lldicpICwvLyDQstGB0Y8g0YHRgtGA0L7QutCwINC/0L4g0LTQvtGB0YLQsNCy0LrQsCDQutGD0YDRjNC10YAg0L/QviDQutC40LXQstGDXHJcbiAgICAgICAgbmV3UG9zdD0kKCcuanNfZGVsaXZlcnlOZXdQb3N0JykgLC8v0LLRgdGPINGB0YLRgNC+0LrQsCDQv9C+INC00L7RgdGC0LDQstC60LAg0L3QvtCy0L7QuSDQv9C+0YfRgtC+0LlcclxuICAgICAgICBwaWNrVXA9JCgnLmpzX3BpY2tVcCcpLC8v0LLRgdGPINGB0YLRgNC+0LrQsCDQv9C+INGB0LDQvNC+0LLRi9Cy0L7Qt1xyXG4gICAgICAgIGlucHV0Q3VyaWVyS2lldj0kKCcuanNfaW5wdXRfZGVsaXZlcnlDdXJpZXJLaWV2JykgLC8vINC40L3Qv9GD0YIg0LTQvtGB0YLQsNCy0LrQsCDQutGD0YDRjNC10YAg0L/QviDQutC40LXQstGDXHJcbiAgICAgICAgaW5wdXROZXdQb3N0PSQoJy5qc19pbnB1dF9kZWxpdmVyeU5ld1Bvc3QnKSAsLy/QuNC90L/Rg9GCINC00L7RgdGC0LDQstC60LAg0L3QvtCy0L7QuSDQv9C+0YfRgtC+0LlcclxuICAgICAgICBpbnB1dFBpY2tVcD0kKCcuanNfaW5wdXRfcGlja1VwJyk7Ly/QuNC90L/Rg9GCINGB0LDQvNC+0LLRi9Cy0L7Qt1xyXG5cclxuICAgICAgICAvL9Cy0YvQsdC40YDQsNC10Lwg0L7Qv9C70LDRgtC40YLRjCDQutGD0YDRjNC10YDRg1xyXG4gICAgY2FzaEN1cmllci5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/QvtGC0LrQu9GO0YfQsNC10Lwg0LjQvdC/0YPRgtGLXHJcbiAgICAgICAgbmV3UG9zdC5jc3MoJ29wYWNpdHknLCcwLjYnKTtcclxuICAgICAgICBpbnB1dE5ld1Bvc3QucHJvcCgnZGlzYWJsZWQnLHRydWUpO1xyXG5cclxuICAgICAgICAvL9Cy0LrQu9GO0YfQsNC10Lwg0LjQvdC/0YPRgtGLXHJcbiAgICAgICAgaW5wdXROZXdQb3N0LmF0dHIoJ2NoZWNrZWQnLGZhbHNlKTtcclxuICAgICAgICBpbnB1dEN1cmllcktpZXYucHJvcCgnZGlzYWJsZWQnLGZhbHNlKTtcclxuICAgICAgICBpbnB1dFBpY2tVcC5wcm9wKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgIGN1cmllcktpZXYuY3NzKCdvcGFjaXR5JywxKTtcclxuICAgICAgICBwaWNrVXAuY3NzKCdvcGFjaXR5JywxKTtcclxuICAgIH0pO1xyXG4gICAgLy/QstGL0LHQuNGA0LDQtdC8INC90LDQu9C+0LbQtdC90L3Ri9C8INC/0LvQsNGC0LXQttC10LxcclxuICAgIGNvZFBheS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/QvtGC0LrQu9GO0YfQsNC10Lwg0LjQvdC/0YPRgtGLXHJcbiAgICAgICAgY3VyaWVyS2lldi5jc3MoJ29wYWNpdHknLCcwLjYnKTtcclxuICAgICAgICBwaWNrVXAuY3NzKCdvcGFjaXR5JywnMC42Jyk7XHJcbiAgICAgICAgaW5wdXRDdXJpZXJLaWV2LnByb3AoJ2Rpc2FibGVkJyx0cnVlKTtcclxuICAgICAgICBpbnB1dFBpY2tVcC5wcm9wKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcbiAgICAgICAgLy/QstC60LvRjtGH0LDQtdC8INC40L3Qv9GD0YLRi1xyXG4gICAgICAgIG5ld1Bvc3QuY3NzKCdvcGFjaXR5JywxKTtcclxuICAgICAgICBpbnB1dE5ld1Bvc3QucHJvcCgnZGlzYWJsZWQnLGZhbHNlKTtcclxuICAgICAgICBpbnB1dE5ld1Bvc3QucHJvcCgnY2hlY2tlZCcsdHJ1ZSk7XHJcbiAgICAgICAgLy/QvtGC0LrQu9GO0YfQsNC10Lwg0LjQvdC/0YPRgtGLINC00YDRg9Cz0LjQtVxyXG4gICAgICAgIGlucHV0Q3VyaWVyS2lldi5hdHRyKCdjaGVja2VkJyxmYWxzZSk7XHJcbiAgICAgICAgaW5wdXRQaWNrVXAuYXR0cignY2hlY2tlZCcsZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICAgICAgLy/QstGL0LHQuNGA0LDQtdC8INC+0L/Qu9Cw0YLQsCDQutCw0YDRgtC+0LlcclxuICAgIHBheUNhcmQub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICAgICAgLy/QstC60LvRjtGH0LDQtdC8INC40L3Qv9GD0YLRi1xyXG4gICAgICAgIGlucHV0TmV3UG9zdC5wcm9wKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgIGlucHV0Q3VyaWVyS2lldi5wcm9wKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgIGlucHV0UGlja1VwLnByb3AoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcbiAgICAgICAgY3VyaWVyS2lldi5jc3MoJ29wYWNpdHknLDEpO1xyXG4gICAgICAgIHBpY2tVcC5jc3MoJ29wYWNpdHknLDEpO1xyXG4gICAgICAgIG5ld1Bvc3QuY3NzKCdvcGFjaXR5JywxKTtcclxuICAgIH0pO1xyXG59KTsiLCIvKlxyXG4galF1ZXJ5IE1hc2tlZCBJbnB1dCBQbHVnaW5cclxuIENvcHlyaWdodCAoYykgMjAwNyAtIDIwMTUgSm9zaCBCdXNoIChkaWdpdGFsYnVzaC5jb20pXHJcbiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKGh0dHA6Ly9kaWdpdGFsYnVzaC5jb20vcHJvamVjdHMvbWFza2VkLWlucHV0LXBsdWdpbi8jbGljZW5zZSlcclxuIFZlcnNpb246IDEuNC4xXHJcbiAqL1xyXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwianF1ZXJ5XCIgXSwgZmFjdG9yeSkgOiBmYWN0b3J5KFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyByZXF1aXJlKFwianF1ZXJ5XCIpIDogalF1ZXJ5KTtcclxufShmdW5jdGlvbigkKSB7XHJcbiAgICB2YXIgY2FyZXRUaW1lb3V0SWQsIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgaVBob25lID0gL2lwaG9uZS9pLnRlc3QodWEpLCBjaHJvbWUgPSAvY2hyb21lL2kudGVzdCh1YSksIGFuZHJvaWQgPSAvYW5kcm9pZC9pLnRlc3QodWEpO1xyXG4gICAgJC5tYXNrID0ge1xyXG4gICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgIFwiOVwiOiBcIlswLTldXCIsXHJcbiAgICAgICAgICAgIGE6IFwiW0EtWmEtel1cIixcclxuICAgICAgICAgICAgXCIqXCI6IFwiW0EtWmEtejAtOV1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0b2NsZWFyOiAhMCxcclxuICAgICAgICBkYXRhTmFtZTogXCJyYXdNYXNrRm5cIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJfXCJcclxuICAgIH0sICQuZm4uZXh0ZW5kKHtcclxuICAgICAgICBjYXJldDogZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2U7XHJcbiAgICAgICAgICAgIGlmICgwICE9PSB0aGlzLmxlbmd0aCAmJiAhdGhpcy5pcyhcIjpoaWRkZW5cIikpIHJldHVybiBcIm51bWJlclwiID09IHR5cGVvZiBiZWdpbiA/IChlbmQgPSBcIm51bWJlclwiID09IHR5cGVvZiBlbmQgPyBlbmQgOiBiZWdpbixcclxuICAgICAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblJhbmdlID8gdGhpcy5zZXRTZWxlY3Rpb25SYW5nZShiZWdpbiwgZW5kKSA6IHRoaXMuY3JlYXRlVGV4dFJhbmdlICYmIChyYW5nZSA9IHRoaXMuY3JlYXRlVGV4dFJhbmdlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLmNvbGxhcHNlKCEwKSwgcmFuZ2UubW92ZUVuZChcImNoYXJhY3RlclwiLCBlbmQpLCByYW5nZS5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwgYmVnaW4pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3QoKSk7XHJcbiAgICAgICAgICAgICAgICB9KSkgOiAodGhpc1swXS5zZXRTZWxlY3Rpb25SYW5nZSA/IChiZWdpbiA9IHRoaXNbMF0uc2VsZWN0aW9uU3RhcnQsIGVuZCA9IHRoaXNbMF0uc2VsZWN0aW9uRW5kKSA6IGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UgJiYgKHJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgICAgICAgICBiZWdpbiA9IDAgLSByYW5nZS5kdXBsaWNhdGUoKS5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwgLTFlNSksIGVuZCA9IGJlZ2luICsgcmFuZ2UudGV4dC5sZW5ndGgpLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiZWdpbjogYmVnaW4sXHJcbiAgICAgICAgICAgICAgICBlbmQ6IGVuZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVubWFzazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoXCJ1bm1hc2tcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXNrOiBmdW5jdGlvbihtYXNrLCBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXQsIGRlZnMsIHRlc3RzLCBwYXJ0aWFsUG9zaXRpb24sIGZpcnN0Tm9uTWFza1BvcywgbGFzdFJlcXVpcmVkTm9uTWFza1BvcywgbGVuLCBvbGRWYWw7XHJcbiAgICAgICAgICAgIGlmICghbWFzayAmJiB0aGlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlucHV0ID0gJCh0aGlzWzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciBmbiA9IGlucHV0LmRhdGEoJC5tYXNrLmRhdGFOYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmbiA/IGZuKCkgOiB2b2lkIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzID0gJC5leHRlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXV0b2NsZWFyOiAkLm1hc2suYXV0b2NsZWFyLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICQubWFzay5wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogbnVsbFxyXG4gICAgICAgICAgICB9LCBzZXR0aW5ncyksIGRlZnMgPSAkLm1hc2suZGVmaW5pdGlvbnMsIHRlc3RzID0gW10sIHBhcnRpYWxQb3NpdGlvbiA9IGxlbiA9IG1hc2subGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZmlyc3ROb25NYXNrUG9zID0gbnVsbCwgJC5lYWNoKG1hc2suc3BsaXQoXCJcIiksIGZ1bmN0aW9uKGksIGMpIHtcclxuICAgICAgICAgICAgICAgIFwiP1wiID09IGMgPyAobGVuLS0sIHBhcnRpYWxQb3NpdGlvbiA9IGkpIDogZGVmc1tjXSA/ICh0ZXN0cy5wdXNoKG5ldyBSZWdFeHAoZGVmc1tjXSkpLFxyXG4gICAgICAgICAgICAgICAgbnVsbCA9PT0gZmlyc3ROb25NYXNrUG9zICYmIChmaXJzdE5vbk1hc2tQb3MgPSB0ZXN0cy5sZW5ndGggLSAxKSwgcGFydGlhbFBvc2l0aW9uID4gaSAmJiAobGFzdFJlcXVpcmVkTm9uTWFza1BvcyA9IHRlc3RzLmxlbmd0aCAtIDEpKSA6IHRlc3RzLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIH0pLCB0aGlzLnRyaWdnZXIoXCJ1bm1hc2tcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRyeUZpcmVDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gZmlyc3ROb25NYXNrUG9zOyBsYXN0UmVxdWlyZWROb25NYXNrUG9zID49IGk7IGkrKykgaWYgKHRlc3RzW2ldICYmIGJ1ZmZlcltpXSA9PT0gZ2V0UGxhY2Vob2xkZXIoaSkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuY29tcGxldGVkLmNhbGwoaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MucGxhY2Vob2xkZXIuY2hhckF0KGkgPCBzZXR0aW5ncy5wbGFjZWhvbGRlci5sZW5ndGggPyBpIDogMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZWVrTmV4dChwb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsrK3BvcyA8IGxlbiAmJiAhdGVzdHNbcG9zXTsgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNlZWtQcmV2KHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOy0tcG9zID49IDAgJiYgIXRlc3RzW3Bvc107ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaGlmdEwoYmVnaW4sIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKDAgPiBiZWdpbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gYmVnaW4sIGogPSBzZWVrTmV4dChlbmQpOyBsZW4gPiBpOyBpKyspIGlmICh0ZXN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobGVuID4gaiAmJiB0ZXN0c1tpXS50ZXN0KGJ1ZmZlcltqXSkpKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcltpXSA9IGJ1ZmZlcltqXSwgYnVmZmVyW2pdID0gZ2V0UGxhY2Vob2xkZXIoaiksIGogPSBzZWVrTmV4dChqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcigpLCBpbnB1dC5jYXJldChNYXRoLm1heChmaXJzdE5vbk1hc2tQb3MsIGJlZ2luKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hpZnRSKHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBjLCBqLCB0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHBvcywgYyA9IGdldFBsYWNlaG9sZGVyKHBvcyk7IGxlbiA+IGk7IGkrKykgaWYgKHRlc3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID0gc2Vla05leHQoaSksIHQgPSBidWZmZXJbaV0sIGJ1ZmZlcltpXSA9IGMsICEobGVuID4gaiAmJiB0ZXN0c1tqXS50ZXN0KHQpKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSB0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFuZHJvaWRJbnB1dEV2ZW50KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJWYWwgPSBpbnB1dC52YWwoKSwgcG9zID0gaW5wdXQuY2FyZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsICYmIG9sZFZhbC5sZW5ndGggJiYgb2xkVmFsLmxlbmd0aCA+IGN1clZhbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjaGVja1ZhbCghMCk7IHBvcy5iZWdpbiA+IDAgJiYgIXRlc3RzW3Bvcy5iZWdpbiAtIDFdOyApIHBvcy5iZWdpbi0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcG9zLmJlZ2luKSBmb3IgKDtwb3MuYmVnaW4gPCBmaXJzdE5vbk1hc2tQb3MgJiYgIXRlc3RzW3Bvcy5iZWdpbl07ICkgcG9zLmJlZ2luKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmNhcmV0KHBvcy5iZWdpbiwgcG9zLmJlZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNoZWNrVmFsKCEwKTsgcG9zLmJlZ2luIDwgbGVuICYmICF0ZXN0c1twb3MuYmVnaW5dOyApIHBvcy5iZWdpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5jYXJldChwb3MuYmVnaW4sIHBvcy5iZWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyeUZpcmVDb21wbGV0ZWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGJsdXJFdmVudCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbCgpLCBpbnB1dC52YWwoKSAhPSBmb2N1c1RleHQgJiYgaW5wdXQuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBrZXlkb3duRXZlbnQoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5wdXQucHJvcChcInJlYWRvbmx5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MsIGJlZ2luLCBlbmQsIGsgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsID0gaW5wdXQudmFsKCksIDggPT09IGsgfHwgNDYgPT09IGsgfHwgaVBob25lICYmIDEyNyA9PT0gayA/IChwb3MgPSBpbnB1dC5jYXJldCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW4gPSBwb3MuYmVnaW4sIGVuZCA9IHBvcy5lbmQsIGVuZCAtIGJlZ2luID09PSAwICYmIChiZWdpbiA9IDQ2ICE9PSBrID8gc2Vla1ByZXYoYmVnaW4pIDogZW5kID0gc2Vla05leHQoYmVnaW4gLSAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IDQ2ID09PSBrID8gc2Vla05leHQoZW5kKSA6IGVuZCksIGNsZWFyQnVmZmVyKGJlZ2luLCBlbmQpLCBzaGlmdEwoYmVnaW4sIGVuZCAtIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpKSA6IDEzID09PSBrID8gYmx1ckV2ZW50LmNhbGwodGhpcywgZSkgOiAyNyA9PT0gayAmJiAoaW5wdXQudmFsKGZvY3VzVGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5jYXJldCgwLCBjaGVja1ZhbCgpKSwgZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBrZXlwcmVzc0V2ZW50KGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0LnByb3AoXCJyZWFkb25seVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCwgYywgbmV4dCwgayA9IGUud2hpY2ggfHwgZS5rZXlDb2RlLCBwb3MgPSBpbnB1dC5jYXJldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShlLmN0cmxLZXkgfHwgZS5hbHRLZXkgfHwgZS5tZXRhS2V5IHx8IDMyID4gaykgJiYgayAmJiAxMyAhPT0gaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcy5lbmQgLSBwb3MuYmVnaW4gIT09IDAgJiYgKGNsZWFyQnVmZmVyKHBvcy5iZWdpbiwgcG9zLmVuZCksIHNoaWZ0TChwb3MuYmVnaW4sIHBvcy5lbmQgLSAxKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBzZWVrTmV4dChwb3MuYmVnaW4gLSAxKSwgbGVuID4gcCAmJiAoYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoayksIHRlc3RzW3BdLnRlc3QoYykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaWZ0UihwKSwgYnVmZmVyW3BdID0gYywgd3JpdGVCdWZmZXIoKSwgbmV4dCA9IHNlZWtOZXh0KHApLCBhbmRyb2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm94eSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5wcm94eSgkLmZuLmNhcmV0LCBpbnB1dCwgbmV4dCkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChwcm94eSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlucHV0LmNhcmV0KG5leHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy5iZWdpbiA8PSBsYXN0UmVxdWlyZWROb25NYXNrUG9zICYmIHRyeUZpcmVDb21wbGV0ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyQnVmZmVyKHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBzdGFydDsgZW5kID4gaSAmJiBsZW4gPiBpOyBpKyspIHRlc3RzW2ldICYmIChidWZmZXJbaV0gPSBnZXRQbGFjZWhvbGRlcihpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB3cml0ZUJ1ZmZlcigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWwoYnVmZmVyLmpvaW4oXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tWYWwoYWxsb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSwgYywgcG9zLCB0ZXN0ID0gaW5wdXQudmFsKCksIGxhc3RNYXRjaCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIHBvcyA9IDA7IGxlbiA+IGk7IGkrKykgaWYgKHRlc3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYnVmZmVyW2ldID0gZ2V0UGxhY2Vob2xkZXIoaSk7IHBvcysrIDwgdGVzdC5sZW5ndGg7ICkgaWYgKGMgPSB0ZXN0LmNoYXJBdChwb3MgLSAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0c1tpXS50ZXN0KGMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJbaV0gPSBjLCBsYXN0TWF0Y2ggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA+IHRlc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckJ1ZmZlcihpICsgMSwgbGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGJ1ZmZlcltpXSA9PT0gdGVzdC5jaGFyQXQocG9zKSAmJiBwb3MrKywgcGFydGlhbFBvc2l0aW9uID4gaSAmJiAobGFzdE1hdGNoID0gaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsbG93ID8gd3JpdGVCdWZmZXIoKSA6IHBhcnRpYWxQb3NpdGlvbiA+IGxhc3RNYXRjaCArIDEgPyBzZXR0aW5ncy5hdXRvY2xlYXIgfHwgYnVmZmVyLmpvaW4oXCJcIikgPT09IGRlZmF1bHRCdWZmZXIgPyAoaW5wdXQudmFsKCkgJiYgaW5wdXQudmFsKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckJ1ZmZlcigwLCBsZW4pKSA6IHdyaXRlQnVmZmVyKCkgOiAod3JpdGVCdWZmZXIoKSwgaW5wdXQudmFsKGlucHV0LnZhbCgpLnN1YnN0cmluZygwLCBsYXN0TWF0Y2ggKyAxKSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsUG9zaXRpb24gPyBpIDogZmlyc3ROb25NYXNrUG9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKSwgYnVmZmVyID0gJC5tYXAobWFzay5zcGxpdChcIlwiKSwgZnVuY3Rpb24oYywgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIj9cIiAhPSBjID8gZGVmc1tjXSA/IGdldFBsYWNlaG9sZGVyKGkpIDogYyA6IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgIH0pLCBkZWZhdWx0QnVmZmVyID0gYnVmZmVyLmpvaW4oXCJcIiksIGZvY3VzVGV4dCA9IGlucHV0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSgkLm1hc2suZGF0YU5hbWUsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkLm1hcChidWZmZXIsIGZ1bmN0aW9uKGMsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RzW2ldICYmIGMgIT0gZ2V0UGxhY2Vob2xkZXIoaSkgPyBjIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSksIGlucHV0Lm9uZShcInVubWFza1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5vZmYoXCIubWFza1wiKS5yZW1vdmVEYXRhKCQubWFzay5kYXRhTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KS5vbihcImZvY3VzLm1hc2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5wcm9wKFwicmVhZG9ubHlcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNhcmV0VGltZW91dElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNUZXh0ID0gaW5wdXQudmFsKCksIHBvcyA9IGNoZWNrVmFsKCksIGNhcmV0VGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmdldCgwKSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAod3JpdGVCdWZmZXIoKSwgcG9zID09IG1hc2sucmVwbGFjZShcIj9cIiwgXCJcIikubGVuZ3RoID8gaW5wdXQuY2FyZXQoMCwgcG9zKSA6IGlucHV0LmNhcmV0KHBvcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkub24oXCJibHVyLm1hc2tcIiwgYmx1ckV2ZW50KS5vbihcImtleWRvd24ubWFza1wiLCBrZXlkb3duRXZlbnQpLm9uKFwia2V5cHJlc3MubWFza1wiLCBrZXlwcmVzc0V2ZW50KS5vbihcImlucHV0Lm1hc2sgcGFzdGUubWFza1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwicmVhZG9ubHlcIikgfHwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IGNoZWNrVmFsKCEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2FyZXQocG9zKSwgdHJ5RmlyZUNvbXBsZXRlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfSksIGNocm9tZSAmJiBhbmRyb2lkICYmIGlucHV0Lm9mZihcImlucHV0Lm1hc2tcIikub24oXCJpbnB1dC5tYXNrXCIsIGFuZHJvaWRJbnB1dEV2ZW50KSxcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4vL2NvbnNvbGUubG9nKCdtYXNrIHRlbGVwaG9uZScpO1xyXG4gICAgJChcIi5qc19waG9uZU51bWJlclwiKS5tYXNrKFwiKzM4KDk5OSkgOTk5LTk5OTlcIik7XHJcbn0pOyAiXX0=
