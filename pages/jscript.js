$(document).ready(function(){

        
  $(".slideshow-pictures > div:gt(0)").hide();

        setInterval(function() { 
          $('.slideshow-pictures > div:first')
            .fadeOut(300)
            .next()
            .fadeIn(300)
            .end()
            .appendTo('.slideshow-pictures');
        },  4000);
})