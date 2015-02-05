$(function(){

	// change language
	var change_ln_timeout;

    function show_change_ln_block(){
        $('.change-ln-block').css({visibility:'visible'});
    };
    function hide_change_ln_block(){
		change_ln_timeout = setTimeout(function () {
		    $('.change-ln-block').css({visibility:'hidden'});
		}, 200);
    };

    $('.ln').hover(show_change_ln_block, hide_change_ln_block);

    $('.change-ln-block').hover(
    	function () {
    		clearTimeout(change_ln_timeout);
    	},
    	hide_change_ln_block
    );
    // End change language


    // slider
    function slider_resize() {
        var MARGIN_CONTENT_HEIGHT = 25;
        var HEIGHT_CONTROL = 49;
	    var $slider = $('.touchslider');
	    var $item_slider = $('.touchslider-item');

	    var slider_width = parseInt( $slider.width() );
	    $item_slider.width(slider_width);

        var item_slider_height = parseInt( $item_slider.height() );
        $('.touchslider-viewport').height(item_slider_height + MARGIN_CONTENT_HEIGHT);

        var margin_top_control = (item_slider_height + MARGIN_CONTENT_HEIGHT) / 2 - HEIGHT_CONTROL;

        $('.touchslider-prev').css('top', margin_top_control);
        $('.touchslider-next').css('top', margin_top_control);
	};

    $(".touchslider").touchSlider({mouseTouch: true});
	$(window).resize(slider_resize);
	setTimeout(slider_resize, 0);
	// End slider
});



