

function toggleMobileNav(){
    $('nav, .mobile-nav').toggleClass('open');
}

$(document).ready(function(){
    $('.mobile-nav').click(toggleMobileNav);
});

// initialise the slick script
$(document).ready(function(){
  $('.shootsgallery').slick({
  	// setting-name: setting-value
	// variableWidth: true  	

});
});

// initialise the slick script for home page
$(document).ready(function(){
  $('.homegallery').slick({
  	// setting-name: setting-value
  	autoplay: true,
  	autoplaySpeed: 2000,
  	dots: true,
  	infinite: true,
  	speed: 500,
  	fade: true,
  	cssEase: 'linear',
    arrows: false
});
});
	

