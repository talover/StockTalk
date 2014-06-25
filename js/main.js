$(document).ready(function(){
	slider();
	
    $('.TickerTape').liMarquee({
        drag: false
    });

    $( "#tabs" ).tabs();

    $("a.anchorLink").anchorAnimate();
});

function slider() {
	$('#slider , #RegistrateSlider').bxSlider({
	  mode: 'fade',
	  auto: true,
	  speed:2000,
	  pause:10000
	});
}

jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 1100
	}, settings);	
	
	return this.each(function(){
		var caller = this
		$(caller).click(function (event) {	
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = $(caller).attr("href")
			
			var destination = $(elementClick).offset().top - parseInt(50);
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
		  	return false;
		})
	})
}