        jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

        
//==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});

// Animation 
    AOS.init({

    });


    
$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow:'<i class="fa-solid fa-circle-chevron-left prev"></i>',
  nextArrow:'<i class="fa-solid fa-circle-chevron-right next"></i>',
  dots:true,


});
$('.autoplayTwo').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  prevArrow:'<i class="fa-solid fa-circle-chevron-left prevTwo"></i>',
  nextArrow:'<i class="fa-solid fa-circle-chevron-right nextTwo"></i>',
  dots:true,


});