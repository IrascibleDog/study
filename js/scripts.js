/**
 * Created by freddy on 23.03.15.
 */
$(document).ready(function(){
    $("#lang_selector").click(function(){
        $(".langues").slideToggle("slow");
    });
});
$(document).ready(function() {
    $('#slider').rhinoslider({
        effect: 'shuffle'
    });
    $("#lang_selector").click(function(){
        console.log(("#lang_selector").parent())
    });
});
