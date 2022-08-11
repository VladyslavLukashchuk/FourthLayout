$(document).ready(function(){
$('.all_slides').slick({
    infinite: true,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 10000,
	fade: true,
	fadeSpeed: 1000
});
$('.allfirstslides').slick({
    infinite: true,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 10000,
	fade: true,
	fadeSpeed: 1000
});

$('.third_block_all_items').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	dots: false,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
	  {
		breakpoint: 851,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  dots: true,
		}},
		{breakpoint: 601,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		},
	  },
	  
	],
  });
  $('.header_burger').click(function(event){
	$('.header_burger, .header_menu').toggleClass('active');
  });
});


    


