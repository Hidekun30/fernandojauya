$(function(){
    var elementoTop = $(".navegacion").offset().top;
    $(window).scroll(function(){
        if ($(window).scrollTop() >= elementoTop){
            $("body").addClass("nav_fixed");
        }
        else{
            $("body").removeClass("nav_fixed");
        }
    });

    $(".boton-menu").on("click",function(){
        $(".navegacion").toggleClass("nav-toggle");
        $("#boton-abrir").toggleClass("boton-toggle")     
    });

    $("#radio1").change(function(){
        $(".slides").css("background-image","url(images/slider-imagenes/imagen-1.png)")
        $("#slide").html("<h2>DISFRUTA UN CAFÉ 100% ORGÁNICO </h2><p>Encuentra tu variedad favorita de <span>Dreams Coffee.</span></p>");
    });
    $("#radio2").change(function(){
        $(".slides").css("background-image","url(images/slider-imagenes/imagen-2.png)")
        $("#slide").html("<h2>¿LISTO PARA DESPERTAR?</h2><p>Tu día comienza aquí.</p>");
    });
    $("#radio3").change(function(){
        $(".slides").css("background-image","url(images/slider-imagenes/imagen-3.png)")
        $("#slide").html("<h2>SOLO PARA AMANTES DEL VERDADERO CAFÉ</h2><p>Desconéctate de la rutina, conéctate con nosotros.</p>");
    });
    $("#radio4").change(function(){
        $(".slides").css("background-image","url(images/slider-imagenes/imagen-4.png)")
        $("#slide").html("<h2>DISFRUTAR DE UN BUEN CAFÉ<br>NUNCA FUE TAN FÁCIL.</h2>");
    });  
});



