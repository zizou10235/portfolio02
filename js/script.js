

$(function(){
  var fvImgHeight = $('.fv-img').outerHeight();
  var fvBlackHeight = $('.fv-black').outerHeight();

  
  $(window).on('load scroll', function(){
    if($(window).scrollTop()<fvImgHeight-50){
      $('.site-title').removeClass('black');
    }else{
      $('.site-title').addClass('black');
    }
    if($(window).scrollTop()<fvBlackHeight-50){
      $('.header-right').removeClass('black');
    }else{
      $('.header-right').addClass('black');
    }
  }
  );

  $('.header-right').click(function(){
    $('.burger-menu').toggleClass('open');
    $('.burger-musk').fadeToggle(300);
    $('.burger').toggleClass('cross');
    $('.header-right').removeClass('black');
    $('body').toggleClass('noscroll');
  });







});