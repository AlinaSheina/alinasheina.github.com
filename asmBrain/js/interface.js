$(function(){

    $('.show-dropd').hover(
    function(){
        $(this).next().eq(0).show();
    }, function(){
        var $dropd = $(this).next().eq(0);
        var timer = setTimeout(function(){
            $dropd.hide();
        }, 100);
        
        $dropd.hover(function(){
            clearTimeout(timer);
        },
        function(){
            $dropd.hide();
        });
    }
);

    // show dropdown, hover function
    
    // function show_dropdown(){
    //     var $dropd = $(this).next('.dropd');
    //     $dropd.show();
    //     $dropd.on('mouseout', function () {
    //         $(this).hide();
    //     });
    // };
    // function hide_dropdown(){
    //     var $dropd = $(this).next('.dropd');
    //     var change_ln_timeout = setTimeout(function () {
    //         $dropd.hide();
    //     }, 150);
    //     $dropd.on('mouseover', function () {
    //         clearTimeout(change_ln_timeout);
    //     });
    // };

    // $('.show-dropd').hover(show_dropdown, hide_dropdown);

    // $('.dropd').hover(
    //     function () {
    //         clearTimeout(change_ln_timeout);
    //     },
    //     hide_dropdown
    // );

    // change active button in menu, show submenu
    $('.menu').find('.menu-item').click(function () {
        var $this = $(this);
        var idContent = '#' + $this.attr('data-content');
        var $submenu = $('.submenu-wrap');
        $this.parent().children('.menu-active').removeClass('menu-active');
        $this.addClass('menu-active');
        $submenu.find('.submenu-show').removeClass('submenu-show');
        $submenu.find(idContent).addClass('submenu-show');
    });

    // change active button in submenu
    $('.submenu').find('.sub-menu-item').click(function () {
        var $this = $(this);
        $this.parent().children('.menu-active').removeClass('menu-active');
        $this.addClass('menu-active');
    });

    // show and close register and login dropdown
    $('.login-block').find('.enter-btn').click(function () {
        var $this = $(this);
        var idContent = '#' + $this.attr('data-content');
        $this.parent().find(idContent).show();
    });
    $('.close-btn').click(function () {
        $(this).parent().hide();
    });

    // show more
    $('.show-more').click(function () {
        $(this).parent('.search-text').css({height:'auto'});
        $(this).hide();
    });

    // select item in dropdown
    $('.select').click(function () {
        var $this = $(this);
        var sortText = $this.text();
        var idContent = '#' + $this.parent().attr('data-content');
        var $dropdown = $this.parent('.dropd');

        $(idContent).text(sortText);       
        $this.parent().children('.select').removeClass('hidden');
        $this.addClass('hidden');

        if ( $this.text() === 'All' ) {
            $('#now-showing-number').hide();
        } else {
            $('#now-showing-number').show();
        }
    });

});

