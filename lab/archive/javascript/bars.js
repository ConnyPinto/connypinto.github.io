$(document).ready(function () {
   $('.bars').click(function () {
       var $bar = $(this);
       if (!$bar.hasClass('expanded')) {
           $bar.data('original-height', $bar.height());
           $bar.animate({ height: '1000px' }, {
               duration: 1000,
               progress: function () {
                   $('html,body').scrollTop($bar.height());
               },
               done: function () {
                   $('body').addClass($bar.data('bar-name') + '-expanded');
                   
                    $bar.addClass('expanded');
                    $bar.find('.info').css({
                        'left': $bar.offset().left - ($(this).width() / 2)
                    });
               }
            });
       }
       else {
           $bar.removeClass('expanded');
           $('body').removeClass($bar.data('bar-name') + '-expanded');
           $bar.animate({ height: $bar.data('original-height') }, {
               duration: 1000,
               progress: function () {
                   $('html,body').scrollTop($bar.height());
               }
           });
       }
       
   });
   
   $('.bars').mouseover(function () {
      $(this).find('audio')[0].play(); 
   });
   
   $('body').mousedown(function () {
       $('body').addClass($('.expanded:eq(0)').data('bar-name') + '-mousedown');
   });
   
   $('body').mouseup(function () {
       $('body').removeClass($('.expanded:eq(0)').data('bar-name') + '-mousedown');
   });
});


