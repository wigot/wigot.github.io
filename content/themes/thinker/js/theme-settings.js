
(function ($) {
	
	$(document).ready(function() {	

// Do not delete above line
/****************************************************************/
/****************************************************************/

$("a[data-rel^='prettyPhoto']").prettyPhoto();
$('.fitVids').fitVids();
$('.fluid-video').fitVids();
$('.recent_posts_full .one_half:nth-child(2),.recent_posts_full .one_third:nth-child(3), .recent_posts_full .one_fourth:nth-child(4)').css('margin-right', '0px');

/***************************************************************
* (1) Image Hover fade effect *
****************************************************************/

$(document).ready(function(){

	var $get_id; 

	$(".fade-img").show();
	$(".fade-img img").fadeTo('normal', 1, function() {
		$get_id = $(this).parent().parent().attr("data-lang");
		if($get_id !== ""){
			$(this).parent().parent().addClass($get_id);
			$(this).hover(function(){
				$(this).fadeTo('normal', 0.2);
			}, function() {
					$(this).fadeTo('normal', 1);
			});
		}
	});

	$(".fade-img2").show();
	$(".fade-img2 img").fadeTo('fast', 1.0, function() {
		$get_id = $(this).parent().parent().attr("data-lang");
		if($get_id !== ""){
			$(this).parent().parent().addClass($get_id);
			$(this).hover(function(){
				$(this).fadeTo('fast', 0.1);
			}, function() {
					$(this).fadeTo('fast', 1.0);
			});
		}
	});

	$(".fade-img3").show();
	$(".fade-img3").fadeTo('normal', 1, function() {
		$get_id = $(this).parent().parent().attr("a");
		if($get_id !== ""){
			$(this).parent().parent().addClass($get_id);
			$(this).hover(function(){
				$(this).fadeTo('normal', 0.7);
			}, function() {
					$(this).fadeTo('normal', 1);
			});
		}
	});

	$(".flexslider .slides > li .tm_hover").fadeTo("normal", 0);
	$(".flexslider .slides > li .tm_hover").hover(function(){
	$(this).stop().fadeTo("normal", 1.0);
	},function(){
	$(this).stop().fadeTo("normal", 0);
	});	

});

/***************************************************************
* (8) Flex slider * - Post Format Gallery, Logo, Recent Projects etc.
****************************************************************/

// Post Format Gallery Slider

$(".swm_slider").each(function(){

	var $this				= $(this),
		autoslideOn			= $this.attr("data-autoSlide") || 0,
		autoslideInterval	= $this.attr("data-autoSlideInterval") || 7000,
		bulletNav			= $this.attr("data-bulletNavigation") || true,
		arrowNav			= $this.attr("data-arrowNavigation") || true;

	if(autoslideOn === "true") { autoslideOn = true; } else { autoslideOn = false; }
	if(bulletNav === "true") { bulletNav = true; } else { bulletNav = false; }
	if(arrowNav === "true") { arrowNav = true; } else { arrowNav = false; }	
	
	$(this).flexslider({
	animation: "slide",
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

/***************************************************************
* (10) Portfolio *
****************************************************************/

$(".swm_portfolio_sort").imagesLoaded( function() {
	$('.swm_portfolio_sort').isotope({
	itemSelector: '.swm_portfolio_isotope',
	masonry: {
		//custom addition
	}
	});
});

$('.filter_menu a').click(function(){
	var selector = $(this).attr('data-filter');
	$('.swm_portfolio_sort').isotope({filter: selector});
	$('.filter_menu a.active').removeClass('active');
	$(this).addClass('active');
	return false;
});

if ($(window).width() < 768) {
    $('div .portfolio_horizontal_menu').addClass('h_responsive');
}

/***************************************************************
* (10) Blog Grid *
****************************************************************/

$(".swm_blog_grid_sort").imagesLoaded( function() {
	$('.swm_blog_grid_sort').isotope({
	itemSelector: '.swm_blog_grid_isotope',
	masonry: {
		//custom addition
	}
	});
});


/***************************************************************
* (11) Mobile menu *
****************************************************************/

 $('.sf-menu').tinyNav({
    active: 'active',  // class name of active link
    header: 'Navigation'  // default display text for dropdown
});

/***************************************************************
* (12) prettyPhoto media fix *
****************************************************************/

// store the viewport width in a variable
var viewportWidth = $('body').innerWidth();

$("a.lightbox").prettyPhoto({
    theme: 'pp_default',
    changepicturecallback: function(){
        // 1024px is presumed here to be the widest mobile device. Adjust at will.
        if (viewportWidth < 1025) {
            $(".pp_pic_holder.pp_default").css("top",window.pageYOffset+"px");
        }
    }
});

/***************************************************************
* (13) Comment Form *
****************************************************************/

var $comment_form = $('form#commentform');
$comment_form.find('input:text, textarea').each(function(index,domElements){
	var $comment_input = $(domElements),
		$comment_label = $comment_input.siblings('label'),
		comment_label_value = $comment_input.siblings('label').text();
	if ( $comment_label.length ) {
		$comment_label.hide();
		if ( $comment_input.siblings('span.required') ) {
			comment_label_value += $comment_input.siblings('span.required').text();
			$comment_input.siblings('span.required').hide();
		}
		$comment_input.val(comment_label_value);
	}
}).bind('focus',function(){
	var comment_label = $(this).siblings('label').text();
	if ( $(this).siblings('span.required').length ) {
		comment_label += $(this).siblings('span.required').text();
	}
	if ($(this).val() === comment_label) { 
		$(this).val("");
	}
}).bind('blur',function(){
	var comment_label = $(this).siblings('label').text();
	if ( $(this).siblings('span.required').length ) {
		comment_label += $(this).siblings('span.required').text();
	}
	if ($(this).val() === "") {
		$(this).val( comment_label );
	}
});

$comment_form.submit(function(){
	$comment_form.find('input:text, textarea').each(function(index,domElements){
		var $comment_input = $(domElements),
			$comment_label = $comment_input.siblings('label');

		if ( $comment_label.length && $comment_label.is(':hidden') ) {
			if ( $comment_label.text() === $comment_input.val() ) {
				$comment_input.val( '' );
			}
		}
	});
});

$(document).ready(function(){	

	$('#searchform input[name=s]').append(function(){
		if ($(this).val() === '') {
			$(this).val('Search Site').addClass('searchBlur');
		}
	});

	$('#searchform input[name=s]').focus(function(){
		if ($(this).val() === 'Search Site') {
			$(this).val('').addClass('searchFocus').removeClass('searchBlur');
		}
	});
	$('#searchform input[name=s]').blur(function(){
		if ($(this).val() === '') {
			$(this).val('Search Site').addClass('searchBlur').removeClass('searchFocus');
		}
	});
});

/***************************************************************
* (15) Comment Form Title *
****************************************************************/

$(document).ready(function(){

	// comment form title
	var mytest = $('<div class="title_line"><span></span>').insertBefore('h3#reply-title');
	$("h3#reply-title").appendTo(mytest);
	var buffer = $('h3#reply-title').find('span').text();
	var buffer2 = $('h3#reply-title').find('small');
	$('h3#reply-title').find('span').parent().html(buffer);
	$("h3#reply-title").append(buffer2);

});

/***************************************************************
* (16) Top Menu Icon and Sub Text *
****************************************************************/

var topMenu		= $("#topmenu-icon-subtext"),
	dataSub1	= topMenu.attr("data-sub1"),
	dataSub2	= topMenu.attr("data-sub2"),
	dataSub3	= topMenu.attr("data-sub3"),
	dataSub4	= topMenu.attr("data-sub4"),
	dataSub5	= topMenu.attr("data-sub5"),
	dataSub6	= topMenu.attr("data-sub6"),
	dataSub7	= topMenu.attr("data-sub7"),
	dataSub8	= topMenu.attr("data-sub8"),
	dataSub9	= topMenu.attr("data-sub9"),
	dataSub10	= topMenu.attr("data-sub10");	

$('.top-menu>ul.sf-menu>li:nth-child(1) small').text(dataSub1);
$('.top-menu>ul.sf-menu>li:nth-child(2) small').text(dataSub2);
$('.top-menu>ul.sf-menu>li:nth-child(3) small').text(dataSub3);
$('.top-menu>ul.sf-menu>li:nth-child(4) small').text(dataSub4);
$('.top-menu>ul.sf-menu>li:nth-child(5) small').text(dataSub5);
$('.top-menu>ul.sf-menu>li:nth-child(6) small').text(dataSub6);
$('.top-menu>ul.sf-menu>li:nth-child(7) small').text(dataSub7);
$('.top-menu>ul.sf-menu>li:nth-child(8) small').text(dataSub8);
$('.top-menu>ul.sf-menu>li:nth-child(9) small').text(dataSub9);
$('.top-menu>ul.sf-menu>li:nth-child(10) small').text(dataSub10);

/***************************************************************
* Search Form *
****************************************************************/

$(document).ready(function(){	

	$('.search_box input[name=s]').append(function(){
		if ($(this).val() === '') {
			$(this).val('Type Keywords...').addClass('searchBlur');
		}
	});

	$('.search_box input[name=s]').focus(function(){
		if ($(this).val() === 'Type Keywords...') {
			$(this).val('').addClass('searchFocus').removeClass('searchBlur');
		}
	});
	$('.search_box input[name=s]').blur(function(){
		if ($(this).val() === '') {
			$(this).val('Type Keywords...').addClass('searchBlur').removeClass('searchFocus');
		}
	});
});


/***************************************************************
* Retina *
****************************************************************/

var devicePixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
if (!$.cookie("pixel_ratio")) {
    if (devicePixelRatio > 1 && navigator.cookieEnabled === true) {
        $.cookie("pixel_ratio", devicePixelRatio, {expires : 360});
        location.reload();
    }
}

/****************************************************************/
/****************************************************************/
}); })(jQuery);
// Do not delete above lines



		
	