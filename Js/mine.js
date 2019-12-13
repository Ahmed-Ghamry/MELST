
$( document ).ready(function() {
    
    // owl carousel in about page for section 3
    $('.carousel-container .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        rtl:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    // chart plugin

     


    var Dsection = $(".distiguish-section").offset().top-500;

    $(window).scroll(function(){
        var wScroll = $(window).scrollTop();

        if(wScroll >Dsection){
            $('.chart').easyPieChart({

                scaleColor:false,
                lineWidth:5,
                size:130,
                animate:{
                    duration:2000,
                    enabled:true
        
                },	
        
            })
        }

    })

});