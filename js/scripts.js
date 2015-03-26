/**
 * Created by freddy on 23.03.15.
 */
$(document).ready(function(){
    /*$("#lang_selector").mouseenter(function(){
        $(".langues").show();
    });
    *//*$(("#lang_selector")&&(".langues")).mouseleave(function(){
        $(".langues").hide();
    });*/
    var lang = $('#lang_selector, .langues');
    lang.mouseenter(function(){
        $('.langues').show();
    }).mouseleave(function(){
        $('.langues').hide();
    });
});
$(document).ready(function() {
    $('#slider').rhinoslider({
        effect: 'fade'
    });
});
//$(document).ready(function(){
//    var access = prompt("Who came?",'');
//    var password;
//
//    if (access != null){
//        if (access == "admin"){
//            password = prompt("Your password?",'')
//
//            if (password !=null){
//                if (password == "BlackMaster"){
//                    alert("Welcome!");
//                }
//                else{
//                    alert("Wrong password..!");
//                }
//            }
//            else{
//                alert("Access denied!");
//            }
//        }
//        else{
//            alert("I don't know you..!");
//        }
//    }
//    else{
//        alert("Access denied!");
//    }
//});