$(document).ready(function(){
   // var a=$("body").html();
   // console.log(a);
   // var a=$("#box").html();
   // console.log(a);
   // var a=$("#box").text();
    //console.log(a);
    //$("#scountry").change(function(){
    //    var a=$(this).val();
    //    $("#box").html(a);
    //});
    // var b=$("#box").attr("class");
    //console.log(b);

$("#sform").submit(function(){
    var name=$("#sname").val();
    alert("hello"+" "+name);
    var classname=$("#sclass").val();
    alert("hello"+" "+classname);
    var country=$("#scountry").val();
    alert("hello"+" "+country);
});
});