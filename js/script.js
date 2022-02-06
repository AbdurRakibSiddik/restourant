


let manu = $('.js').offset().top;

$(window).scroll(function(){
    let manu_scroll =   $(this).scrollTop();

if(manu_scroll > manu){
    $('.js').addClass('fix');
}
  else{
    $('.js').removeClass('fix');
  }

});

$('.js_scroll').click(function(){
    $('html, body').animate({
        scrollTop:0,
    }, 1000);
});


$(window).scroll(function(){
    let slng = $(this).scrollTop();
    if(slng > 200){
        $('.js_scroll').fadeIn();
    }
    else{
        
        $('.js_scroll').fadeOut();
    }
});



//    $()();