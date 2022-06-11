$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut();
});


//Short form of document.ready
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
             items: 2   
            }
        }
    });
});

$(function () {
    $("#progress-elements").waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 1000);
        });
        
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});


$(function(){
    $('#services-tabs').responsiveTabs({
        startCollapsed: 'accordion',
        animation: 'slide',
        duration: 600
    });
});


$(window).on('load', function(){
    // initialize isotope
    
    $('#isotope-container').isotope({});
    
    // filter buttons initialization
    $("#isotope-filters").on('click', 'button', function(){
        var filterValue = $(this).attr('data-filter');
        $('#isotope-container').isotope({
            filter: filterValue
        });
        
        // Rmeove active class from previous button
        $("#isotope-filters").find('.active').removeClass('active');
        // Add it to newly clicked button
        $(this).addClass('active');
        
    });
});


// Magnifier 

$(function() {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
});


$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });
});

$(function(){
     $('.counter').counterUp({
                delay: 10,
                time: 2000
        });
});


$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
             0: {
                 items: 2
             }, 
            480: {
                items: 3
            }, 
            768: {
                items: 6
            }
        }
    });
});

// Google Map 

$(window).on('load', function(){
    var addressString = "230 Broadway, NY, New York 10007, USA";
    var latLong = {
        lat: 40.712742,
        lng: -74.005966
    };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: latLong,
    });
    
    const marker = new google.maps.Marker({
      position: latLong,
      map: map,
      title: "Click To View Address"
    });
    
    const infowindow = new google.maps.InfoWindow({
    content: addressString
    });

    marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    
    google.maps.event.addDomListener(window, 'resize', function(){
        
        var center = map.getCenter();
        google.maps.event.trigger(map,'resize');
        map.setCenter(center);
    });
    
});



//Show/Hide White Nav


$(function () {

    toggleNav();

    $(window).scroll(function () {

        toggleNav();
    });

    function toggleNav() {
        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");
            $("a.navbar-brand img").attr("src", "img/logo/logo-dark.png");
            $('#back-to-top').fadeIn();

        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            $('#back-to-top').fadeOut();

        }
    }

});


// Scroll Spy Custom


$(document).ready(function(){

  var sectionIds = $('a.nav-link');

    $(document).scroll(function(){
        sectionIds.each(function(){
            $(this).removeClass('active');
            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 80 && scrollPosition >= containerOffset - 80){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
   
});


// Smooth Scrolling

$(function(){
    $('a.smooth-scroll').click(function(event){
        
        event.preventDefault();
        var sec_id = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop:  $(sec_id).offset().top - 65
        }, 750, "easeInOutExpo");
        
    })
})



$(function() {
  new WOW().init();  
});

$(window).on('load', function() {
   $('#home-heading-1').addClass("animated fadeInDown"); 
   $('#home-heading-2').addClass("animated fadeInLeft"); 
   $('#home-text').addClass("animated zoomIn"); 
   $('#home-btn').addClass("animated zoomIn"); 
   $('#arrow-down i').addClass("animated fadeInDown infinite"); 
   
});







































