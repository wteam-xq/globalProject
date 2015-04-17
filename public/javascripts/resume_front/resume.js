$(document).ready(function(){

     //Call PrettyPhoto
     $("a[data-gal^='prettyPhoto[gallery]']").prettyPhoto({
               animation_speed: 'fast', /* fast/slow/normal */
               slideshow: 5000, /* false OR interval time in ms */
               autoplay_slideshow: false, /* true/false */
               opacity: 0.80, /* Value between 0 and 1 */
               show_title: true, /* true/false */
               allow_resize: true, /* Resize the photos bigger than viewport. true/false */
               default_width: 500,
               default_height: 344,
               counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
               theme: 'dark_square', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
               horizontal_padding: 20, /* The padding on each side of the picture */
               hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
               wmode: 'opaque', /* Set the flash wmode attribute */
               autoplay: true, /* Automatically start videos: True/False */
               modal: false, /* If set to true, only the close button will close the window */
               deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
               overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
               social_tools: false
     });
     
     // hide messages 
     $(".error").hide();
     $(".success").hide();
     
     $('#contactForm input').click(function(e) {
        $(".error").fadeOut();
     });
     
     // on submit...
     $("#contactForm #submit").click(function() {
          $(".error").hide();
          //name
          var name = $("input#name").val();
          if(name == ""){
               //$("#error").fadeIn().text("Name required.");
               $('#fname').fadeIn('slow');
               $("input#name").focus();
               return false;
          }
          //email (check if entered anything)
          var email = $("input#email").val();
          //email (check if entered anything)
          if(email == ""){
               //$("#error").fadeIn().text("Email required");
               $('#fmail').fadeIn('slow');
               $("input#email").focus();
               return false;
          }
          
          //email (check if email entered is valid)

          if (email !== "") {  // If something was entered
               if (!isValidEmailAddress(email)) {
                    $('#fmail').fadeIn('slow'); //error message
                    $("input#email").focus();   //focus on email field
                    return false;  
               }
          } 

          function isValidEmailAddress(emailAddress) {
              var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
              return pattern.test(emailAddress);
          };

          // comments
          var comments = $("#msg").val();
          
          if(comments == ""){
               //$("#error").fadeIn().text("Email required");
               $('#fmsg').fadeIn('slow');
               $("input#msg").focus();
               return false;
          }
     });  
          
          
     // on success...
      function success(){
          $("#success").fadeIn();
          $("#contactForm").fadeOut();
      }

     // home效果
     $('#home, .page-section').waypoint(function (event, direction) {
          if (direction === 'down') {
            $(this).find('.fx-flash').addClass('animated flash');
            $(this).find('.fx-bounce').addClass('animated bounce');
            $(this).find('.fx-shake').addClass('animated shake');
            $(this).find('.fx-tada').addClass('animated tada');
            $(this).find('.fx-swing').addClass('animated swing');
            $(this).find('.fx-wobble').addClass('animated wobble');
            $(this).find('.fx-wiggle').addClass('animated wiggle');
            $(this).find('.fx-pulse').addClass('animated pulse');
            $(this).find('.fx-fadeInDownBig').addClass('animated fadeInDownBig');
            $(this).find('.fx-fadeInUpBig').addClass('animated fadeInUpBig');
            $(this).find('.fx-fadeInLeftBig').addClass('animated fadeInLeftBig');
            $(this).find('.fx-fadeInRightBig').addClass('animated fadeInRightBig');
            $(this).find('.fx-fadeInDown').addClass('animated fadeInDown');
            $(this).find('.fx-fadeInUp').addClass('animated fadeInUp');
            $(this).find('.fx-fadeInLeft').addClass('animated fadeInLeft');
            $(this).find('.fx-fadeInRight').addClass('animated fadeInRight');  
            $(this).find('.fx-fadeOutDownBig').addClass('animated fadeOutDownBig');
            $(this).find('.fx-fadeOutUpBig').addClass('animated fadeOutUpBig');
            $(this).find('.fx-fadeOutLeftBig').addClass('animated fadeOutLeftBig');
            $(this).find('.fx-fadeOutRightBig').addClass('animated fadeOutRightBig');
            $(this).find('.fx-fadeOutDown').addClass('animated fadeOutDown');
            $(this).find('.fx-fadeOutUp').addClass('animated fadeOutUp');
            $(this).find('.fx-fadeOutLeft').addClass('animated fadeOutLeft');
            $(this).find('.fx-fadeOutRight').addClass('animated fadeOutRight');
            $(this).find('.fx-bounceIn').addClass('animated bounceIn');
            $(this).find('.fx-bounceOut').addClass('animated bounceOut');
            $(this).find('.fx-bounceInUp').addClass('animated bounceInUp');
            $(this).find('.fx-bounceInDown').addClass('animated bounceInDown');
            $(this).find('.fx-bounceInLeft').addClass('animated bounceInLeft');
            $(this).find('.fx-bounceInRight').addClass('animated bounceInRight');
            $(this).find('.fx-bounceOutUp').addClass('animated bounceOutUp');
            $(this).find('.fx-bounceOutDown').addClass('animated bounceOutDown');
            $(this).find('.fx-bounceOutLeft').addClass('animated bounceOutLeft');
            $(this).find('.fx-bounceOutRight').addClass('animated bounceOutRight');
            $(this).find('.fx-rotateIn').addClass('animated rotateIn');
            $(this).find('.fx-rotateInDownLeft').addClass('animated rotateInDownLeft');
            $(this).find('.fx-rotateInDownRight').addClass('animated rotateInDownRight');
            $(this).find('.fx-rotateInUpLeft').addClass('animated rotateInUpLeft');
            $(this).find('.fx-rotateInUpRight').addClass('animated rotateInUpRight');
            $(this).find('.fx-rotateOut').addClass('animated rotateOut');
            $(this).find('.fx-rotateOutDownLeft').addClass('animated rotateOutDownLeft');
            $(this).find('.fx-rotateOutDownRight').addClass('animated rotateOutDownRight');
            $(this).find('.fx-rotateOutUpLeft').addClass('animated rotateOutUpLeft');
            $(this).find('.fx-rotateOutUpRight').addClass('animated rotateOutUpRight');
            $(this).find('.fx-lightSpeedIn').addClass('animated lightSpeedIn');
            $(this).find('.fx-lightSpeedOut').addClass('animated lightSpeedOut');
            $(this).find('.fx-hinge').addClass('animated hinge');
            $(this).find('.fx-rollOut').addClass('animated rollOut');
            $(this).find('.fx-rollIn').addClass('animated rollIn');
            $(this).find('.fx-rollOut').addClass('animated rollOut');
            $(this).find('.fx-slideInLeft').addClass('animated slideInLeft');
            $(this).find('.fx-slideInRight').addClass('animated slideInRight');
            $(this).find('.fx-slideInDown').addClass('animated slideInDown');
            $(this).find('.fx-slideOutLeft').addClass('animated slideOutLeft');
            $(this).find('.fx-slideOutRight').addClass('animated slideOutRight');
            $(this).find('.fx-slideOutUp').addClass('animated slideOutUp');
            $(this).find('.fx-flip').addClass('animated flip');
            $(this).find('.fx-flipInX').addClass('animated flipInX');
            $(this).find('.fx-flipInY').addClass('animated flipInY');
            $(this).find('.fx-flipOutX').addClass('animated flipOutX');
            $(this).find('.fx-flipOutY').addClass('animated flipOutY');
          } else {
          }
     }, { offset: 100 });
     
     // 菜单点击效果
     $(".scroll-link").click(function() {
          var ScrollOffset = $(this).attr('data-soffset');
          //alert(ScrollOffset);
          $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
          }, {
            duration: 1800,
            easing: "easeInOutExpo"
          });
       
          return false;
     });

     // 按钮点击事件
     $('#sm-trigger, .menu-close').on('click', function(){
          $('#sm-trigger').toggleClass('active');
          $('#mastwrap').toggleClass('sliding-toright');
          $('#sm').toggleClass('menu-open');
          $('#mastwrap').addClass('nav-opened');
     });
     $('#mastwrap').on('click', function(){
          $('#mastwrap').removeClass('sliding-toright');
          $('#sm').removeClass('menu-open');
     });

     // script.js
     //Detecting viewpot dimension and calculating the adjustments of components   
      var vW = $(window).width();
      var vH = $(window).height();
      var vHperc25 = vH*25/100;
      var vHperc20 = vH*20/100;
      if(vW > 1400){
        $('#home').css('height', vH);
        $('#home').css('padding-top', vHperc20);
      }
      $('#welcome').css('min-height', vH);
      $('#welcome h1').css('margin-top', vHperc25);
      //Counting number of nav-items and adjusting the height accordingly
      var navCount = $('#sidebar-nav ul li').size();
      var navHeight = vH/navCount;
      //alert(navHeight);
      $('#sidebar-nav ul li').css('height',navHeight);

       //HOME PAGE 2 - TICKER
       var current = 1; 
       var height = $('.ticker').height(); 
       var numberDivs = $('.ticker').children().length; 
       var first = $('.ticker h1:nth-child(1)'); 
       setInterval(function() {
           var number = current * -height;
           first.css('margin-top', number + 'px');
           if (current === numberDivs) {
               first.css('margin-top', '0px');
               current = 1;
           } else {current++;}
       }, 2500); 


       $('.carousel').carousel({
         interval: 2000
       });

       //Nav highlight
       $('#mast-nav li > a').click(function(){
           $('#mast-nav li > a').removeClass('active');
           $(this).addClass('active');
       });

       $('.page-section').mouseenter(function(){
           var sectionId = $(this).attr('id');
           $('#mast-nav li > a').removeClass('active');
           $('#'+sectionId+'-linker').addClass('active');
       });

       //Parallax Init
       $(window).stellar({
           responsive: true,
           horizontalScrolling: false,
           parallaxBackgrounds: true,
           parallaxElements: true,
           hideDistantElements: true
       });

       //WAYPOINTS - INTERACTION
       //=======================

       //Triggering Navigation as Sticky when scrolled to second section:
       $('.navigation-fadeIn').waypoint(function (event, direction) {
           if (direction === 'down') {
               $('#sidebar-nav').addClass('show-nav');
           }
       }, { offset: 10 });

       //Triggering Navigation as Sticky when scrolled to second section:
       $('#metro-panel').waypoint(function (event, direction) {
           if (direction === 'down') {
             var nully ;
             nully = 1;
           } else {
               $('#sidebar-nav').removeClass('show-nav');
           }
       }, { offset: 10 });


       $('#about .welcome-text').waypoint(function (event, direction) {
         if (direction === 'down') {
           //Pie-Chart Invokes
           $(function() {
             $('.chart1').easyPieChart({
                 barColor: '#FD5253',
                 trackColor: '#ccc',
                 scaleColor: false,
                 lineCap: 'butt',
                 lineWidth: 15,
                 size: 140,
                 animate: 2000,
             });
             $('.chart2').easyPieChart({
                 barColor: '#149CA8',
                 trackColor: '#ccc',
                 scaleColor: false,
                 lineCap: 'butt',
                 lineWidth: 15,
                 size: 140,
                 animate: 2000,
             });
             $('.chart3').easyPieChart({
                 barColor: '#7C9C71',
                 trackColor: '#ccc',
                 scaleColor: false,
                 lineCap: 'butt',
                 lineWidth: 15,
                 size: 140,
                 animate: 2000,
             });
             $('.chart4').easyPieChart({
                 barColor: '#CCB361',
                 trackColor: '#ccc',
                 scaleColor: false,
                 lineCap: 'butt',
                 lineWidth: 15,
                 size: 140,
                 animate: 2000,
             });
           });
         } 
       }, { offset: 10 });


       //Slidebar Menu - State Changes
       $('.sq-side-menu ul li a').click(function(){
         $('.sq-side-menu ul li a').removeClass(' sq-active');
         $(this).addClass(' sq-active');
       });

       $('.page-section, #home').mouseenter(function(){
         var activePageId = $(this).attr('id');
         $('.sq-side-menu ul li a').removeClass(' sq-active');
         $('#'+activePageId+'-link').addClass(' sq-active');
       });

       //Metro Panel - Rotating Tiles
       $('#metro-panel .thumb').on('rotate',function(){
         var thisOne = $(this);
         thisOne.addClass('active');
         var time =getRandomInt(3,10)*1000;
         setTimeout(function(){
           thisOne.removeClass('active');
         },time);
       });
       setInterval(function(){
         var thumbs = $('#metro-panel .thumb:not(.active)');
         $(thumbs[getRandomInt(0,thumbs.length)]).trigger('rotate');
       },3000);

       //Custom functions 
       /**
        * Returns a random integer between min and max
        * Using Math.round() will give you a non-uniform distribution!
        */
       function getRandomInt (min, max) {
           return Math.floor(Math.random() * (max - min + 1)) + min;
       }
       
});

$(window).load(function(){

     $("#status").fadeOut(); // will first fade out the loading animation
     $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
     
     $('#slider').flexslider({
               animation: "slide",              //String: Select your animation type, "fade" or "slide"
               slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
               slideshow: true,                //Boolean: Animate slider automatically
               slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
               animationDuration: 600,         //Integer: Set the speed of animations, in milliseconds
               directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
               controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
               keyboardNav: true,              //Boolean: Allow slider navigating via keyboard left/right keys
               mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
               prevText: "",                   //String: Set the text for the "previous" directionNav item
               nextText: "",                   //String: Set the text for the "next" directionNav item
               pausePlay: false,               //Boolean: Create pause/play dynamic element
               pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
               playText: 'Play',               //String: Set the text for the "play" pausePlay item
               randomize: false,               //Boolean: Randomize slide order
               slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
               animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
               pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
               pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
               manualControls: "",             //Selector: Declare custom control navigation. Example would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
               start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
               before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
               after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
               end: function(){}
     });

     //Portfolio rollover
     $('div#portfolio_thumbs ul li').hover(
               function(){ 
                         $(this).find('img[class="rollover"]').stop().animate({opacity:1},600);
                         $(this).find('div[class="item_info"]').stop().slideDown(600);
                         return false;
               },
               function(){
                         $(this).find('img[class="rollover"]').stop().animate({opacity:0},600);
                         $(this).find('div[class="item_info"]').stop().slideUp(600);
                         return false;
               }
     );

     //Filter elements
     $('#portfolioFilter li a').click(function(){

               var animation_speed = 400; //in milliseconds
               var category = $(this).attr('class');
               var all_elements = 'div#portfolio_thumbs ul li';
               var inactive_elements = 'div#portfolio_thumbs ul li[data-type!=' + category + ']';
               var active_elements = 'div#portfolio_thumbs ul li[data-type=' + category + ']';
               var inactive_rollover = 'div#portfolio_thumbs ul li[data-type!=' + category + '] img.rollover';
               var all_images = 'div#portfolio_thumbs ul li img';
               var no_effect = 'div#portfolio_thumbs ul li img.noeffect';
               var inactive_overlay = 'div#portfolio_thumbs ul li[data-type!=' + category + '] div.item_info';
               var blocked_overlay = 'div#portfolio_thumbs ul li div.noeffect';

               if ( category == 'all' )
                  {
                  $(no_effect).removeClass("noeffect");
                  $(blocked_overlay).removeClass("noeffect");
                  $(all_elements).stop().animate({opacity:1},animation_speed );
                  }
                  else {
                        $(no_effect).removeClass("noeffect");
                        $(blocked_overlay).removeClass("noeffect");
                        $(inactive_rollover).addClass("noeffect");
                        $(inactive_overlay).addClass("noeffect");
                        $(inactive_elements).stop().animate({opacity:0.2},animation_speed );
                        $(active_elements).stop().animate({opacity:1},animation_speed );
                       }

     return false;
     });


     //Function for the Next button
     function loadNextItem(){
               
               var source2 = $('#control_buttons a#next').attr("href");
               $('div#portfolio_item').slideUp(300, function(){
                         $('div#item_container').empty();
                         $('div#item_container').append('<div class="loading" style="display: none;"></div>');
                         $('div.loading').slideDown(500);
                         $('div#item_container').delay(2500).queue(function( nxt ) {
                         $(this).load(source2, function(){
                                   $('#item_slider').flexslider({ controlNav: false, prevText: "<", nextText: ">" });
                                   $('div#portfolio_item').slideDown(500, function(){
                                             $('#item_video iframe').css('visibility','visible');
                                             $('#control_buttons a#next').click(function(){
                                                       loadNextItem();
                                                       return false;
                                             });
                                             $('#control_buttons a#prev').click(function(){
                                                       loadPrevItem();
                                                       return false;
                                             });
                                             $('#control_buttons a#close').click(function(){
                                                       $('div#portfolio_item').slideUp(300, function(){
                                                                 $('div#item_container').empty();
                                                                 $("div#filter_wrapper").slideDown(300);
                                                       });
                                             return false;
                                             });
                                   });
                         });
                         nxt();
                         });
               });

     }
     
     //Function for the Prev button
     function loadPrevItem(){
               
               var source3 = $('#control_buttons a#prev').attr("href");
               $('div#portfolio_item').slideUp(300, function(){
                         $('div#item_container').empty();
                         $('div#item_container').append('<div class="loading" style="display: none;"></div>');
                         $('div.loading').slideDown(500);
                         $('div#item_container').delay(2000).queue(function( nxt ) {
                         $(this).load(source3, function(){
                                   $('#item_slider').flexslider({ controlNav: false, prevText: "<", nextText: ">" });
                                   $('div#portfolio_item').slideDown(500, function(){
                                             $('#item_video iframe').css('visibility','visible');
                                             $('#control_buttons a#next').click(function(){
                                                       loadNextItem();
                                                       return false;
                                             });
                                             $('#control_buttons a#prev').click(function(){
                                                       loadPrevItem();
                                                       return false;
                                             });
                                             $('#control_buttons a#close').click(function(){
                                                       $('div#portfolio_item').slideUp(300, function(){
                                                                 $('div#item_container').empty();
                                                                 $("div#filter_wrapper").slideDown(300);
                                                       });
                                             return false;
                                             });
                                   });
                         });
                         nxt();
                         });
               });

     }

     //Load and show portfolio pages
     $("div#portfolio_thumbs ul li a.more_info").click(function(){
               var source = $(this).attr("href");
               $('div#filter_wrapper').slideUp(300, function(){
                         $('div#item_container').append('<div class="loading"></div>');
                         $('html,body').animate({scrollTop: $("#portfolio-wrap").offset().top - 95},'slow', function(){
                                   $('div#item_container').load(source, function(){
                                             $('div.loading').remove();
                                             $('#item_slider').flexslider({ controlNav: false, prevText: "<", nextText: ">" });
                                             $('div#portfolio_item').slideDown(500, function(){
                                                       $('#item_video iframe').css('visibility','visible');
                                                       $('#control_buttons a#next').click(function(){
                                                                 loadNextItem();
                                                                 return false;
                                                       });
                                                       $('#control_buttons a#prev').click(function(){
                                                                 loadPrevItem();
                                                                 return false;
                                                       });
                                                       $('#control_buttons a#close').click(function(){
                                                                 $('div#portfolio_item').slideUp(300, function(){
                                                                           $('div#item_container').empty();
                                                                           $("div#filter_wrapper").slideDown(300);
                                                                 });
                                                       return false;
                                                       });//End: click()
                                             });//End:slideDown()
                                   });//End:load()
                         });//End:animate()
               });//End:slideUp

     return false;
     });

});