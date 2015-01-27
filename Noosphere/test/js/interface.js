$(window).load(function(){
    var width = $('.slider img').width();
    function carousel(){
        $('.slider').delay(1000).animate({right: '+=' + width},1000, function(){
            var first = $('.slider img:first-of-type');
            first.remove();
            $(this).append(first);
            $(this).css({right: '-=' + width});
            carousel();
        });
    }
    carousel();
});

$(function(){
    activeTab ();
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
        activeTab ();
    }
});

$(function(){
    $('.tabs').find('.tab-toggle').click(function () {
        var $this = $(this);
        var idContent = '#' + $this.attr('data-content');
        var $tabs = $this.closest('.tabs');
        $this.parent().children('.active-tab').removeClass('active-tab');
        $this.addClass('active-tab');
        $tabs.find('.content-active').removeClass('content-active');
        $tabs.find(idContent).addClass('content-active');
    });
});
