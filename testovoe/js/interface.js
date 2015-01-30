$(function(){
    $('.ln').mouseenter(function(){
        $('.change-ln-block').css({visibility:'visible'});
    }).mouseleave(function(){
        $('.change-ln-block').css({visibility:'hidden'});
    });

    $('.touchslider-item').width( parseInt($('.touchslider').width()) );
});

$(window).resize(function() {
    $('.touchslider-item').width( parseInt($('.touchslider').width()) );
});


// $(function() {
//         var interval, $userDrop;
//         $userDrop = $('.change-ln-block');
//         $('.ln').mouseover(function showForm () {
//             $userDrop.css({visibility:'visible'});
//             clearTimeout(interval);
//         });

//         $('.ln').mouseout(function hideForm () {
//             var self = this;

//             $(this).find($userDrop).mouseover(function(){
//                 return;
//             });

//             $(this).find($userDrop).mouseout(function(){
//                 $userDrop.css({visibility:'hidden'});
//             });

//             if (!a.length) {
//                 interval = setTimeout (function() {
                    
//                 }, 10000);
//             } else {
//                 setTimeout(function(){
//                     hideForm.call(self);
//                 }, 1000);
//             }
//         });
//     });