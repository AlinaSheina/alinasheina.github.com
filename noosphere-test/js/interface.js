
function slider () {
    var $slider = $('.slider');
    var $imgWrapCollection = $slider.find('.img-wrap');
    var $nextControl = $slider.find('.right');
    var $prevControl = $slider.find('.left');
    var $activeImg = $imgWrapCollection.eq(0);
    var timerId = null;

    $imgWrapCollection.hide();
    $activeImg.show();

    function next () {
        var $nextImg = $activeImg.next();

        if (!$nextImg[0]) {
            $nextImg = $imgWrapCollection.eq(0);
        }

        $nextImg.fadeIn('slow');
        $activeImg.fadeOut('slow');
        $activeImg = $nextImg;
    };

    function prev () {
        var $prevImg = $activeImg.prev();

        if (!$prevImg[0]) {
            $prevImg = $imgWrapCollection.eq($imgWrapCollection.length -1);
        }

        $prevImg.fadeIn();
        $activeImg.fadeOut();
        $activeImg = $prevImg;
    };

    function startSlide () {
        timerId = setTimeout(function(){
            next();
            startSlide();
        }, 4000);    
    };

    function stopSlide () {
        clearTimeout(timerId);
    };

    function restartSlider () {
        stopSlide();
        startSlide();
    }

    $nextControl.click(next).click(restartSlider);;
    $prevControl.click(prev).click(restartSlider);;
    startSlide();
}

$(function(){

    // slider init
    slider();
    // slider end

    // popup
    $('.js-popup-open').click(function(e){
        var idPopup = '#' + $(this).attr('data-popup');
        $(idPopup).fadeToggle('fast');
    });

    $('.close').click(function(){
        $(this).closest('.popup').fadeToggle('fast');
    });
    // popup end

	$('.js-subcatalog-open').click(function(e){
        $(this).parent().find('.catalog-sublist').slideToggle();
        e.preventDefault();
    });

    $(window).load(function(){
        var wrapperHeight = $('.wrapper').outerHeight();
        $('.backdrop').height(wrapperHeight);
    });

});