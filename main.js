$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('nav').toggleClass('active')
    })
    $('.fa-bars').click(function(){
        $('.fa-bars').toggleClass('fa-times')
    })
    $('.navlinks').click(function(){
        $('nav').toggleClass('active')
        $('.fa-bars').toggleClass('fa-times')
    })

    $(window).scroll(function(){
        if ($(window).scrollTop() > 30){
            $('header').addClass('active')
        }else{
           $('header').removeClass('active')
        }
    })

    $(".list").click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'lunch'){
            $(".item").show('1000');
        }else{
            $('.item').not('.'+value).hide('1000')
            $('.item').filter('.'+value).show('1000')
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

});

$( window ).on( "load", function() {
    AOS.init();
});