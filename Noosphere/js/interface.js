$(function(){
    var width = $('.slider img').width();
    function carousel(){
        $('.slider').delay(1000).animate({right: '+=' + width},1000, function(){
            var first = $('.slider img:first-of-type');
            first.remove();
            $(this).append(first);
            $(this).css({right: '-=' + width});
            carousel();
            var sliderEq = $('.slider img:first-of-type').attr("data-number");
            $('.pagination-item').removeClass('active');
            $('.pagination-item').eq(sliderEq).addClass('active');
        });
    }
    carousel();
 
    activeTab();
    function activeTab () {
        $('.active-step').next().click(function(){
            var $this = $(this);

            if ( $this.hasClass('done-step') ) return;

            $this.addClass('active-step');
            $this.prev().addClass('done-step').removeClass('active-step');
            progressLine ();
        });
    }

    function progressLine () {
        var number=0;
        var progressLineWidth = 20;
        $('.steps ul li').each(function(){
            if ($(this).hasClass('done-step')) {
                number=number+1;
            }
        });
        $('.progress-line').css('width', progressLineWidth*number + '%');
        $('.load-line span').text(progressLineWidth*number + '%');
        activeTab();
    }
 
    $('.tabs').find('.tab-toggle').click(function () {
        var $this = $(this);
        var idContent = '#' + $this.attr('data-content');
        var $tabs = $this.closest('.tabs');
        $this.parent().children('.active-tab').removeClass('active-tab');
        $this.addClass('active-tab');
        $tabs.find('.content-active').removeClass('content-active');
        $tabs.find(idContent).addClass('content-active');
    });

    function slider() {
        var viewportWidth = $('.viewport').width();
        var marLeft = 0;
        var marRight = 10;
        var sliderNumber = $('.slider-item').length;
        var shiftToTheLeft = $('.slider-item').outerWidth() + marRight;
        $('.right').click(function(){
            $('.left').show();
            if (marLeft > - shiftToTheLeft * (sliderNumber - 1) ) {
                marLeft = marLeft - shiftToTheLeft;
                if (marLeft <= viewportWidth - shiftToTheLeft * (sliderNumber)) {
                    $('.right').hide();
                };
                $(".viewbox").animate({
                    marginLeft: + marLeft + 'px',
                  }, 300);
            };
        });
        $('.left').click(function(){
            $('.right').show();
            if (marLeft < 0) {
                marLeft = marLeft + shiftToTheLeft;
                if (marLeft == 0) {
                    $('.left').hide();
                }
                $(".viewbox").animate({
                    marginLeft: + marLeft + 'px',
                  }, 300 );
            };
        });    
    };
    slider();

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 30, 70 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );


    function checkValueBtns() {
        $('.check-value').find('input:checked').closest('.label-wrap').addClass('active-label');
        $('.check-value .label-wrap').click(function() {
            if (!$(this).parent().hasClass('disabled')) {
                $(this).closest('.check-value').find('.label-wrap').removeClass('active-label');
                $(this).addClass('active-label');
            } else {
                return;
            };
        });
    };
    checkValueBtns();

    function setDiagramValue () {
        var valuePersent = 53;
        $('.c100').addClass('p' + valuePersent);
        $('.value-text').append(valuePersent + '%');

        if (valuePersent > 20) {
            $('.star-item').eq(0).addClass('active');
        }
        if (valuePersent > 40) {
            $('.star-item').eq(1).addClass('active');
        }
        if (valuePersent > 60) {
            $('.star-item').eq(2).addClass('active');
        }
        if (valuePersent > 80) {
            $('.star-item').eq(3).addClass('active');
        }
        if (valuePersent == 100) {
            $('.star-item').eq(4).addClass('active');
        }
    }
    setDiagramValue();
});
