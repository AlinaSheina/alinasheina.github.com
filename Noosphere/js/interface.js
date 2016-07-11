$(function(){
    var width = $('.slider img').width();
    function carousel(){
        $('.slider').delay(1000).animate({right: '+=' + width},1000, function(){
            var first = $('.slider img:first-of-type');
            var paginationItem = $('.pagination-item');
            first.remove();
            $(this).append(first);
            $(this).css({right: '-=' + width});
            carousel();
            var sliderEq = $('.slider img:first-of-type').attr("data-number");
            paginationItem.removeClass('active');
            paginationItem.eq(sliderEq).addClass('active');
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
    });

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
        var valuePersent = 61;
        var starItem = $('.star-item');

        $('.c100').addClass('p' + valuePersent);
        $('.value-text').append(valuePersent + '%');

        if (valuePersent > 20) {
            starItem.eq(0).addClass('active');
        }
        if (valuePersent > 40) {
            starItem.eq(1).addClass('active');
        }
        if (valuePersent > 60) {
            starItem.eq(2).addClass('active');
        }
        if (valuePersent > 80) {
            starItem.eq(3).addClass('active');
        }
        if (valuePersent == 100) {
            starItem.eq(4).addClass('active');
        }
    }
    setDiagramValue();
});
