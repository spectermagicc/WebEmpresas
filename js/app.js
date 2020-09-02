$(document).ready(function () {
    $(window).scroll(function () { 
        if($(window).scrollTop() > 300){
            $('.header').addClass('red');
        }else{
            $('.header').removeClass('red');
        }
    });


    var inicio = $('#header').offset().top;
    var servicios = $('#servicios').offset().top;
    var proyectos = $('#proyectos').offset().top;
    var acerca_de = $('#acerca-de').offset().top;
    var contactos = $('#contactos').offset().top;
    
    
    $('#btn-logo').on('click', function () {
        $('html, body').animate({
            'scrollTop': inicio
        }, 1500);
    });

    $('#btn-inicio').on('click', function () {
        $('html, body').animate({
            'scrollTop': inicio
        }, 1500);
    });

    $('#btn-servicios').on('click', function () {
        $('html, body').animate({
            'scrollTop': servicios
        }, 1500);
    });

    $('#btn-proyectos').on('click', function () {
        $('html, body').animate({
            'scrollTop': proyectos
        }, 1500);
    });

    $('#btn-acerca-de').on('click', function () {
        $('html, body').animate({
            'scrollTop': acerca_de
        }, 1500);
    });

    $('#btn-contacto').on('click', function () {
        $('html, body').animate({
            'scrollTop': contactos
        }, 1500);
    });
});