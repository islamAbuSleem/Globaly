$(document).ready(function(){
    
    // animate search field
    
    $('#search').click(function(e){
      e.preventDefault();
        $(this).css({"-webkit-transform":"translate(100px)"});
        $('#search-form').css("position","absolute").fadeIn(1500);
    });
    
    // active linke
    
    $('.navbar-light .navbar-nav .nav-link').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    //make read more button in center
    if($(window).innerWidth() <= 550){
    $('#slider-btn').css({
        top:($('.header .carousel').innerHeight()/2)+60, 
        left:($('.header .carousel').innerWidth()/2)-(($('#slider-btn').innerWidth()/2))
    
    });
    }else{
        $('#slider-btn').css({
        top:($('.header .carousel').innerHeight()/2)+80, 
        left:($('.header .carousel').innerWidth()/2)-(($('#slider-btn').innerWidth()/2))
    
    });
    }
    // testmonials
    
    setInterval(function(){

    $('.testmonials .container .row .first-test .comm:first').delay(3000).fadeOut(1000,function(){
        $(this).removeClass('active').next().addClass('active').fadeIn()
    .end().appendTo('.first-test');
    });
    
    },3000);
    
    setInterval(function(){

    $('.testmonials .container .row .second-test .comm:first').delay(3000).fadeOut(1000,function(){
        $(this).removeClass('active').next().addClass('active').fadeIn()
    .end().appendTo('.second-test');
    });
    
    },3000);
    
    // side bar menu when screen width less than 992
    
    $(function(){
        if ($(window).innerWidth() < 992) {
           $('.navbar-collapse').wrapInner('<div class="sidebar"></div>');
        $('.sidebar').prepend('<div class="dismiss"><i class="fa fa-arrow-right"></i></div>');
    
        $('.navbar-toggler').on('click', function () {
                $('.menu-overlay,.navbar-collapse').fadeIn(10,function(){
                    $('.sidebar').animate({
                    right: 0
                },600);
                });                
            });
       
        $('.header .navbar .navbar-collapse .sidebar .dismiss > .fa,.menu-overlay').on('click',function(){
            $('.sidebar').animate({
                    right: '-' + $('.sidebar').innerWidth()
                },500,function(){
                $('.menu-overlay,.navbar-collapse').fadeOut(5);
            });
        });
        }   
    });
});
