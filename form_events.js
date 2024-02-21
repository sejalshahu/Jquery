$(document).ready(function()
{
    $("#sname,#sclass,#scountry").focus(function(){
        $(this).css("background-color","pink");
    });
   $("#sname,#sclass,#scountry").blur(function(){      //use for original color
        $(this).css("background-color","");
    });
    $("#scountry").change(function(){                  // it is only use for select tag
        $(this).css("background-color","green");
    });
    $("#scountry").change(function(){
       var a=$(this).val();
       $("#test").html(a);
    });
    $("#sname,#sclass").select(function(){
        $(this).css("background-color","red");
    });
    $("#sform").submit(function(){
        alert("form submitted");
    });
})