$('.hamburger').click(function (e) { 
    e.preventDefault();
    $('.shadow').fadeIn();
    $('.side-mobile').css("right","0px");
    $('body').css("overflow", "hidden");
});

$('.close').click(function (e) { 
    e.preventDefault();
    $('.shadow').fadeOut();
    $('.side-mobile').css("right","-350px");
    $('body').css("overflow", "scroll");
});
$(window).resize(()=>{
    if ($(window).width() > 1000){
        $('.shadow').hide();
        $('.side-mobile').css("right","-350px");
        $('body').css("overflow", "scroll");
    }
})
let rotate = 1;
$('#drop').click(function () {  
    $('.drop-mobile-menu').slideToggle();
    if (rotate == 1){
        $('#drop').css("transform","rotate(180deg)");
        rotate = 0;
    }
    else {
        $('#drop').css("transform","rotate(0deg)");
        rotate = 1;
    }
});