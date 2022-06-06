$('.slider-wrapper').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.brand-logo-wrapper').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$(".menu-trigger").on("click", function() {
    $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
    return false;
});

$(".menu-close, .off-canvas-overlay").on("click", function() {
    $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
});