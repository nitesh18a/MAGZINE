
$('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav'
 });
var num;
  if(screen.width < 700){
    num=1;
  }
  else if(screen.width < 800){
    num=1.65;
  }
  else if (screen.width < 1100){
    num=2;
  }
  else if(screen.width < 1400){
    num=3
  }
  else if(screen.width > 1400){
    num=4;
  }
 $('.slider-nav').slick({
  
  slidesToShow: num,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: true,
   focusOnSelect: true
 });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });

 // for nav mid nave part starts

 //nav part ends

