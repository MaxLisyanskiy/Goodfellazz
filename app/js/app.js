document.addEventListener("DOMContentLoaded", function(){

		$('.toggle-hamburger__animx').on('click', function(){
			$('.toggle-hamburger__animx').toggleClass('is-active');
			if( $(this).hasClass('is-active')){
				$('.header__menu_hide').fadeIn('slow');
			} else{
				$('.header__menu_hide').fadeOut('slow');
			}
		});

		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			dots: false,
			responsive: {
				0: {
					nav:false
				},
				768:{
					nav: true,
					navText: ["<img src=\"images/dest/arrow-left.png\">","<img src=\"images/dest/arrow-right.png\">"]
				}
			}
		});

});
