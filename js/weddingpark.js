//フェードイン
// $(window).scroll(function (){
//     $('.main h1').each(function(){
//         var elemPos = $(this).offset().top,
//             scroll = $(window).scrollTop(),
//             windowHeight = $(window).height();
//           if (scroll > elemPos - windowHeight + 100){
//               $(this).addClass('scrollin');
//             }
//         });
//     });
$(window).scroll(function (){
    $('.te-ma h2').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 10){
              $(this).addClass('scrollin');
            }
        });
    });
    $(window).scroll(function (){
        $('.yo p').each(function(){
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
              if (scroll > elemPos - windowHeight + 10){
                  $(this).addClass('scrollin');
                }
            });
        });
