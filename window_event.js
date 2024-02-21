$(document).ready(function(){
    $(window).scroll(function(){
        console.log("you are scrolling");
    });
    $("#box").scroll(function(){
        console.log("you are scrolling");
    });
    $(window).resize(function(){
        console.log("you resizing window");
    });
    $("#box").resize(function(){
        console.log("you resizing window");
    });
    $(window).load(function(){
        console.log("");
    });
    $(window).unload(function(){
        console.log("");
    });
})