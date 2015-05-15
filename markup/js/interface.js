$(function(){

    // show dropdown, hover function
    $('.show-dropd').hover(
        function(){
            var $dropdown = $(this).parent().find('.dropd');
            var $clickBtn = $(this);
            var leftValue = ($dropdown.width() - $clickBtn.width() )/2;

            $(this).find('.dropd').show();
            $dropdown.show();            
            $dropdown.css({'left': -leftValue});
        }, function(){
            $(this).find('.dropd').hide();
        }
    );

    // show dropdown, click function
    $('.click-btn').click(function(){
        var $dropdown = $(this).parent().find('.dropd');
        var $clickBtn = $(this);
        $dropdown.toggle();
        var leftValue = ($dropdown.width() - $clickBtn.width() )/2;
        $dropdown.css({'left': -leftValue});
    });

    // help dropdown, click function
    $('.click-help').click(function(){
        $(this).parent().find('.dropd').toggle();
    });

    // show and close register and login dropdown
    $('.login-block').find('.enter-btn').click(function () {
        var dropdownBlock = $(this).parent();
        if ( dropdownBlock.children().is('#register') ) {
            dropdownBlock.find('#register').toggle();
            $('#login').hide();
        } else {
            dropdownBlock.find('#login').toggle();
            $('#register').hide();
        }                   
    });
    // $('.close-btn').click(function () {
    //     $(this).parent().hide();
    // });

    // tabs
    $('.tabs').click(function(){
        var number = $(this).index();
        $('.tab-content').hide().eq(number).show();
        $(this).addClass('active bg-dark-blue');
        $('.tabs').not(this).removeClass('active bg-dark-blue');

        setWidthSlider();
        toggleAccTypesBlock();
    });

    // sub-tabs
    $('.sub-tabs').click(function(){
        var number = $(this).index();
        $(this).closest('.sub-tab-content-wrap').find('.sub-tab-content').hide().eq(number).show();
        $(this).addClass('active bg-dark-blue');
        $(this).closest('.sub-tab-content-wrap').find('.sub-tabs').not(this).removeClass('active bg-dark-blue');
    });
    
    function toggleAccTypesBlock () {
        if ($('.account-types').hasClass('active')) {
            $('.account-types-block').show();
        } else {
            $('.account-types-block').hide();
        }  
    }
    
    // the column hightlight
    if ($('.column-name .asc').length > 0) {
        var elemActiveNumber = $('.column-name .asc').parent().index();
        var colNumber = $('.column-name th').length;   
        $('.tbody-row').find('td').each(function(){
            $('.tbody-row').find('td').eq(elemActiveNumber).addClass('active-bg');
            elemActiveNumber = elemActiveNumber + colNumber;
        });
    }

    $('.calc-table').find('td:parent').addClass('full-cell');
    

    // recalculate height of sidebar dropdown
    if ( $('.side-menu-header').hasClass('active')) {
        var overview = $('.side-menu-header').parent().find('.overview');
        var scrollable = $('.side-menu-header').parent().find('.scrollable');

        if ( overview.height() < scrollable.height()) {
            scrollable.height(overview.height());
        } 
    }   

    // show and close sidebar dropdown
    $('.side-menu-header').click(function () {
        $('.side-menu-header').removeClass('active');
        $(this).addClass('active');
        $('.menu-dropd').removeClass('show');
        $(this).parent().find('.menu-dropd').addClass('show'); 

        var overview = $(this).parent().find('.overview');
        var scrollable = $(this).parent().find('.scrollable');

        // recalculate height of sidebar dropdown
        if ( overview.height() < scrollable.height()) {
            scrollable.height(overview.height());
        }

        $(".demo").customScrollbar();           
    });

    // change active btn in sidebar dropdown
    $('.side-menu-drop li').click(function () {
        $('.side-menu-drop li').removeClass('active-btn');
        $(this).addClass('active-btn');            
    });

    // change active login and sign in
    $('.sign-up-header').click(function () {
        $('.sign-up-header').removeClass('active bg-dark-blue').addClass('bg-light');
        $(this).removeClass('bg-light').addClass('active bg-dark-blue');            
    });

    // add class to active label
    $('.check-period').find('input:checked').parent().addClass('active-label');
    $('.check-period label').click(function() {
        $(this).closest('.check-period').find('label').removeClass('active-label');
        $(this).addClass('active-label');
    });

    // clear words block 
    $('.clear-word').click(function(e) {
        $(this).closest('.keywords-wrap').find('.bootstrap-tagsinput span').remove();
        e.preventDefault();
    });

    // change block height
    $('.calc-info-block').outerHeight($('.calculator').outerHeight());

    var calcInfoBlockHeight = $('.calc-info-block').height();
    var calcInfoTitleHeight = $('.calc-info-title').height();
    var marginTop = 10;
    var paddTopBott = 35;
    $('.inform-text').outerHeight(calcInfoBlockHeight - calcInfoTitleHeight - marginTop);

    $('.calc-text .inform-text').outerHeight(calcInfoBlockHeight - calcInfoTitleHeight - paddTopBott - marginTop);
    $('.calc-text').outerHeight(calcInfoBlockHeight - calcInfoTitleHeight - marginTop);

    $('.show-more-text').click(function() {
        $(this).closest('.calc-info-block').find('.inform-text').css('height', 'auto');
        $(this).closest('.calc-text').css('height', 'auto');
        $(this).closest('.calc-info-block').css('height', 'auto');
        $(this).hide();
    });
    
    // scroll view-item dropdown
    function slider () {
        var marLeft = 0; 
        var shiftToTheLeft = 100;

        $('.left').click(function(){
            if (marLeft < 0) {
                marLeft = marLeft + shiftToTheLeft;
                $(this).parent().find('.view-item-wrap').css({
                    'margin-left': + marLeft + 'px', 
                });
            };                              
        });
        
        $('.right').click(function(){                    
            var viewItemWiewportWidth = $('.view-item-viewport').width();
            var viewItemWrapWidth = $('.view-item-wrap').width();
            if (marLeft <= 0 && marLeft > -(viewItemWrapWidth - viewItemWiewportWidth)) {
                marLeft = marLeft - shiftToTheLeft;
                $(this).parent().find('.view-item-wrap').css({
                    'margin-left': + marLeft + 'px', 
                });
            };                    
        });
    }

    function setWidthSlider () {
        var viewItemWrapWidth = 0;
        $('.view-item-wrap li a').each(function(){
            viewItemWrapWidth += $(this).outerWidth();
            $('.view-item-wrap').width(viewItemWrapWidth);
        });
    }

    setWidthSlider();
    slider();

    // $('.scroll-block .view-item-wrap li').click(function () {
    //     var $this = $(this);

    //     $('.scroll-block .active-link').text($this.text());       
    //     $this.parent().children('li').removeClass('hidden');
    //     $this.addClass('hidden');
    //     setWidthSlider();
    // });

    // disabled select
    $('.select-list').click(function () {
        if ($(this).parent().find('.between-select option:selected').text() === "—" && $(this).parent().find('.and-select option:selected').text() === "—" ) {
            console.log('true');
            $(this).parent().find('.main-select select').removeAttr('disabled');
        } else {
            console.log(false);
            $(this).parent().find('.main-select select').attr('disabled', 'disabled');
        }
    });   

    displaySlider(0, 10);
    
    $(".demo").customScrollbar();  

    if ($.fn.rating && typeof $.fn.rating === 'function') {
        $("#input-id").rating(); 
    }

    if ($.fn.tagsinput && typeof $.fn.tagsinput === 'function') {
        $('.keywords-wrap input').tagsinput('add', 'some tag');
    }    
    
});

function displaySlider(min_start, max_start) {
    if ($.fn.slider && typeof $.fn.slider === 'function') {
        // slider in advansed search
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 10,
            step: 0.1,
            values: [ min_start, max_start ],
            slide: function( event, ui ) {
                $( "#amount" ).val( ui.values[ 0 ]);
                $( "#amount2" ).val( ui.values[ 1 ] );
            }
        });

        $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
        $( "#amount2" ).val( $( "#slider-range" ).slider( "values", 1 ) );

        $('.rating-block-wrap .reset').click(function (e) {
            $( "#slider-range" ).slider({
                range: true,
                values: [ 0, 10 ],
                slide: function( event, ui ) {
                    $( "#amount" ).val( ui.values[ 0 ]);
                    $( "#amount2" ).val( ui.values[ 1 ] );
                }
            });
            $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
            $( "#amount2" ).val( $( "#slider-range" ).slider( "values", 1 ) );
            e.preventDefault();
        });
    }
    return false;
}