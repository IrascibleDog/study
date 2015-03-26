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
    $(".top_show").click(function(){
        $(".fade-top").slideToggle("slow");
    });
    $(".top_hide").click(function(){
        $(".fade-top").slideToggle("slow");
    });
    var shop = $(".cart_show, .shcart");
    shop.mouseenter(function(){
        $('.shcart').show();
    }).mouseleave(function(){
        $('.shcart').hide();
    });
    $(".sh_close").click(function(){
        $('.shcart').hide();
    })
    $(".second li").hover(
        function(){
        $("div", this).show(100);
    },
    function(){
        $("div", this).hide(100);
    });
    $(".slide_close").click(function(){
        $(".drop_down").hide();
    })
    $('.form_page select').msDropDown();
    //$('input[type=text]').focus(function(){
    //    $(this).css({border:'2px solid red', background: 'grey'});
    //}).change(function(){
    //   if(this.val() == ""){
    //       $(this).css({background: '#FBACAC'})
    //   }
    //});
    $('input[type=text]').focus(function(){
        $(this).css({border: '2px solid red', background: '#999'});
    }).blur(function(){
        var newVal = $(this).val().replace(/\s/g, '');
        $(this).val(newVal);
        if ($(this).val() == "" ) {
            $(this).css({border: '1px solid red', background: '#FBACAC'})
        }
    }).change(function(){
        if ($(this).val() == "" ) {
            $(this).css({border: '1px solid red', background: '#FBACAC'});
        }
    });
    $('#pass').focus(function(){
        $(this).val('');
    }).blur(function(){
       if ($(this).val().length<=5){
           alert("Vai Vasya, kyda tak malo, da!?");
       }
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
