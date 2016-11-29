
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
