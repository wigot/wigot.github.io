jQuery(document).ready(function($) {

/***************************************************************
* Small, Medium, Large Services with Icons *
****************************************************************/

$(".service_title").each(function(){

	var fontSize	= $(this).attr("data-font-size");

	$(this).css({		
		'font-size' : fontSize + 'px'
	});	

});

/***************************************************************
* Recent Projects *
****************************************************************/

$(".project_text_style a,.project_text_style small").each(function(){

	var fontColor	= $(this).attr("data-font-color"),		
		fontSize	= $(this).attr("data-font-size");

	$(this).css({
		'color': fontColor,		
		'font-size' : fontSize + 'px'
	});	

});

$(".project_text_size a,.project_text_size small").each(function(){

	var fontSize	= $(this).attr("data-font-size");

	$(this).css({		
		'font-size' : fontSize + 'px'
	});	

});

$(".projects_style3_hover_icon a,.projects_style3_hover_icon").each(function(){

	var fontColor	= $(this).attr("data-font-color");		

	$(this).css({
		'color': fontColor,		
		'border-color' : fontColor
	});	

});

$(".swm_projects_style3_text .project_title").each(function(){

	var fontColor	= $(this).attr("data-font-color"),	
	fontSize		= $(this).attr("data-font-size");	

	$(this).css({
		'color': fontColor,		
		'font-size' : fontSize + 'px'
	});	

});

/***************************************************************
* Steps List Style *
****************************************************************/

$(".steps ol li:first").addClass("first");	
$(".steps ol li:last").addClass("last");	

$(".steps_with_circle ol").each (function () {
    $("li", this).each (function (i) {
        $(this).prepend("<span>" + (i+1) + "</span>" );
    });
});

/***************************************************************
* Fancy Headings *
****************************************************************/

$(".heading_style1 .title_text").each(function(){

	var fontColor	= $(this).attr("data-font-color"),		
		fontSize	= $(this).attr("data-font-size");

	$(this).css({
		'color': fontColor,		
		'font-size' : fontSize + 'px'
	});	

});

$(".heading_style2 span,.heading_style3 span,.heading_style_none span").each(function(){

	var fontColor	= $(this).attr("data-font-color"),
		bgColor		= $(this).attr("data-bg-color"),
		fontSize	= $(this).attr("data-font-size");

	$(this).css({
		'color': fontColor,
		'background-color' : bgColor,
		'font-size' : fontSize + 'px'
	});	

});

/***************************************************************
* Image Slider  *
****************************************************************/

$(".swm_image_slider").each(function(){

	var $this				= $(this),
		slideAnimation		= $this.attr("data-slideAnimation") || 'fade',
		autoslideOn			= $this.attr("data-autoSlide") || 0,
		autoslideInterval	= $this.attr("data-autoSlideInterval") || 7000,
		bulletNav			= $this.attr("data-bulletNavigation") || true,
		arrowNav			= $this.attr("data-arrowNavigation") || true;
	
	if(autoslideOn === "true") { autoslideOn = true; } else { autoslideOn = false; }
	if(bulletNav === "true") { bulletNav = true; } else { bulletNav = false; }
	if(arrowNav === "true") { arrowNav = true; } else { arrowNav = false; }

	if ( $.browser.msie ){
    if($.browser.version === '8.0') {
		$(this).flexslider({
			animation: slideAnimation,
			slideshow: autoslideOn,
			controlNav: bulletNav,
			directionNav : arrowNav,
			slideshowSpeed: autoslideInterval,
            smoothHeight: true,
            prevText: '<i class="icon-angle-left"></i>',
			nextText: '<i class="icon-angle-right"></i>',
            start: function(){
				$('body').removeClass('loading');
			}
        });
    }
}

	$(this).imagesLoaded( function() {
		$(this).flexslider({
		animation: slideAnimation,
		slideshow: autoslideOn,
		controlNav: bulletNav,
		directionNav : arrowNav,
		slideshowSpeed: autoslideInterval,
		smoothHeight: true,
		useCSS: false,
		prevText: '<i class="icon-angle-left"></i>',
		nextText: '<i class="icon-angle-right"></i>',
		start: function(){
			$('body').removeClass('loading');
		}
		});
	});

});

/***************************************************************
* Logo Slider  *
****************************************************************/

$(".logo_slider").each(function(){

	var $this				= $(this),
		autoslideOn			= $this.attr("data-autoSlide") || 0,
		autoslideInterval	= $this.attr("data-autoSlideInterval") || 7000;

	if(autoslideOn === "true") { autoslideOn = true; } else { autoslideOn = false; }
	
	$(this).imagesLoaded( function() {
        $(this).flexslider({
			slideshowSpeed: autoslideInterval,
			animation: "slide",
			animationLoop: true,
			itemWidth: 152,
			itemMargin: 0,
			prevText: '<i class="icon-chevron-left"></i>',
			nextText: '<i class="icon-chevron-right"></i>',
			slideshow: autoslideOn
        });
	});
});


/***************************************************************
* Contact Form *
****************************************************************/

$("#contactForm").validate();
$("#contactForm2").validate();

/***************************************************************
* Recent Posts Full *
****************************************************************/

$(".swm_recent_posts").flexslider({ });

$('.recent_posts_full .one_half:nth-child(2),.recent_posts_full .one_third:nth-child(3), .recent_posts_full .one_fourth:nth-child(4)').css('margin-right', '0px');

/***************************************************************
* Testimonials *
****************************************************************/


$(".testimonials-bx-slider").each(function(){

	var $this				= $(this),
		animationType		= $this.attr("data-animationType") || 'fade',
		autoSlideshow		= $this.attr("data-autoSlideshow") || true,
		smoothHeight		= $this.attr("data-smoothHeight") || true,
		pauseHover			= $this.attr("data-pauseHover") || true,
		displayNavigation	= $this.attr("data-displayNavigation") || true,
		slideshowSpeed		= $this.attr("data-slideshowSpeed") || 500,
		slideshowInterval	= $this.attr("data-slideshowInterval") || 4000;

	if(autoSlideshow === "true") { autoSlideshow = true; } else { autoSlideshow = false; }
	if(smoothHeight === "true") { smoothHeight = true; } else { smoothHeight = false; }
	if(pauseHover === "true") { pauseHover = true; } else { pauseHover = false; }
	if(displayNavigation === "true") { displayNavigation = true; } else { displayNavigation = false; }

	$(this).bxSlider({
		mode: animationType,
		auto:autoSlideshow,
		autoHover:pauseHover,
		adaptiveHeight: smoothHeight,
		adaptiveHeightSpeed:500,
		speed:slideshowSpeed,
		pause:slideshowInterval,
		controls:displayNavigation,
		nextText			: '<i class="icon-chevron-right"></i>',
		prevText			: '<i class="icon-chevron-left"></i>'
	});
});

// testimonials slider shortcode

$(".testimonials-bx-slider_two").each(function(){

	var $this				= $(this),
		animationType		= $this.attr("data-animationType") || 'fade',		
		slideshowSpeed		= $this.attr("data-slideshowSpeed") || 500,
		slideshowInterval	= $this.attr("data-slideshowInterval") || 4000;	

	$(this).bxSlider({
		mode: animationType,
		auto:true,
		autoHover:true,
		adaptiveHeight: true,
		adaptiveHeightSpeed:500,
		speed:slideshowSpeed,
		pause:slideshowInterval,
		controls:false		
	});
});

$(".bx-controls-directdion a").append("<i class='icon-chevron-right'></i>");


// Testimonials isotope 

$('.testimonials_sort').isotope({
itemSelector: '.testimonials_isotope',
masonry: {
	//custom addition
}
});	

/***************************************************************
* Skillbar *
****************************************************************/

$(".p_bar_bg").each(function(){

	var barPercentage = $(this).attr("data-percentage");

	$(this).css({
		'width': barPercentage
	});	

});

/***************************************************************
* Buttons *
****************************************************************/

$(".swm_button").each(function(){

	var fontColor		= $(this).attr("data-font-color"),
		bgColor			= $(this).attr("data-bg-color");

	$(this).css({
		'color': fontColor,
		'background-color' : bgColor
	});	

});

/***************************************************************
* Toggles *
****************************************************************/

$(".toggle_box").each( function () {
	if($(this).attr('data-id') === 'closed') {
		$(this).accordion({ header: '.toggle_box_title', collapsible: true, active: false  });
	} else {
		$(this).accordion({ header: '.toggle_box_title', collapsible: true});
	}
});

$(".toggle_icon").each( function () {
	if($(this).attr('data-id') === 'closed') {
		$(this).accordion({ header: '.toggle_icon_title', collapsible: true, active: false  });
	} else {
		$(this).accordion({ header: '.toggle_icon_title', collapsible: true});
	}
});

$(".tm_toggle").each( function () {
	$(this).accordion({ header: '.tm_toggle_header', collapsible: true, active: false  });
});	

/***************************************************************
* Tabs *
****************************************************************/

$(".swm_tab_style1").tabs({ fx: { opacity: 'show' } });
$(".swm_tab_style2").tabs({ event: "mouseover" });

/***************************************************************
* Dropcaps *
****************************************************************/

$(".swm_dropcap").each(function(){

	var fontColor		= $(this).attr("data-font-color"),
		bgColor			= $(this).attr("data-bg-color");

	$(this).css({
		'color': fontColor,
		'background-color' : bgColor
	});	

});

/***************************************************************
* Fancybox *
****************************************************************/

$(".swm_fancy_box .title_text").each(function(){

	var fontColor		= $(this).attr("data-font-color"),
		bgColor			= $(this).attr("data-bg-color");

	$(this).css({
		'color': fontColor,
		'background-color' : bgColor
	});	

});


/***************************************************************
* Hide Info Boxes *
****************************************************************/

function hide_boxes(){
	$('span.swm_hide_boxes,span.swm_hide_boxes2').click(function() {
		$(this).parent().fadeOut();
	});
}
hide_boxes();

/***************************************************************
* (3) Hover Social Media Icons *
****************************************************************/

$(".sm_icons ul li").fadeTo("normal", 0.4);
	$(".sm_icons ul li").hover(function(){
		$(this).stop().fadeTo("normal", 1);
	},function(){
		$(this).stop().fadeTo("normal", 0.4);
});

$("#footer .sm_icons ul li, .small-footer .sm_icons ul li").fadeTo("normal", 1);
	$("#footer .sm_icons ul li, .small-footer .sm_icons ul li").hover(function(){
		$(this).stop().fadeTo("normal", 1);
	},function(){
		$(this).stop().fadeTo("normal", 1);
});	



	
});