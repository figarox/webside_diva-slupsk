$(document).ready(function() {
        
    $('.js--section-plans').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        },
                {
                  offset: '60px;'
                });

                $('.js--sections-form').waypoint(function(direction) {
                  if (direction == "down") {
                      $('navi').addClass('stickyy');
                      $('span').addClass('wypelnienie');
                  } else {
                      $('navi').removeClass('stickyy');
                      $('span').removeClass('wypelnienie');
                  }
                  },
                          {
                            offset: '20px;'
                          });
 
                

/*     
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})

    });
    
*/    
    
    /*scroll buttons*/
    
    $(".js--scroll-to-mi").click(function () {
      $('html,body').animate({scrollTop: 1900}, 800);  
    });
    
    $(".js--scroll-to-w").click(function () {
      $('html,body').animate({scrollTop: 800}, 800);  
    });  
    
    $(".js--scroll-to-s").click(function () {
      $('html,body').animate({scrollTop: 1750}, 800);  
    });  
    
    $(".js--scroll-to-mi").click(function () {
      $('html,body').animate({scrollTop: 2000}, 800);  
    }); 
    
    $(".js--scroll-to-dm").click(function () {
      $('html,body').animate({scrollTop: 2300}, 1300);  
    });   

    $(".js--scroll-to-n").click(function () {
      $('html,body').animate({scrollTop: 2600}, 800);  
    }); 

    $(".js--scroll-to-li").click(function () {
      $('html,body').animate({scrollTop: 2600}, 800);  
    });   
    
    $(".js--scroll-to-form").click(function () {
      $('html,body').animate({scrollTop: $('.js--sections-form').offset().top}, 800);  
    });
    
    
        $(".js--wp-1").waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeInUp');  
        },{
        offset: '60%'
    });
    
       $(".js--wp").waypoint(function(direction) {
      $('.js--wp').addClass('animated fadeInLeft');  
        },{
        offset: '60%'
    });
});    


