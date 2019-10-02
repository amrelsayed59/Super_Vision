/*global $,  document, window*/


$(document).ready(function () {

    //$('.calendar').pignoseCalendar({
    //    theme: 'dark' // light, dark, blue
    //});
    
    //Navbar SlideToggle
     $('.the-toggler').on('click', function () {
      
       $('.navbar').slideToggle();
   });
    
     // Caching The ScrollTop Element
    var scrollButton = $('.fixed-button');
    
    $(window).scroll(function () {
       
        if($(this).scrollTop() >= 600) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    scrollButton.click(function() {
        $('html, body').animate({
            scrollTop: 0
        },1000);
    });
    
    
     // Add Class Scrolled in navbar
	$(window).scroll(function () {
		
		var navbar = $('.navbar');
		
		if ($(window).scrollTop() >= navbar.height()) {
			
			navbar.addClass('scrolled');
			
		} else {
			
			navbar.removeClass('scrolled');
		}
    });
    
    // Dropdown Menu -- Navbar
    $('.navbar-nav .dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
    });
    
     //Light Slider  
	$("#lightSlider").lightSlider({

		item: 4,
		autoWidth: false,
		slideMove: 2, // slidemove will be 1 if loop is true
		slideMargin: 18,
		rtl: false,
		loop: true,
        slideEndAnimation: true,
        speed: 2000,
        auto: true,
        pause: 3000,

        keyPress: false,
        controls: true,
        prevHtml: '<i class="fa fa-chevron-right"></i>',
        nextHtml: '<i class="fa fa-chevron-left"></i>',

        
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
        
    });

    $("#lightSlider-2").lightSlider({

		item: 3,
		autoWidth: false,
		slideMove: 2, // slidemove will be 1 if loop is true
		slideMargin: 18,
		rtl: false,
		loop: true,
        slideEndAnimation: true,
        speed: 2000,
        auto: true,
        pause: 3000,

        keyPress: false,
        controls: true,
        prevHtml: '<i class="fa fa-chevron-right"></i>',
        nextHtml: '<i class="fa fa-chevron-left"></i>',
       
       
        
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
        
    });


    //Second Light Slider  
	$("#secondlightSlider").lightSlider({

		item: 5,
		autoWidth: false,
		slideMove: 2, // slidemove will be 1 if loop is true
		slideMargin: 18,
		rtl: false,
		loop: true,
        slideEndAnimation: true,
        speed: 2000,
        auto: true,
        pause: 3000,
        
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
        
    });
    
    
    // Blugin Product
    $(document).ready(function(){ 
        $(".preview").on("click", function(){  
             $(".active").removeClass("active");
            $(this).addClass("active");
            var picture = $(this).data();
        });
        $(".preview a").on("click", function(){  
            $(".selected").removeClass("selected");
            $(this).addClass("selected");
            var picture = $(this).data();
            
            event.preventDefault(); //prevents page from reloading every time you click a thumbnail
  
  
            $(".full img").fadeOut( 100, function() { 
              $(".full img").attr("src", picture.full);
              $(".full").attr("href", picture.full);
              $(".full").attr("title", picture.title);
  
          }).fadeIn();
  
  
        });// end on click
/*
            $('[data-fancybox]').fancybox({
                protect: true,
                buttons : [
                  'zoom',
                  'thumbs',
                  'close'
                ]
            });
        
  */
  
    });//end doc ready
    

    // Nice Scroll
    /*
    $("html").niceScroll({
            
        cursorcolor: "#9fc588",
        cursorwidth: "10px",
        cursorheight: "100px",
        cursorborder: "2px solid #000",
        cursorborderradius: "15px",
        scrollspeed: "50",
        horizrailenabled: false
    });
    */


     // Nice Scroll
     /*
     $(".about-tabs").niceScroll({
            
        cursorcolor: "#9fc588",
        cursorwidth: "5px",
        cursorheight: "100px",
        cursorborder: "2px solid #9fc588",
        cursorborderradius: "15px",
        scrollspeed: "50",
        horizrailenabled: false
    });
    */

    // Toggle Product Description
	$('.product i, .items .item i ').on('click', function () {
		
		$(this).toggleClass('fa-plus fa-minus').next('.description').slideToggle();
		
    });
    
//Second Light Slider  
$("#vertical").lightSlider({

    gallery:false,
    item:1,
    vertical:true,
    verticalHeight:320,
    //vThumbWidth:50,
    thumbItem:4,
    thumbMargin:4,
    slideMargin:0,
    speed: 3000,
    auto: true,
    pause: 4000,
    prevHtml: '<i class="fa fa-chevron-up"></i>',
    nextHtml: '<i class="fa fa-chevron-down"></i>',
    
    responsive : [
        {
            breakpoint:800,
            settings: {
                item:1,
                slideMove:1,
                slideMargin:6,
              }
        },
        {
            breakpoint:480,
            settings: {
                item:1,
                verticalHeight: 320,
                slideMove:1

              }
        }
    ]
    
});    
    
});





