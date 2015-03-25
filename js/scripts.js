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
$(document).ready(function(){
    var access = prompt("Who came?",'');
    var password;

    if (access != null){
        if (access == "admin"){
            password = prompt("Your password?",'')

            if (password !=null){
                if (password == "BlackMaster"){
                    alert("Welcome!");
                }
                else{
                    alert("Wrong password..!");
                }
            }
            else{
                alert("Access denied!");
            }
        }
        else{
            alert("I don't know you..!");
        }
    }
    else{
        alert("Access denied!");
    }
})