$(document).ready(function () {
    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });
});

$(window).mousemove(function(e) {     
    $(".cursor").css({
      left: e.pageX,
      top: e.pageY
    })    
  });
  $(window).mousemove(function(e) {
    $(".transparencia")
      .on("mouseenter", function() {   
      $('.cursor').addClass("active")   
    })  
  });
  $(window).mousemove(function(e) {
    $(".transparencia")
      .on("mouseleave", function() {    
      $('.cursor').removeClass("active")    
    })
  });

$(window).mousemove(function(e) {     
    $(".cursor-index").css({
      left: e.pageX,
      top: e.pageY
    })    
  });
  $(window).mousemove(function(e) {
    $(".transparencia")
      .on("mouseenter", function() {   
      $('.cursor-index').addClass("active-index")   
    })  
  });
  $(window).mousemove(function(e) {
    $(".transparencia")
      .on("mouseleave", function() {    
      $('.cursor-index').removeClass("active-index")    
    })
  });


$(document).ready(function(){
  $(".transparencia").hover(function(){
    $(".cursor").css("opacity", "40%");
    }, function(){
    $(".cursor").css("opacity", "100%");
  });
});

$(document).ready(function(){
  $(".transparencia").hover(function(){
    $(".cursor-index").css("opacity", "70%");
    }, function(){
    $(".cursor-index").css("opacity", "100%");
  });
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
// vh

