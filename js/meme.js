$(window).scroll(function (){
    $('.MeMe h1').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 10){
              $(this).addClass('scrollin');
            }
        });
    });
    $(window).scroll(function (){
        $('.background h1').each(function(){
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
              if (scroll > elemPos - windowHeight + 10){
                  $(this).addClass('scrollin');
                }
            });
        });
        $(window).scroll(function (){
            $('.memev h1').each(function(){
                var elemPos = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
                  if (scroll > elemPos - windowHeight + 10){
                      $(this).addClass('scrollin');
                    }
                });
            });
