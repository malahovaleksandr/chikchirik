
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

$(document).ready(function() {
    var inputEmail=$('.js_inputEmail'),
        validIcon=$('.validateIcon');

    inputEmail.keyup(function(){

        var email = inputEmail.val();

        if(email != 0)
        {
            if(isValidEmailAddress(email))
            {
                console.log('yes');
                validIcon.css({
                    "background-image": "url('../image/validYes.png')"
                });
            } else {
                console.log('no');
                validIcon.css({
                    "background-image": "url('../image/validNo.png')"
                });
            }
        } else {
            console.log('none');
            validIcon.css({
                "background-image": "none"
            });
        }

    });

});

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eUl0ZW0uanMiLCJjaGVja19pbnB1dC5qcyIsInZhbGlkX2VtYWlsLmpzIiwiX21hc2tGb3JQaG9uZS5qcyJdLCJuYW1lcyI6WyJpc1ZhbGlkRW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzIiwicGF0dGVybiIsIlJlZ0V4cCIsInRlc3QiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNhc2hDdXJpZXIiLCJjb2RQYXkiLCJwYXlDYXJkIiwiY3VyaWVyS2lldiIsIm5ld1Bvc3QiLCJwaWNrVXAiLCJpbnB1dEN1cmllcktpZXYiLCJpbnB1dE5ld1Bvc3QiLCJpbnB1dFBpY2tVcCIsIm9uIiwiY3NzIiwicHJvcCIsImF0dHIiLCJpbnB1dEVtYWlsIiwidmFsaWRJY29uIiwia2V5dXAiLCJlbWFpbCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kLWltYWdlIiwiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJyZXF1aXJlIiwialF1ZXJ5IiwiY2FyZXRUaW1lb3V0SWQiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlQaG9uZSIsImNocm9tZSIsImFuZHJvaWQiLCJtYXNrIiwiZGVmaW5pdGlvbnMiLCI5IiwiYSIsIioiLCJhdXRvY2xlYXIiLCJkYXRhTmFtZSIsInBsYWNlaG9sZGVyIiwiZm4iLCJleHRlbmQiLCJjYXJldCIsImJlZ2luIiwiZW5kIiwicmFuZ2UiLCJ0aGlzIiwibGVuZ3RoIiwiaXMiLCJlYWNoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJjcmVhdGVUZXh0UmFuZ2UiLCJjb2xsYXBzZSIsIm1vdmVFbmQiLCJtb3ZlU3RhcnQiLCJzZWxlY3QiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNlbGVjdGlvbiIsImNyZWF0ZVJhbmdlIiwiZHVwbGljYXRlIiwidGV4dCIsInVubWFzayIsInRyaWdnZXIiLCJzZXR0aW5ncyIsImlucHV0IiwiZGVmcyIsInRlc3RzIiwicGFydGlhbFBvc2l0aW9uIiwiZmlyc3ROb25NYXNrUG9zIiwibGFzdFJlcXVpcmVkTm9uTWFza1BvcyIsImxlbiIsIm9sZFZhbCIsImRhdGEiLCJjb21wbGV0ZWQiLCJzcGxpdCIsImkiLCJjIiwicHVzaCIsInRyeUZpcmVDb21wbGV0ZWQiLCJidWZmZXIiLCJnZXRQbGFjZWhvbGRlciIsImNhbGwiLCJjaGFyQXQiLCJzZWVrTmV4dCIsInBvcyIsInNlZWtQcmV2Iiwic2hpZnRMIiwiaiIsIndyaXRlQnVmZmVyIiwiTWF0aCIsIm1heCIsInNoaWZ0UiIsInQiLCJhbmRyb2lkSW5wdXRFdmVudCIsImN1clZhbCIsImNoZWNrVmFsIiwiYmx1ckV2ZW50IiwiZm9jdXNUZXh0IiwiY2hhbmdlIiwia2V5ZG93bkV2ZW50IiwiZSIsImsiLCJ3aGljaCIsImtleUNvZGUiLCJjbGVhckJ1ZmZlciIsInByZXZlbnREZWZhdWx0Iiwia2V5cHJlc3NFdmVudCIsInAiLCJuZXh0IiwiY3RybEtleSIsImFsdEtleSIsIm1ldGFLZXkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwcm94eSIsInNldFRpbWVvdXQiLCJzdGFydCIsImpvaW4iLCJhbGxvdyIsImxhc3RNYXRjaCIsImRlZmF1bHRCdWZmZXIiLCJzdWJzdHJpbmciLCJtYXAiLCJvbmUiLCJvZmYiLCJyZW1vdmVEYXRhIiwiY2xlYXJUaW1lb3V0IiwiZ2V0IiwiYWN0aXZlRWxlbWVudCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQWtDQSxRQUFBQSxxQkFBQUMsR0FDQSxHQUFBQyxHQUFBLEdBQUFDLFFBQUEsa1NBQ0EsT0FBQUQsR0FBQUUsS0FBQUgsR0NwQ0FJLEVBQUFDLFVBQUFDLE1BQUEsV0FFQSxHQUFBQyxHQUFBSCxFQUFBLGtCQUNBSSxFQUFBSixFQUFBLGNBQ0FLLEVBQUFMLEVBQUEsZUFDQU0sRUFBQU4sRUFBQSwwQkFDQU8sRUFBQVAsRUFBQSx1QkFDQVEsRUFBQVIsRUFBQSxjQUNBUyxFQUFBVCxFQUFBLGdDQUNBVSxFQUFBVixFQUFBLDZCQUNBVyxFQUFBWCxFQUFBLG1CQUdBRyxHQUFBUyxHQUFBLFFBQUEsV0FFQUwsRUFBQU0sSUFBQSxVQUFBLE9BQ0FILEVBQUFJLEtBQUEsWUFBQSxHQUdBSixFQUFBSyxLQUFBLFdBQUEsR0FDQU4sRUFBQUssS0FBQSxZQUFBLEdBQ0FILEVBQUFHLEtBQUEsWUFBQSxHQUNBUixFQUFBTyxJQUFBLFVBQUEsR0FDQUwsRUFBQUssSUFBQSxVQUFBLEtBR0FULEVBQUFRLEdBQUEsUUFBQSxXQUVBTixFQUFBTyxJQUFBLFVBQUEsT0FDQUwsRUFBQUssSUFBQSxVQUFBLE9BQ0FKLEVBQUFLLEtBQUEsWUFBQSxHQUNBSCxFQUFBRyxLQUFBLFlBQUEsR0FFQVAsRUFBQU0sSUFBQSxVQUFBLEdBQ0FILEVBQUFJLEtBQUEsWUFBQSxHQUNBSixFQUFBSSxLQUFBLFdBQUEsR0FFQUwsRUFBQU0sS0FBQSxXQUFBLEdBQ0FKLEVBQUFJLEtBQUEsV0FBQSxLQUdBVixFQUFBTyxHQUFBLFFBQUEsV0FJQUYsRUFBQUksS0FBQSxZQUFBLEdBQ0FMLEVBQUFLLEtBQUEsWUFBQSxHQUNBSCxFQUFBRyxLQUFBLFlBQUEsR0FDQVIsRUFBQU8sSUFBQSxVQUFBLEdBQ0FMLEVBQUFLLElBQUEsVUFBQSxHQUNBTixFQUFBTSxJQUFBLFVBQUEsT0RqREFiLEVBQUFDLFVBQUFDLE1BQUEsV0FDQSxHQUFBYyxHQUFBaEIsRUFBQSxrQkFDQWlCLEVBQUFqQixFQUFBLGdCQUVBZ0IsR0FBQUUsTUFBQSxXQUVBLEdBQUFDLEdBQUFILEVBQUFJLEtBRUEsSUFBQUQsRUFFQXhCLG9CQUFBd0IsSUFFQUUsUUFBQUMsSUFBQSxPQUNBTCxFQUFBSixLQUNBVSxtQkFBQSxtQ0FHQUYsUUFBQUMsSUFBQSxNQUNBTCxFQUFBSixLQUNBVSxtQkFBQSxrQ0FJQUYsUUFBQUMsSUFBQSxRQUNBTCxFQUFBSixLQUNBVSxtQkFBQSxlRXBCQSxTQUFBQyxHQUNBLGtCQUFBQyxTQUFBQSxPQUFBQyxJQUFBRCxRQUFBLFVBQUFELEdBQUFBLEVBQUEsZ0JBQUFHLFNBQUFDLFFBQUEsVUFBQUMsU0FDQSxTQUFBN0IsR0FDQSxHQUFBOEIsR0FBQUMsRUFBQUMsVUFBQUMsVUFBQUMsRUFBQSxVQUFBbkMsS0FBQWdDLEdBQUFJLEVBQUEsVUFBQXBDLEtBQUFnQyxHQUFBSyxFQUFBLFdBQUFyQyxLQUFBZ0MsRUFDQS9CLEdBQUFxQyxNQUNBQyxhQUNBQyxFQUFBLFFBQ0FDLEVBQUEsV0FDQUMsSUFBQSxlQUVBQyxXQUFBLEVBQ0FDLFNBQUEsWUFDQUMsWUFBQSxLQUNBNUMsRUFBQTZDLEdBQUFDLFFBQ0FDLE1BQUEsU0FBQUMsRUFBQUMsR0FDQSxHQUFBQyxFQUNBLElBQUEsSUFBQUMsS0FBQUMsU0FBQUQsS0FBQUUsR0FBQSxXQUFBLE1BQUEsZ0JBQUFMLElBQUFDLEVBQUEsZ0JBQUFBLEdBQUFBLEVBQUFELEVBQ0FHLEtBQUFHLEtBQUEsV0FDQUgsS0FBQUksa0JBQUFKLEtBQUFJLGtCQUFBUCxFQUFBQyxHQUFBRSxLQUFBSyxrQkFBQU4sRUFBQUMsS0FBQUssa0JBQ0FOLEVBQUFPLFVBQUEsR0FBQVAsRUFBQVEsUUFBQSxZQUFBVCxHQUFBQyxFQUFBUyxVQUFBLFlBQUFYLEdBQ0FFLEVBQUFVLGNBQ0FULEtBQUEsR0FBQUksbUJBQUFQLEVBQUFHLEtBQUEsR0FBQVUsZUFBQVosRUFBQUUsS0FBQSxHQUFBVyxjQUFBN0QsU0FBQThELFdBQUE5RCxTQUFBOEQsVUFBQUMsY0FBQWQsRUFBQWpELFNBQUE4RCxVQUFBQyxjQUNBaEIsRUFBQSxFQUFBRSxFQUFBZSxZQUFBTixVQUFBLGFBQUEsS0FBQVYsRUFBQUQsRUFBQUUsRUFBQWdCLEtBQUFkLFNBRUFKLE1BQUFBLEVBQ0FDLElBQUFBLEtBR0FrQixPQUFBLFdBQ0EsTUFBQWhCLE1BQUFpQixRQUFBLFdBRUEvQixLQUFBLFNBQUFBLEVBQUFnQyxHQUNBLEdBQUFDLEdBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLENBQ0EsS0FBQXhDLEdBQUFjLEtBQUFDLE9BQUEsRUFBQSxDQUNBa0IsRUFBQXRFLEVBQUFtRCxLQUFBLEdBQ0EsSUFBQU4sR0FBQXlCLEVBQUFRLEtBQUE5RSxFQUFBcUMsS0FBQU0sU0FDQSxPQUFBRSxHQUFBQSxJQUFBLE9BRUEsTUFBQXdCLEdBQUFyRSxFQUFBOEMsUUFDQUosVUFBQTFDLEVBQUFxQyxLQUFBSyxVQUNBRSxZQUFBNUMsRUFBQXFDLEtBQUFPLFlBQ0FtQyxVQUFBLE1BQ0FWLEdBQUFFLEVBQUF2RSxFQUFBcUMsS0FBQUMsWUFBQWtDLEtBQUFDLEVBQUFHLEVBQUF2QyxFQUFBZSxPQUNBc0IsRUFBQSxLQUFBMUUsRUFBQXNELEtBQUFqQixFQUFBMkMsTUFBQSxJQUFBLFNBQUFDLEVBQUFDLEdBQ0EsS0FBQUEsR0FBQU4sSUFBQUgsRUFBQVEsR0FBQVYsRUFBQVcsSUFBQVYsRUFBQVcsS0FBQSxHQUFBckYsUUFBQXlFLEVBQUFXLEtBQ0EsT0FBQVIsSUFBQUEsRUFBQUYsRUFBQXBCLE9BQUEsR0FBQXFCLEVBQUFRLElBQUFOLEVBQUFILEVBQUFwQixPQUFBLElBQUFvQixFQUFBVyxLQUFBLFFBQ0FoQyxLQUFBaUIsUUFBQSxVQUFBZCxLQUFBLFdBQ0EsUUFBQThCLEtBQ0EsR0FBQWYsRUFBQVUsVUFBQSxDQUNBLElBQUEsR0FBQUUsR0FBQVAsRUFBQUMsR0FBQU0sRUFBQUEsSUFBQSxHQUFBVCxFQUFBUyxJQUFBSSxFQUFBSixLQUFBSyxFQUFBTCxHQUFBLE1BQ0FaLEdBQUFVLFVBQUFRLEtBQUFqQixJQUdBLFFBQUFnQixHQUFBTCxHQUNBLE1BQUFaLEdBQUF6QixZQUFBNEMsT0FBQVAsRUFBQVosRUFBQXpCLFlBQUFRLE9BQUE2QixFQUFBLEdBRUEsUUFBQVEsR0FBQUMsR0FDQSxPQUFBQSxFQUFBZCxJQUFBSixFQUFBa0IsS0FDQSxNQUFBQSxHQUVBLFFBQUFDLEdBQUFELEdBQ0EsT0FBQUEsR0FBQSxJQUFBbEIsRUFBQWtCLEtBQ0EsTUFBQUEsR0FFQSxRQUFBRSxHQUFBNUMsRUFBQUMsR0FDQSxHQUFBZ0MsR0FBQVksQ0FDQSxNQUFBLEVBQUE3QyxHQUFBLENBQ0EsSUFBQWlDLEVBQUFqQyxFQUFBNkMsRUFBQUosRUFBQXhDLEdBQUEyQixFQUFBSyxFQUFBQSxJQUFBLEdBQUFULEVBQUFTLEdBQUEsQ0FDQSxLQUFBTCxFQUFBaUIsR0FBQXJCLEVBQUFTLEdBQUFsRixLQUFBc0YsRUFBQVEsS0FBQSxLQUNBUixHQUFBSixHQUFBSSxFQUFBUSxHQUFBUixFQUFBUSxHQUFBUCxFQUFBTyxHQUFBQSxFQUFBSixFQUFBSSxHQUVBQyxJQUFBeEIsRUFBQXZCLE1BQUFnRCxLQUFBQyxJQUFBdEIsRUFBQTFCLEtBR0EsUUFBQWlELEdBQUFQLEdBQ0EsR0FBQVQsR0FBQUMsRUFBQVcsRUFBQUssQ0FDQSxLQUFBakIsRUFBQVMsRUFBQVIsRUFBQUksRUFBQUksR0FBQWQsRUFBQUssRUFBQUEsSUFBQSxHQUFBVCxFQUFBUyxHQUFBLENBQ0EsR0FBQVksRUFBQUosRUFBQVIsR0FBQWlCLEVBQUFiLEVBQUFKLEdBQUFJLEVBQUFKLEdBQUFDLElBQUFOLEVBQUFpQixHQUFBckIsRUFBQXFCLEdBQUE5RixLQUFBbUcsSUFBQSxLQUNBaEIsR0FBQWdCLEdBR0EsUUFBQUMsS0FDQSxHQUFBQyxHQUFBOUIsRUFBQWxELE1BQUFzRSxFQUFBcEIsRUFBQXZCLE9BQ0EsSUFBQThCLEdBQUFBLEVBQUF6QixRQUFBeUIsRUFBQXpCLE9BQUFnRCxFQUFBaEQsT0FBQSxDQUNBLElBQUFpRCxHQUFBLEdBQUFYLEVBQUExQyxNQUFBLElBQUF3QixFQUFBa0IsRUFBQTFDLE1BQUEsSUFBQTBDLEVBQUExQyxPQUNBLElBQUEsSUFBQTBDLEVBQUExQyxNQUFBLEtBQUEwQyxFQUFBMUMsTUFBQTBCLElBQUFGLEVBQUFrQixFQUFBMUMsUUFBQTBDLEVBQUExQyxPQUNBc0IsR0FBQXZCLE1BQUEyQyxFQUFBMUMsTUFBQTBDLEVBQUExQyxXQUNBLENBQ0EsSUFBQXFELEdBQUEsR0FBQVgsRUFBQTFDLE1BQUE0QixJQUFBSixFQUFBa0IsRUFBQTFDLFFBQUEwQyxFQUFBMUMsT0FDQXNCLEdBQUF2QixNQUFBMkMsRUFBQTFDLE1BQUEwQyxFQUFBMUMsT0FFQW9DLElBRUEsUUFBQWtCLEtBQ0FELElBQUEvQixFQUFBbEQsT0FBQW1GLEdBQUFqQyxFQUFBa0MsU0FFQSxRQUFBQyxHQUFBQyxHQUNBLElBQUFwQyxFQUFBeEQsS0FBQSxZQUFBLENBQ0EsR0FBQTRFLEdBQUExQyxFQUFBQyxFQUFBMEQsRUFBQUQsRUFBQUUsT0FBQUYsRUFBQUcsT0FDQWhDLEdBQUFQLEVBQUFsRCxNQUFBLElBQUF1RixHQUFBLEtBQUFBLEdBQUF6RSxHQUFBLE1BQUF5RSxHQUFBakIsRUFBQXBCLEVBQUF2QixRQUNBQyxFQUFBMEMsRUFBQTFDLE1BQUFDLEVBQUF5QyxFQUFBekMsSUFBQUEsRUFBQUQsSUFBQSxJQUFBQSxFQUFBLEtBQUEyRCxFQUFBaEIsRUFBQTNDLEdBQUFDLEVBQUF3QyxFQUFBekMsRUFBQSxHQUNBQyxFQUFBLEtBQUEwRCxFQUFBbEIsRUFBQXhDLEdBQUFBLEdBQUE2RCxFQUFBOUQsRUFBQUMsR0FBQTJDLEVBQUE1QyxFQUFBQyxFQUFBLEdBQ0F5RCxFQUFBSyxrQkFBQSxLQUFBSixFQUFBTCxFQUFBZixLQUFBcEMsS0FBQXVELEdBQUEsS0FBQUMsSUFBQXJDLEVBQUFsRCxJQUFBbUYsR0FDQWpDLEVBQUF2QixNQUFBLEVBQUFzRCxLQUFBSyxFQUFBSyxtQkFHQSxRQUFBQyxHQUFBTixHQUNBLElBQUFwQyxFQUFBeEQsS0FBQSxZQUFBLENBQ0EsR0FBQW1HLEdBQUEvQixFQUFBZ0MsRUFBQVAsRUFBQUQsRUFBQUUsT0FBQUYsRUFBQUcsUUFBQW5CLEVBQUFwQixFQUFBdkIsT0FDQSxNQUFBMkQsRUFBQVMsU0FBQVQsRUFBQVUsUUFBQVYsRUFBQVcsU0FBQSxHQUFBVixJQUFBQSxHQUFBLEtBQUFBLEVBQUEsQ0FDQSxHQUFBakIsRUFBQXpDLElBQUF5QyxFQUFBMUMsUUFBQSxJQUFBOEQsRUFBQXBCLEVBQUExQyxNQUFBMEMsRUFBQXpDLEtBQUEyQyxFQUFBRixFQUFBMUMsTUFBQTBDLEVBQUF6QyxJQUFBLElBQ0FnRSxFQUFBeEIsRUFBQUMsRUFBQTFDLE1BQUEsR0FBQTRCLEVBQUFxQyxJQUFBL0IsRUFBQW9DLE9BQUFDLGFBQUFaLEdBQUFuQyxFQUFBeUMsR0FBQWxILEtBQUFtRixJQUFBLENBQ0EsR0FBQWUsRUFBQWdCLEdBQUE1QixFQUFBNEIsR0FBQS9CLEVBQUFZLElBQUFvQixFQUFBekIsRUFBQXdCLEdBQUE3RSxFQUFBLENBQ0EsR0FBQW9GLEdBQUEsV0FDQXhILEVBQUF3SCxNQUFBeEgsRUFBQTZDLEdBQUFFLE1BQUF1QixFQUFBNEMsS0FFQU8sWUFBQUQsRUFBQSxPQUNBbEQsR0FBQXZCLE1BQUFtRSxFQUNBeEIsR0FBQTFDLE9BQUEyQixHQUFBUyxJQUVBc0IsRUFBQUssbUJBSUEsUUFBQUQsR0FBQVksRUFBQXpFLEdBQ0EsR0FBQWdDLEVBQ0EsS0FBQUEsRUFBQXlDLEVBQUF6RSxFQUFBZ0MsR0FBQUwsRUFBQUssRUFBQUEsSUFBQVQsRUFBQVMsS0FBQUksRUFBQUosR0FBQUssRUFBQUwsSUFFQSxRQUFBYSxLQUNBeEIsRUFBQWxELElBQUFpRSxFQUFBc0MsS0FBQSxLQUVBLFFBQUF0QixHQUFBdUIsR0FDQSxHQUFBM0MsR0FBQUMsRUFBQVEsRUFBQTNGLEVBQUF1RSxFQUFBbEQsTUFBQXlHLEdBQUEsQ0FDQSxLQUFBNUMsRUFBQSxFQUFBUyxFQUFBLEVBQUFkLEVBQUFLLEVBQUFBLElBQUEsR0FBQVQsRUFBQVMsR0FBQSxDQUNBLElBQUFJLEVBQUFKLEdBQUFLLEVBQUFMLEdBQUFTLElBQUEzRixFQUFBcUQsUUFBQSxHQUFBOEIsRUFBQW5GLEVBQUF5RixPQUFBRSxFQUFBLEdBQ0FsQixFQUFBUyxHQUFBbEYsS0FBQW1GLEdBQUEsQ0FDQUcsRUFBQUosR0FBQUMsRUFBQTJDLEVBQUE1QyxDQUNBLE9BRUEsR0FBQVMsRUFBQTNGLEVBQUFxRCxPQUFBLENBQ0EwRCxFQUFBN0IsRUFBQSxFQUFBTCxFQUNBLFlBRUFTLEdBQUFKLEtBQUFsRixFQUFBeUYsT0FBQUUsSUFBQUEsSUFBQWpCLEVBQUFRLElBQUE0QyxFQUFBNUMsRUFDQSxPQUFBMkMsR0FBQTlCLElBQUFyQixFQUFBb0QsRUFBQSxFQUFBeEQsRUFBQTNCLFdBQUEyQyxFQUFBc0MsS0FBQSxNQUFBRyxHQUFBeEQsRUFBQWxELE9BQUFrRCxFQUFBbEQsSUFBQSxJQUNBMEYsRUFBQSxFQUFBbEMsSUFBQWtCLEtBQUFBLElBQUF4QixFQUFBbEQsSUFBQWtELEVBQUFsRCxNQUFBMkcsVUFBQSxFQUFBRixFQUFBLEtBQ0FwRCxFQUFBUSxFQUFBUCxFQUVBLEdBQUFKLEdBQUF0RSxFQUFBbUQsTUFBQWtDLEVBQUFyRixFQUFBZ0ksSUFBQTNGLEVBQUEyQyxNQUFBLElBQUEsU0FBQUUsRUFBQUQsR0FDQSxNQUFBLEtBQUFDLEVBQUFYLEVBQUFXLEdBQUFJLEVBQUFMLEdBQUFDLEVBQUEsU0FDQTRDLEVBQUF6QyxFQUFBc0MsS0FBQSxJQUFBcEIsRUFBQWpDLEVBQUFsRCxLQUNBa0QsR0FBQVEsS0FBQTlFLEVBQUFxQyxLQUFBTSxTQUFBLFdBQ0EsTUFBQTNDLEdBQUFnSSxJQUFBM0MsRUFBQSxTQUFBSCxFQUFBRCxHQUNBLE1BQUFULEdBQUFTLElBQUFDLEdBQUFJLEVBQUFMLEdBQUFDLEVBQUEsT0FDQXlDLEtBQUEsTUFDQXJELEVBQUEyRCxJQUFBLFNBQUEsV0FDQTNELEVBQUE0RCxJQUFBLFNBQUFDLFdBQUFuSSxFQUFBcUMsS0FBQU0sWUFDQS9CLEdBQUEsYUFBQSxXQUNBLElBQUEwRCxFQUFBeEQsS0FBQSxZQUFBLENBQ0FzSCxhQUFBdEcsRUFDQSxJQUFBNEQsRUFDQWEsR0FBQWpDLEVBQUFsRCxNQUFBc0UsRUFBQVcsSUFBQXZFLEVBQUEyRixXQUFBLFdBQ0FuRCxFQUFBK0QsSUFBQSxLQUFBcEksU0FBQXFJLGdCQUFBeEMsSUFBQUosR0FBQXJELEVBQUFrRyxRQUFBLElBQUEsSUFBQW5GLE9BQUFrQixFQUFBdkIsTUFBQSxFQUFBMkMsR0FBQXBCLEVBQUF2QixNQUFBMkMsS0FDQSxPQUVBOUUsR0FBQSxZQUFBMEYsR0FBQTFGLEdBQUEsZUFBQTZGLEdBQUE3RixHQUFBLGdCQUFBb0csR0FBQXBHLEdBQUEsd0JBQUEsV0FDQTBELEVBQUF4RCxLQUFBLGFBQUEyRyxXQUFBLFdBQ0EsR0FBQS9CLEdBQUFXLEdBQUEsRUFDQS9CLEdBQUF2QixNQUFBMkMsR0FBQU4sS0FDQSxLQUNBakQsR0FBQUMsR0FBQWtDLEVBQUE0RCxJQUFBLGNBQUF0SCxHQUFBLGFBQUF1RixHQUNBRSxXQU1BckcsRUFBQUMsVUFBQUMsTUFBQSxXQUVBRixFQUFBLG1CQUFBcUMsS0FBQSIsImZpbGUiOiJCdXlwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgY2FzaEN1cmllcj0kKCcuanNfY2FzaEN1cmllcicpLC8v0YDQsNC00LjQvtCx0LDRgtC+0L0g0L3QsNC70LjRh9C90YvQvNC4INC60YPRgNGM0LXRgNGDXHJcbiAgICAgICAgY29kUGF5PSQoJy5qc19jb2RQYXknKSwvL9GA0LDQtNC40L7QsdCw0YLQvtC9INC90LDQu9C+0LbQttC10L3Ri9C8INC/0LvQsNGC0LXQttC10LxcclxuICAgICAgICBwYXlDYXJkPSQoJy5qc19wYXlDYXJkJyksLy/RgNCw0LTQuNC+0LHQsNGC0L7QvSDQvtC/0LvQsNGC0LAg0LrQsNGA0YLQvtC5XHJcbiAgICAgICAgY3VyaWVyS2lldj0kKCcuanNfZGVsaXZlcnlDdXJpZXJLaWV2JykgLC8vINCy0YHRjyDRgdGC0YDQvtC60LAg0L/QviDQtNC+0YHRgtCw0LLQutCwINC60YPRgNGM0LXRgCDQv9C+INC60LjQtdCy0YNcclxuICAgICAgICBuZXdQb3N0PSQoJy5qc19kZWxpdmVyeU5ld1Bvc3QnKSAsLy/QstGB0Y8g0YHRgtGA0L7QutCwINC/0L4g0LTQvtGB0YLQsNCy0LrQsCDQvdC+0LLQvtC5INC/0L7Rh9GC0L7QuVxyXG4gICAgICAgIHBpY2tVcD0kKCcuanNfcGlja1VwJyksLy/QstGB0Y8g0YHRgtGA0L7QutCwINC/0L4g0YHQsNC80L7QstGL0LLQvtC3XHJcbiAgICAgICAgaW5wdXRDdXJpZXJLaWV2PSQoJy5qc19pbnB1dF9kZWxpdmVyeUN1cmllcktpZXYnKSAsLy8g0LjQvdC/0YPRgiDQtNC+0YHRgtCw0LLQutCwINC60YPRgNGM0LXRgCDQv9C+INC60LjQtdCy0YNcclxuICAgICAgICBpbnB1dE5ld1Bvc3Q9JCgnLmpzX2lucHV0X2RlbGl2ZXJ5TmV3UG9zdCcpICwvL9C40L3Qv9GD0YIg0LTQvtGB0YLQsNCy0LrQsCDQvdC+0LLQvtC5INC/0L7Rh9GC0L7QuVxyXG4gICAgICAgIGlucHV0UGlja1VwPSQoJy5qc19pbnB1dF9waWNrVXAnKTsvL9C40L3Qv9GD0YIg0YHQsNC80L7QstGL0LLQvtC3XHJcblxyXG4gICAgICAgIC8v0LLRi9Cx0LjRgNCw0LXQvCDQvtC/0LvQsNGC0LjRgtGMINC60YPRgNGM0LXRgNGDXHJcbiAgICBjYXNoQ3VyaWVyLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAvL9C+0YLQutC70Y7Rh9Cw0LXQvCDQuNC90L/Rg9GC0YtcclxuICAgICAgICBuZXdQb3N0LmNzcygnb3BhY2l0eScsJzAuNicpO1xyXG4gICAgICAgIGlucHV0TmV3UG9zdC5wcm9wKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8v0LLQutC70Y7Rh9Cw0LXQvCDQuNC90L/Rg9GC0YtcclxuICAgICAgICBpbnB1dE5ld1Bvc3QuYXR0cignY2hlY2tlZCcsZmFsc2UpO1xyXG4gICAgICAgIGlucHV0Q3VyaWVyS2lldi5wcm9wKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgIGlucHV0UGlja1VwLnByb3AoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcbiAgICAgICAgY3VyaWVyS2lldi5jc3MoJ29wYWNpdHknLDEpO1xyXG4gICAgICAgIHBpY2tVcC5jc3MoJ29wYWNpdHknLDEpO1xyXG4gICAgfSk7XHJcbiAgICAvL9Cy0YvQsdC40YDQsNC10Lwg0L3QsNC70L7QttC10L3QvdGL0Lwg0L/Qu9Cw0YLQtdC20LXQvFxyXG4gICAgY29kUGF5Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAvL9C+0YLQutC70Y7Rh9Cw0LXQvCDQuNC90L/Rg9GC0YtcclxuICAgICAgICBjdXJpZXJLaWV2LmNzcygnb3BhY2l0eScsJzAuNicpO1xyXG4gICAgICAgIHBpY2tVcC5jc3MoJ29wYWNpdHknLCcwLjYnKTtcclxuICAgICAgICBpbnB1dEN1cmllcktpZXYucHJvcCgnZGlzYWJsZWQnLHRydWUpO1xyXG4gICAgICAgIGlucHV0UGlja1VwLnByb3AoJ2Rpc2FibGVkJyx0cnVlKTtcclxuICAgICAgICAvL9Cy0LrQu9GO0YfQsNC10Lwg0LjQvdC/0YPRgtGLXHJcbiAgICAgICAgbmV3UG9zdC5jc3MoJ29wYWNpdHknLDEpO1xyXG4gICAgICAgIGlucHV0TmV3UG9zdC5wcm9wKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgIGlucHV0TmV3UG9zdC5wcm9wKCdjaGVja2VkJyx0cnVlKTtcclxuICAgICAgICAvL9C+0YLQutC70Y7Rh9Cw0LXQvCDQuNC90L/Rg9GC0Ysg0LTRgNGD0LPQuNC1XHJcbiAgICAgICAgaW5wdXRDdXJpZXJLaWV2LmF0dHIoJ2NoZWNrZWQnLGZhbHNlKTtcclxuICAgICAgICBpbnB1dFBpY2tVcC5hdHRyKCdjaGVja2VkJyxmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgICAgICAvL9Cy0YvQsdC40YDQsNC10Lwg0L7Qv9C70LDRgtCwINC60LDRgNGC0L7QuVxyXG4gICAgcGF5Q2FyZC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgICAgICAvL9Cy0LrQu9GO0YfQsNC10Lwg0LjQvdC/0YPRgtGLXHJcbiAgICAgICAgaW5wdXROZXdQb3N0LnByb3AoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcbiAgICAgICAgaW5wdXRDdXJpZXJLaWV2LnByb3AoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcbiAgICAgICAgaW5wdXRQaWNrVXAucHJvcCgnZGlzYWJsZWQnLGZhbHNlKTtcclxuICAgICAgICBjdXJpZXJLaWV2LmNzcygnb3BhY2l0eScsMSk7XHJcbiAgICAgICAgcGlja1VwLmNzcygnb3BhY2l0eScsMSk7XHJcbiAgICAgICAgbmV3UG9zdC5jc3MoJ29wYWNpdHknLDEpO1xyXG4gICAgfSk7XHJcbn0pOyIsIlxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIHZhciBpbnB1dEVtYWlsPSQoJy5qc19pbnB1dEVtYWlsJyksXHJcbiAgICAgICAgdmFsaWRJY29uPSQoJy52YWxpZGF0ZUljb24nKTtcclxuXHJcbiAgICBpbnB1dEVtYWlsLmtleXVwKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBlbWFpbCA9IGlucHV0RW1haWwudmFsKCk7XHJcblxyXG4gICAgICAgIGlmKGVtYWlsICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpc1ZhbGlkRW1haWxBZGRyZXNzKGVtYWlsKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3llcycpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRJY29uLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKCcuLi9pbWFnZS92YWxpZFllcy5wbmcnKVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubycpO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRJY29uLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKCcuLi9pbWFnZS92YWxpZE5vLnBuZycpXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vbmUnKTtcclxuICAgICAgICAgICAgdmFsaWRJY29uLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogXCJub25lXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkRW1haWxBZGRyZXNzKGVtYWlsQWRkcmVzcykge1xyXG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKC9eKChcIltcXHctXFxzXStcIil8KFtcXHctXSsoPzpcXC5bXFx3LV0rKSopfChcIltcXHctXFxzXStcIikoW1xcdy1dKyg/OlxcLltcXHctXSspKikpKEAoKD86W1xcdy1dK1xcLikqXFx3W1xcdy1dezAsNjZ9KVxcLihbYS16XXsyLDZ9KD86XFwuW2Etel17Mn0pPykkKXwoQFxcWz8oKDI1WzAtNV1cXC58MlswLTRdWzAtOV1cXC58MVswLTldezJ9XFwufFswLTldezEsMn1cXC4pKSgoMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzAtOV17MSwyfSlcXC4pezJ9KDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFxdPyQpL2kpO1xyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChlbWFpbEFkZHJlc3MpO1xyXG59XHJcbiIsIi8qXHJcbiBqUXVlcnkgTWFza2VkIElucHV0IFBsdWdpblxyXG4gQ29weXJpZ2h0IChjKSAyMDA3IC0gMjAxNSBKb3NoIEJ1c2ggKGRpZ2l0YWxidXNoLmNvbSlcclxuIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL2RpZ2l0YWxidXNoLmNvbS9wcm9qZWN0cy9tYXNrZWQtaW5wdXQtcGx1Z2luLyNsaWNlbnNlKVxyXG4gVmVyc2lvbjogMS40LjFcclxuICovXHJcbiFmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsgXCJqcXVlcnlcIiBdLCBmYWN0b3J5KSA6IGZhY3RvcnkoXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IHJlcXVpcmUoXCJqcXVlcnlcIikgOiBqUXVlcnkpO1xyXG59KGZ1bmN0aW9uKCQpIHtcclxuICAgIHZhciBjYXJldFRpbWVvdXRJZCwgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LCBpUGhvbmUgPSAvaXBob25lL2kudGVzdCh1YSksIGNocm9tZSA9IC9jaHJvbWUvaS50ZXN0KHVhKSwgYW5kcm9pZCA9IC9hbmRyb2lkL2kudGVzdCh1YSk7XHJcbiAgICAkLm1hc2sgPSB7XHJcbiAgICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAgICAgXCI5XCI6IFwiWzAtOV1cIixcclxuICAgICAgICAgICAgYTogXCJbQS1aYS16XVwiLFxyXG4gICAgICAgICAgICBcIipcIjogXCJbQS1aYS16MC05XVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRvY2xlYXI6ICEwLFxyXG4gICAgICAgIGRhdGFOYW1lOiBcInJhd01hc2tGblwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIl9cIlxyXG4gICAgfSwgJC5mbi5leHRlbmQoe1xyXG4gICAgICAgIGNhcmV0OiBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XHJcbiAgICAgICAgICAgIHZhciByYW5nZTtcclxuICAgICAgICAgICAgaWYgKDAgIT09IHRoaXMubGVuZ3RoICYmICF0aGlzLmlzKFwiOmhpZGRlblwiKSkgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIGJlZ2luID8gKGVuZCA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIGVuZCA/IGVuZCA6IGJlZ2luLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UgPyB0aGlzLnNldFNlbGVjdGlvblJhbmdlKGJlZ2luLCBlbmQpIDogdGhpcy5jcmVhdGVUZXh0UmFuZ2UgJiYgKHJhbmdlID0gdGhpcy5jcmVhdGVUZXh0UmFuZ2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuY29sbGFwc2UoITApLCByYW5nZS5tb3ZlRW5kKFwiY2hhcmFjdGVyXCIsIGVuZCksIHJhbmdlLm1vdmVTdGFydChcImNoYXJhY3RlclwiLCBiZWdpbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpKTtcclxuICAgICAgICAgICAgICAgIH0pKSA6ICh0aGlzWzBdLnNldFNlbGVjdGlvblJhbmdlID8gKGJlZ2luID0gdGhpc1swXS5zZWxlY3Rpb25TdGFydCwgZW5kID0gdGhpc1swXS5zZWxlY3Rpb25FbmQpIDogZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSAmJiAocmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICAgICAgICAgIGJlZ2luID0gMCAtIHJhbmdlLmR1cGxpY2F0ZSgpLm1vdmVTdGFydChcImNoYXJhY3RlclwiLCAtMWU1KSwgZW5kID0gYmVnaW4gKyByYW5nZS50ZXh0Lmxlbmd0aCksXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJlZ2luOiBiZWdpbixcclxuICAgICAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5tYXNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcihcInVubWFza1wiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hc2s6IGZ1bmN0aW9uKG1hc2ssIHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCwgZGVmcywgdGVzdHMsIHBhcnRpYWxQb3NpdGlvbiwgZmlyc3ROb25NYXNrUG9zLCBsYXN0UmVxdWlyZWROb25NYXNrUG9zLCBsZW4sIG9sZFZhbDtcclxuICAgICAgICAgICAgaWYgKCFtYXNrICYmIHRoaXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQgPSAkKHRoaXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZuID0gaW5wdXQuZGF0YSgkLm1hc2suZGF0YU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuID8gZm4oKSA6IHZvaWQgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICBhdXRvY2xlYXI6ICQubWFzay5hdXRvY2xlYXIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJC5tYXNrLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHNldHRpbmdzKSwgZGVmcyA9ICQubWFzay5kZWZpbml0aW9ucywgdGVzdHMgPSBbXSwgcGFydGlhbFBvc2l0aW9uID0gbGVuID0gbWFzay5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBmaXJzdE5vbk1hc2tQb3MgPSBudWxsLCAkLmVhY2gobWFzay5zcGxpdChcIlwiKSwgZnVuY3Rpb24oaSwgYykge1xyXG4gICAgICAgICAgICAgICAgXCI/XCIgPT0gYyA/IChsZW4tLSwgcGFydGlhbFBvc2l0aW9uID0gaSkgOiBkZWZzW2NdID8gKHRlc3RzLnB1c2gobmV3IFJlZ0V4cChkZWZzW2NdKSksXHJcbiAgICAgICAgICAgICAgICBudWxsID09PSBmaXJzdE5vbk1hc2tQb3MgJiYgKGZpcnN0Tm9uTWFza1BvcyA9IHRlc3RzLmxlbmd0aCAtIDEpLCBwYXJ0aWFsUG9zaXRpb24gPiBpICYmIChsYXN0UmVxdWlyZWROb25NYXNrUG9zID0gdGVzdHMubGVuZ3RoIC0gMSkpIDogdGVzdHMucHVzaChudWxsKTtcclxuICAgICAgICAgICAgfSksIHRoaXMudHJpZ2dlcihcInVubWFza1wiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHJ5RmlyZUNvbXBsZXRlZCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBmaXJzdE5vbk1hc2tQb3M7IGxhc3RSZXF1aXJlZE5vbk1hc2tQb3MgPj0gaTsgaSsrKSBpZiAodGVzdHNbaV0gJiYgYnVmZmVyW2ldID09PSBnZXRQbGFjZWhvbGRlcihpKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5jb21wbGV0ZWQuY2FsbChpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncy5wbGFjZWhvbGRlci5jaGFyQXQoaSA8IHNldHRpbmdzLnBsYWNlaG9sZGVyLmxlbmd0aCA/IGkgOiAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNlZWtOZXh0KHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOysrcG9zIDwgbGVuICYmICF0ZXN0c1twb3NdOyApIDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2Vla1ByZXYocG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7LS1wb3MgPj0gMCAmJiAhdGVzdHNbcG9zXTsgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNoaWZ0TChiZWdpbiwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGksIGo7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoMCA+IGJlZ2luKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBiZWdpbiwgaiA9IHNlZWtOZXh0KGVuZCk7IGxlbiA+IGk7IGkrKykgaWYgKHRlc3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShsZW4gPiBqICYmIHRlc3RzW2ldLnRlc3QoYnVmZmVyW2pdKSkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyW2ldID0gYnVmZmVyW2pdLCBidWZmZXJbal0gPSBnZXRQbGFjZWhvbGRlcihqKSwgaiA9IHNlZWtOZXh0KGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyKCksIGlucHV0LmNhcmV0KE1hdGgubWF4KGZpcnN0Tm9uTWFza1BvcywgYmVnaW4pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaGlmdFIocG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGksIGMsIGosIHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcG9zLCBjID0gZ2V0UGxhY2Vob2xkZXIocG9zKTsgbGVuID4gaTsgaSsrKSBpZiAodGVzdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPSBzZWVrTmV4dChpKSwgdCA9IGJ1ZmZlcltpXSwgYnVmZmVyW2ldID0gYywgIShsZW4gPiBqICYmIHRlc3RzW2pdLnRlc3QodCkpKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYW5kcm9pZElucHV0RXZlbnQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1clZhbCA9IGlucHV0LnZhbCgpLCBwb3MgPSBpbnB1dC5jYXJldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWwgJiYgb2xkVmFsLmxlbmd0aCAmJiBvbGRWYWwubGVuZ3RoID4gY3VyVmFsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNoZWNrVmFsKCEwKTsgcG9zLmJlZ2luID4gMCAmJiAhdGVzdHNbcG9zLmJlZ2luIC0gMV07ICkgcG9zLmJlZ2luLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSBwb3MuYmVnaW4pIGZvciAoO3Bvcy5iZWdpbiA8IGZpcnN0Tm9uTWFza1BvcyAmJiAhdGVzdHNbcG9zLmJlZ2luXTsgKSBwb3MuYmVnaW4rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2FyZXQocG9zLmJlZ2luLCBwb3MuYmVnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY2hlY2tWYWwoITApOyBwb3MuYmVnaW4gPCBsZW4gJiYgIXRlc3RzW3Bvcy5iZWdpbl07ICkgcG9zLmJlZ2luKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmNhcmV0KHBvcy5iZWdpbiwgcG9zLmJlZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5RmlyZUNvbXBsZXRlZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYmx1ckV2ZW50KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsKCksIGlucHV0LnZhbCgpICE9IGZvY3VzVGV4dCAmJiBpbnB1dC5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGtleWRvd25FdmVudChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5wcm9wKFwicmVhZG9ubHlcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcywgYmVnaW4sIGVuZCwgayA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWwgPSBpbnB1dC52YWwoKSwgOCA9PT0gayB8fCA0NiA9PT0gayB8fCBpUGhvbmUgJiYgMTI3ID09PSBrID8gKHBvcyA9IGlucHV0LmNhcmV0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbiA9IHBvcy5iZWdpbiwgZW5kID0gcG9zLmVuZCwgZW5kIC0gYmVnaW4gPT09IDAgJiYgKGJlZ2luID0gNDYgIT09IGsgPyBzZWVrUHJldihiZWdpbikgOiBlbmQgPSBzZWVrTmV4dChiZWdpbiAtIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gNDYgPT09IGsgPyBzZWVrTmV4dChlbmQpIDogZW5kKSwgY2xlYXJCdWZmZXIoYmVnaW4sIGVuZCksIHNoaWZ0TChiZWdpbiwgZW5kIC0gMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCkpIDogMTMgPT09IGsgPyBibHVyRXZlbnQuY2FsbCh0aGlzLCBlKSA6IDI3ID09PSBrICYmIChpbnB1dC52YWwoZm9jdXNUZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmNhcmV0KDAsIGNoZWNrVmFsKCkpLCBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGtleXByZXNzRXZlbnQoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5wdXQucHJvcChcInJlYWRvbmx5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwLCBjLCBuZXh0LCBrID0gZS53aGljaCB8fCBlLmtleUNvZGUsIHBvcyA9IGlucHV0LmNhcmV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLm1ldGFLZXkgfHwgMzIgPiBrKSAmJiBrICYmIDEzICE9PSBrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLmVuZCAtIHBvcy5iZWdpbiAhPT0gMCAmJiAoY2xlYXJCdWZmZXIocG9zLmJlZ2luLCBwb3MuZW5kKSwgc2hpZnRMKHBvcy5iZWdpbiwgcG9zLmVuZCAtIDEpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHNlZWtOZXh0KHBvcy5iZWdpbiAtIDEpLCBsZW4gPiBwICYmIChjID0gU3RyaW5nLmZyb21DaGFyQ29kZShrKSwgdGVzdHNbcF0udGVzdChjKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpZnRSKHApLCBidWZmZXJbcF0gPSBjLCB3cml0ZUJ1ZmZlcigpLCBuZXh0ID0gc2Vla05leHQocCksIGFuZHJvaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3h5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLnByb3h5KCQuZm4uY2FyZXQsIGlucHV0LCBuZXh0KSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHByb3h5LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaW5wdXQuY2FyZXQobmV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLmJlZ2luIDw9IGxhc3RSZXF1aXJlZE5vbk1hc2tQb3MgJiYgdHJ5RmlyZUNvbXBsZXRlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xlYXJCdWZmZXIoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHN0YXJ0OyBlbmQgPiBpICYmIGxlbiA+IGk7IGkrKykgdGVzdHNbaV0gJiYgKGJ1ZmZlcltpXSA9IGdldFBsYWNlaG9sZGVyKGkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHdyaXRlQnVmZmVyKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbChidWZmZXIuam9pbihcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja1ZhbChhbGxvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBjLCBwb3MsIHRlc3QgPSBpbnB1dC52YWwoKSwgbGFzdE1hdGNoID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgcG9zID0gMDsgbGVuID4gaTsgaSsrKSBpZiAodGVzdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChidWZmZXJbaV0gPSBnZXRQbGFjZWhvbGRlcihpKTsgcG9zKysgPCB0ZXN0Lmxlbmd0aDsgKSBpZiAoYyA9IHRlc3QuY2hhckF0KHBvcyAtIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RzW2ldLnRlc3QoYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcltpXSA9IGMsIGxhc3RNYXRjaCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zID4gdGVzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyQnVmZmVyKGkgKyAxLCBsZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgYnVmZmVyW2ldID09PSB0ZXN0LmNoYXJBdChwb3MpICYmIHBvcysrLCBwYXJ0aWFsUG9zaXRpb24gPiBpICYmIChsYXN0TWF0Y2ggPSBpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxsb3cgPyB3cml0ZUJ1ZmZlcigpIDogcGFydGlhbFBvc2l0aW9uID4gbGFzdE1hdGNoICsgMSA/IHNldHRpbmdzLmF1dG9jbGVhciB8fCBidWZmZXIuam9pbihcIlwiKSA9PT0gZGVmYXVsdEJ1ZmZlciA/IChpbnB1dC52YWwoKSAmJiBpbnB1dC52YWwoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyQnVmZmVyKDAsIGxlbikpIDogd3JpdGVCdWZmZXIoKSA6ICh3cml0ZUJ1ZmZlcigpLCBpbnB1dC52YWwoaW5wdXQudmFsKCkuc3Vic3RyaW5nKDAsIGxhc3RNYXRjaCArIDEpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWxQb3NpdGlvbiA/IGkgOiBmaXJzdE5vbk1hc2tQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLCBidWZmZXIgPSAkLm1hcChtYXNrLnNwbGl0KFwiXCIpLCBmdW5jdGlvbihjLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiP1wiICE9IGMgPyBkZWZzW2NdID8gZ2V0UGxhY2Vob2xkZXIoaSkgOiBjIDogdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgfSksIGRlZmF1bHRCdWZmZXIgPSBidWZmZXIuam9pbihcIlwiKSwgZm9jdXNUZXh0ID0gaW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhKCQubWFzay5kYXRhTmFtZSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQubWFwKGJ1ZmZlciwgZnVuY3Rpb24oYywgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVzdHNbaV0gJiYgYyAhPSBnZXRQbGFjZWhvbGRlcihpKSA/IGMgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9KSwgaW5wdXQub25lKFwidW5tYXNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Lm9mZihcIi5tYXNrXCIpLnJlbW92ZURhdGEoJC5tYXNrLmRhdGFOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pLm9uKFwiZm9jdXMubWFza1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0LnByb3AoXCJyZWFkb25seVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY2FyZXRUaW1lb3V0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c1RleHQgPSBpbnB1dC52YWwoKSwgcG9zID0gY2hlY2tWYWwoKSwgY2FyZXRUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuZ2V0KDApID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICh3cml0ZUJ1ZmZlcigpLCBwb3MgPT0gbWFzay5yZXBsYWNlKFwiP1wiLCBcIlwiKS5sZW5ndGggPyBpbnB1dC5jYXJldCgwLCBwb3MpIDogaW5wdXQuY2FyZXQocG9zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5vbihcImJsdXIubWFza1wiLCBibHVyRXZlbnQpLm9uKFwia2V5ZG93bi5tYXNrXCIsIGtleWRvd25FdmVudCkub24oXCJrZXlwcmVzcy5tYXNrXCIsIGtleXByZXNzRXZlbnQpLm9uKFwiaW5wdXQubWFzayBwYXN0ZS5tYXNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJyZWFkb25seVwiKSB8fCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gY2hlY2tWYWwoITApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5jYXJldChwb3MpLCB0cnlGaXJlQ29tcGxldGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9KSwgY2hyb21lICYmIGFuZHJvaWQgJiYgaW5wdXQub2ZmKFwiaW5wdXQubWFza1wiKS5vbihcImlucHV0Lm1hc2tcIiwgYW5kcm9pZElucHV0RXZlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbi8vY29uc29sZS5sb2coJ21hc2sgdGVsZXBob25lJyk7XHJcbiAgICAkKFwiLmpzX3Bob25lTnVtYmVyXCIpLm1hc2soXCIrMzgoOTk5KSA5OTktOTk5OVwiKTtcclxufSk7ICJdfQ==
